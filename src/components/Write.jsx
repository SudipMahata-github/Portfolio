import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { Toaster, toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { postTestimonial } from '@/http/api';
import useTokenStore from '@/store';

const Write = () => {

    const token = useTokenStore(state => state.token)

    const FormSchema = z.object({
        username: z.string().min(2, { message: "Name must be at least 2 characters." }),
        title: z.string().min(2, { message: "Title must be at least 2 characters." }),
        img: z
            .any()
            .refine(files => files?.[0]?.size <= 10000000, "Max file size is 10MB")
            .refine(files => ["image/jpeg", "image/png", "image/gif"].includes(files?.[0]?.type), "Only JPEG, PNG, and GIF formats are allowed."),
        desc: z.string().min(2, { message: "Description must be at least 2 characters." }),
    });

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            title: "",
            img: null,
            desc: "",
        },
    });

    const mutation = useMutation({
        mutationFn: (formData) => postTestimonial(formData, token),
        onSuccess: () => {
            toast.success('Thank you! Your feedback helps me improve.');
        },
        onError: () => {
            toast.error("Something went wrong.");
        }
    });

    function onSubmit(data) {
        if (!data.username || !data.title || !data.img || !data.desc) {
            return toast.error('All fields are required.');
        }

        const formData = new FormData();
        formData.append("name", data.username);
        formData.append("designation", data.title);
        formData.append("profileImage", data.img[0]);
        formData.append("desc", data.desc);

        mutation.mutate(formData, token);
    }

    return (
        <>
            <div className="w-full mx-auto md:px-8">
                <div className="flex justify-center">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="img"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input type="file" onChange={(e) => field.onChange(e.target.files)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="desc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end">
                                {!mutation.isPending ? (
                                    <Button type="submit">Submit</Button>
                                ) : (
                                    <Button disabled>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                )}

                            </div>
                        </form>
                    </Form>
                </div>
            </div>

        </>
    );
};

export default Write;

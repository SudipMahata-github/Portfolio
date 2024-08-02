import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { ToastAction } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";
import { Toaster, toast } from 'sonner'
import { useMutation } from '@tanstack/react-query';
import { register } from '@/http/api';


const Register = () => {
    const [subProcess, setSubProcess] = useState(false)

    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z.string().min(2, {
            message: "password must be at least 2 characters.",
        }),
        email: z.string().min(4, {
            message: "password must be at least 2 characters.",
        }),

    });


    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
            email: ""

        },
    });

    const mutation = useMutation({
        mutationFn: register,

        onSuccess: () => {
            toast.success('Successfully signed up.')
        },
        onError: () => {
            toast.error("User already exists.")
        }
    })
    function onSubmit(data) {
        console.log(data)
        mutation.mutate({ name: data.username, email: data.email, password: data.password })
    }
    return (
        <>
            <div className=" w-full mx-auto md:px-8 ">

                <div className=" flex justify-center">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full   space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter username" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter email" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter password" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end">
                                {
                                    !mutation.isPending ? <Button type="submit">Submit</Button> : <Button disabled>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                }

                            </div>

                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Register
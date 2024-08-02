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
import { contact } from "@/http/api";




const Contact = () => {


    // const { toast } = useToast()
    const [subProcess, setSubProcess] = useState(false)
    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        subject: z.string().min(2, {
            message: "Subject must be at least 2 characters.",
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters.",
        }),
    });

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            subject: "",
            message: ""
        },
    });

    const mutation = useMutation({
        mutationFn: contact,

        onSuccess: () => {
            toast.success('Your message was sent successfully.')
        },
        onError: () => {
            toast.error("Something went wrong.")
        }
    })

    function onSubmit(data) {
        mutation.mutate({ name: data.username, subject: data.subject, message: data.message })

    }
    return (
        <>
            <div>
                <Toaster richColors position="top-center" />
            </div>

            {
                mutation.isSuccess ? <div className="p-6 bg-white  h-[30vh] md:h-[50vh] flex flex-col align-center justify-center ">
                    <h2 className="text-2xl font-bold text-center text-green-600">Thank you!</h2>
                    <p className="mt-4 text-center text-gray-700">Message delivered successfully.</p>
                </div> : <div id="contact" className="py-32 max-w-screen-xl mx-auto px-4 md:px-8 ">
                    <div className='flex justify-center mb-4'>
                        <h1 className="text-gray-800 text-3xl font-semibold">
                            Get In Touch
                        </h1>
                    </div>
                    <div className=" flex justify-center ">
                        <Form {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full md:w-1/2  space-y-6 ">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter subject" {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Enter message here.." {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex justify-center">
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
            }





        </>
    )
}

export default Contact


















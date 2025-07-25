"use client";
import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const EmailForm = () => {

    const formSchema = z.object({
        name: z.string().min(1,{
            message: "Name must be at least 1 characters.",
        }).max(50),
        email: z.string().email(),
        phone: z.string(),
        message: z.string().min(1,{
            message: "Tell me something you want me to know about!",
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message:""
        },
    })

    const handleSubmit = (v:z.infer<typeof formSchema> ) => {
        emailjs
            .send('service_hciik8m','contact_form', v, 'Yv56iI4_brBlXZsrp')
            .then(
                () => {
                    alert("Email sent successfully.");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        console.log("Form submitted");
    };
    return (
        <div className="w-3/4 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-8">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Get In Touch!
            </h2>
            <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
                Leave me a message, and I will response as soon as possible.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <div className="mt-6 flex justify-between">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
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
                                    <Input placeholder="Your Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone (optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="Anything I need to know!" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-32">Send</Button>
                </form>
            </Form>
        </div>
    );
};

export default EmailForm;
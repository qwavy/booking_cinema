import React, {useState} from 'react';
import './Login.css'

import { Button } from "@/components/UI/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/UI/form"
import { Input } from "@/components/UI/input"
import {useForm} from "react-hook-form";

import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {Link} from "react-router-dom";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(32)
})

const Login = ():JSX.Element => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div className="login-page">
            <h1 className="font-black text-2xl text-center mb-8">Login</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} className="form-input"/>
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
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
                                    <Input placeholder="Enter your password" {...field} className="form-input"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
            <div className="link-to">
                <Link to="/register" className="font-medium link-to-text">
                    i dont have account
                </Link>
            </div>
        </div>
    )
};

export default Login;
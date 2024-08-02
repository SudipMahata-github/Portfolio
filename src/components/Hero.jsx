import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import sudip from "../assets/Sudip Mahata.pdf"
const subHeading = [
    {
        name: "Hi, my name is",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>

    },

]



const Hero = () => {

    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
                        <motion.div
                            className="space-y-5 max-w-2xl mx-auto text-center xl:text-left"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-wrap items-center gap-6 justify-start">
                                {subHeading.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-x-2 text-gray-500 text-md"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </motion.div>
                                ))}
                            </div>
                            <motion.h1
                                className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Sudip Mahata
                            </motion.h1>
                            <motion.h1
                                className="text-2xl text-gray-800 font-extrabold mx-auto md:text-3xl text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Build stuff that you can see on websites.
                            </motion.h1>
                            <motion.p
                                className="mx-auto xl:mx-0 text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                I specialize in front-end development, focusing on creating outstanding digital experiences.
                            </motion.p>
                            <motion.div
                                className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <a download href={sudip} className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
                                    Download
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                    Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <div className="relative">
                                {/* <img src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxjb2Rpbmd8ZW58MHwwfDB8fHww" className="rounded-lg" alt="" /> */}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero
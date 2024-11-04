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
            {/* <div className="flex min-h-screen w-full flex-col">
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
                                <img src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxjb2Rpbmd8ZW58MHwwfDB8fHww" className="rounded-lg" alt="" />
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div> */}



            <>
                {/* Hero */}
                <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                        {/* Announcement Banner */}
                        <div className="flex justify-center">
                            <a
                                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
                                href="https://github.com/SudipMahata-github"
                                target='__blank'
                            >
                                Continue with
                                <span className="flex items-center gap-x-1">
                                    <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                                        Github
                                    </span>
                                    <svg
                                        className="shrink-0 size-4 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        {/* End Announcement Banner */}
                        {/* Title */}
                        <div className="mt-5 max-w-xl text-center mx-auto">
                            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                                Sudip Mahata
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className="mt-5 max-w-3xl text-center mx-auto">
                            <p className="text-lg text-gray-600 dark:text-neutral-400">
                                I specialize in front-end development, focusing on creating outstanding digital experiences.
                            </p>
                        </div>
                        {/* Buttons */}
                        <div className="mt-8 gap-3 flex justify-center">
                            <a
                                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
                                download href={sudip}
                            >
                                {/* <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> */}
                                Download Resume
                            </a>
                        </div>
                        {/* End Buttons */}
                    </div>
                </div>
                {/* End Hero */}
            </>


        </>
    )
}

export default Hero
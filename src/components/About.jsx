
import React from 'react'
import { motion } from 'framer-motion'
const About = () => {


    return (
        <>
            <section id="about" className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className=" flex flex-1 justify-center  lg:block">
                            <img src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFib3V0fGVufDB8fDB8fHww" className="md:max-w-lg rounded-lg w-[90%] md:w-[auto] " alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h3 className="text-[#5e75ed] font-semibold">
                                A little bit about me...
                            </h3>
                            {/* <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Build your SaaS solution with help from our experts
                            </p> */}
                            <p className="mt-3 text-gray-600">
                                Hey there! I'm Sudip, I began my web development journey in 2022. It all started when I began playing with colors on random websites using Chrome DevTools. From there, my interest grew, and I transitioned to building complete websites from scratch. Now, I'm all about making websites that look great and work smoothly. I keep learning and creating cool stuff online.
                            </p>
                            <a
                                className="mt-5 px-4 py-2 text-[#5e75ed] font-medium bg-indigo-50 rounded-full inline-flex items-center"
                                href="https://github.com/SudipMahata-github" target='_blank'>
                                Check out my works
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default About
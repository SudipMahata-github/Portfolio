import React from 'react'

const Experience = () => {
    const jobs = [
        {
            title: "Software Developer",
            desc: "Build new features and maintain websites,work closely with developers, testers, and product managers to effectively integrate front-end solutions. This collaborative effort ensures that our projects consistently meet high standards of functionality, usability, and user experience",
            From: "August , 2022",
            To: "Current",
            type: "Full-time",
            location: "Noida",
            href: "javascript:void(0)",
            company: "ShramIN Connect Pvt. Ltd."
        },
        {
            title: "Front End Developer",
            desc: " Worked on responsive design and improved search engine optimization, while learning and exploring new technologies and tools.",
            From: "March , 2022",
            To: "August , 2022",
            type: "Internship",
            location: "Noida",
            href: "javascript:void(0)",
            company: "Blue Berry E-Services Pvt. Ltd."
        },
        // {
        //     title: "Full-Stack Developer",
        //     desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
        //     date: "Jan 2, 2022",
        //     salary: "163,273 USD",
        //     type: "Full-time",
        //     location: "Remote",
        //     href: "javascript:void(0)"
        // },
    ]
    return (
        <>

            <>
                <section id='experience' className="mt-12 max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className='flex justify-center'>
                        <h1 className="text-gray-800 text-3xl font-semibold">
                            Experience
                        </h1>
                    </div>
                    {/* 
                    <ul className="mt-12 space-y-6">
                        {
                            jobs.map((item, idx) => (
                                <div key={idx} className="p-5 bg-white rounded-md  shadow-2xl shadow-gray-600/10">
                                    <a href={item.href}>
                                        <div>
                                            <div className="justify-between sm:flex">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-medium text-[#5e75ed]">
                                                        {item.title}
                                                    </h3>
                                                    <h3 className="text-md font-medium mt-2 text-gray-500">
                                                        {item.company}
                                                    </h3>
                                                    <p className="text-gray-500 mt-2 pr-2 w-[95%]">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                                <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                                                    <span className="flex items-center text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                        </svg>
                                                        {item.From}
                                                    </span>
                                                    <span className="flex items-center text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                        </svg>
                                                        {item.To}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                                                <span className="flex items-center text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                    </svg>
                                                    {item.type}
                                                </span>
                                                <span className="flex items-center text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </ul> */}

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mt-12">
                        {/* Item #1 */}
                        <div className="relative flex  items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#6b7280] text-[#6b7280] group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={10}
                                >
                                    <path
                                        fillRule="nonzero"
                                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                    />
                                </svg>
                            </div>
                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 border rounded-lg shadow-2xl shadow-gray-600/10">
                                <div className="font-bold text-[#6b7280] text-xl mb-2">Front End Developer</div>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-2 mb-1">
                                    <div className=" text-[#6b7280]"> Blue Berry E-Services Pvt. Ltd.</div>
                                    <time className="font-caveat font-medium text-[#6b7280] hidden md:block">
                                        Mar  2022 - July 2022
                                    </time>
                                </div>
                                <div className="text-[#6b7280]">
                                    Worked on responsive design and improved search engine optimization, while learning and exploring new technologies and tools.
                                </div>
                            </div>
                        </div>
                        {/* Item #2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#6b7280] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={10}
                                >
                                    <path
                                        fillRule="nonzero"
                                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                    />
                                </svg>
                            </div>
                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 border rounded-lg shadow-2xl shadow-gray-600/10">
                                <div className="font-bold text-[#6b7280] text-xl mb-2">Software Developer</div>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-2 mb-1">

                                    <div className=" text-[#6b7280]">ShramIN Connect Pvt. Ltd.</div>
                                    <time className="font-caveat font-medium text-[#6b7280] ">
                                        Aug  2022 - Current
                                    </time>
                                </div>
                                <div className="text-[#6b7280] mt-2">
                                    Build new features and maintain websites,work closely with developers, testers, and product managers to effectively integrate front-end solutions. This collaborative effort ensures that our projects consistently meet high standards of functionality, usability, and user experience.
                                </div>
                            </div>
                        </div>



                    </div>

                </section>
            </>

        </>
    )
}

export default Experience
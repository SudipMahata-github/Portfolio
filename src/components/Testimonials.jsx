import { getTestimonials } from '@/http/api'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const Testimonials = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['testimonials'],
        queryFn: getTestimonials
    })
    console.log(JSON.stringify(isLoading))
    // const testimonials = [
    //     {
    //         profileImage: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    //         name: "Martin escobar",
    //         designation: "Founder of meta",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
    //     },
    //     {
    //         profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
    //         name: "Angela stian",
    //         designation: "Product designer",
    //         desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    //     },
    //     {
    //         profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
    //         name: "Karim ahmed",
    //         designation: "DevOp engineer",
    //         desc: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
    //     },

    // ]

    return (
        <>
            <section id='testimonial' className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl  text-center md:mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold  ">

                            Testimonials
                        </h3>
                        <p className="mt-3 text-gray-600">
                            See what others saying about me
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                data?.data?.map((item, idx) => (
                                    isLoading ? <div className="flex flex-col space-y-3 justify-center items-center">
                                        <Skeleton className="h-[125px] w-[300px] rounded-xl" />

                                    </div> :
                                        <div key={idx} className=" p-4 rounded-xl shadow-2xl shadow-gray-600/10">
                                            <figure>
                                                <div className="flex items-center gap-x-4">
                                                    <img src={item.profileImage} className="w-16 h-16 rounded-full object-cover" />
                                                    <div>
                                                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                        <span className="block text-gray-600 text-sm mt-0.5">{item.designation}</span>
                                                    </div>
                                                </div>
                                                <blockquote>
                                                    <p className="mt-6 text-gray-700">
                                                        {`"${item.desc}"`}
                                                    </p>
                                                </blockquote>
                                            </figure>
                                        </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials




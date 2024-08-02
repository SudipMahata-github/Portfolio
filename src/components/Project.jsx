
import React, { useState } from 'react';
import pscreen from '/pscreen.png';
import { Button } from './ui/button';

const Project = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [

        {
            title: "Admin Dashboard ",
            desc: "This project is a simple admin dashboard made with Next.js 14. It uses features like the App Router and Server Actions to handle navigation and server tasks. The dashboard includes a search function, where you can search for things using the URL. It also has pagination, letting you browse through pages of data using the URL",

            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            subHeading: "Blog website",
            href: null,
            code: "https://github.com/SudipMahata-github/admin-dashboard-nextjs14"
        },
        {
            title: "Food Recipe App",
            desc: " My first mobile app, a food recipe app built using React Native and Expo. The app is styled with Tailwind CSS and uses TheMealDB API to display a variety of recipes across different categories. During the development process,  fundamental components such as View, ScrollView, Image and Text were learned and utilized",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            subHeading: "Food Recipe App",
            href: "https://expo.dev/preview/update?message=update%20packages&updateRuntimeVersion=1.0.0&createdAt=2024-05-10T05%3A27%3A20.189Z&slug=exp&projectId=cdcca71f-65ea-4351-8305-49792424a817&group=65cb61b2-d99b-4f70-a604-51974af8ec0c",
            code: "https://github.com/SudipMahata-github/Food-Recipe-App/tree/master"
        },
        {
            title: "Portfolio",
            desc: " Built with React on the frontend, styling using the Shadcn library and Tailwind CSS. State management is handled by the Zustand library. React Query is used for efficient data fetching. The backend is powered by Node.js and Express.js. File uploads are managed with Cloudinary, and MongoDB is used for the database",
            img: pscreen,
            subHeading: "Personal portfolio",
            href: "https://sudipmahata.com/",
            code: "https://github.com/SudipMahata-github/Portfolio/tree/master"
        },
        {
            title: "Random Colour Genaretor",
            desc: "This project is a Random Color Generator made with core JavaScript. It creates random colors using the RGB (Red, Green, Blue) model, showing these colors on a web page ",
            href: "https://randomcolorgenerator44.netlify.app/",
            code: "https://github.com/SudipMahata-github/colorgenerator"

        }, {
            title: "Image Search ",
            desc: "Image Search Website that uses the Unsplash API. It's the first time integrating an API into a project, allowing users to search for and display images from Unsplash. This project helps in learning how to work with APIs",
            href: "https://imgsearchp.netlify.app/",
            code: "https://github.com/SudipMahata-github/imgsearch"
        }, {
            title: "BeSocial",
            desc: "This project is a Social Media Website UI.I learned how to create complex page layouts and gained a deeper understanding of CSS.It was a great way to practice making attractive and easy to  use web",
            code: "https://github.com/SudipMahata-github/besocial"

        },
        {
            title: "Weather Report",
            desc: " Simple Weather Report Website that uses the OpenWeather API. It shows the weather of a city, providing users with up-to-date weather information. This project helps in learning how to fetch and display data from an external API",
            href: "#",
            code: "https://github.com/SudipMahata-github/weatherapp"

        }, {
            title: "Portfolio V1",
            desc: "This project is my first portfolio website, added animations using the AOS library. It was a valuable learning experience in building interactive and dynamic web applications while showcasing my skills and projects effectively",
            href: "https://sudipmahata.netlify.app/",
            code: null

        }, {
            title: "Simple Todo",
            desc: "Simple ToDo website where I learned how to manipulate the DOM (Document Object Model) using core JavaScript. It was a practical exercise that helped me understand how to create and manage dynamic content on web pages",
            href: "https://basictodos.netlify.app/",
            code: "https://github.com/SudipMahata-github/todo"
        },

    ]
    const displayedprojects = showAll ? projects : projects.slice(0, 6);

    return (
        <>

            <section id="project" className="py-16">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div >
                        <h1 className="text-gray-800 text-3xl font-semibold 
                        text-center">Projects</h1>

                    </div>
                    <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            displayedprojects.map((item, idx) => (
                                <div className="border rounded-lg shadow-2xl shadow-gray-600/10">
                                    <div className="flex items-start justify-between p-4">
                                        <div className="space-y-2 ">
                                            {/* {item.icon} */}
                                            <h4 className="text-gray-800 text-xl font-semibold">{item.title}</h4>
                                            <p className="text-gray-600 text-md ">{item.desc}</p>
                                        </div>

                                    </div>
                                    <div className="py-2 px-4 border-t text-right flex gap-4 items-center justify-between">
                                        <a target='__blank' href={item.href} className={`${item.href ? "text-[#5e75ed]" : "black"}  text-md font-medium`}>
                                            View
                                        </a>
                                        <a href={item.code} target='__blank'>
                                            <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Code</button>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-8 text-center">

                    <Button onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'Show More'}</Button>
                </div>
            </section>
        </>
    );
};

export default Project;

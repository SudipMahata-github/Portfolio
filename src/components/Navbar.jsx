import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Login from './Login'
import Register from './Register'
import useTokenStore from '@/store'
import Write from './Write'
import Sudip from "/sudip.png"



const Navbar = () => {
    const [state, setState] = useState(false)
    const token = useTokenStore(state => state.token)
    const setToken = useTokenStore((state) => state.setToken)

    const logout = () => {
        setToken("")
    }
    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "About", path: "#about" },
        { title: "Experience", path: "#experience" },
        { title: "Projects", path: "#project" },
        { title: "Testimonials", path: "#testimonial" },
        { title: "Contact", path: "#contact" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    return (
        <>

            <nav className={`bg-white  md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}  shadow-2xl shadow-gray-600/10`}>
                <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8 ">
                    <div className="flex items-center justify-between py-5 md:block">
                        <a href="javascript:void(0)">
                            <img
                                // src="https://www.floatui.com/logo.svg"
                                src={Sudip}
                                // width={50}
                                // height={50}
                                className='w-10 h-10'
                                alt="Float UI logo"
                            />
                        </a>
                        <div className="md:hidden">
                            <button className="menu-btn text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-700 hover:text-gray-900">
                                            <a href={item.path} className="block">
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">

                            {
                                !token && <Dialog>
                                    <DialogTrigger asChild>
                                        <a href="javascript:void(0)" className="block text-gray-700 hover:text-gray-900">
                                            Log in
                                        </a>
                                    </DialogTrigger>
                                    <DialogContent className="w-[95%] md:min-w-[20%] rounded-lg ">
                                        <DialogHeader>
                                            <DialogTitle>Log in</DialogTitle>
                                            {/* <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription> */}
                                        </DialogHeader>
                                        <Login />
                                        {/* <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter> */}
                                    </DialogContent>
                                </Dialog>
                            }

                            {
                                !token && <div className='pb-4 md:pb-0 '>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex cursor-pointer">
                                                Sign up
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="w-[95%] md:min-w-[20%] rounded-lg ">
                                            <DialogHeader>
                                                <DialogTitle>Sign up</DialogTitle>
                                                {/* <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription> */}
                                            </DialogHeader>
                                            <Register />

                                        </DialogContent>
                                    </Dialog>
                                </div>

                            }

                        </div>
                        {
                            token && <div className='md:flex gap-8 items-center justify-center pb-4 md:pb-0 '>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        {/* <a href="javascript:void(0)" className="block text-gray-700 hover:text-gray-900">
                                            Log in
                                        </a> */}
                                        <li className="text-gray-700 hover:text-gray-900 list-none">
                                            <a href="#" className="block ">
                                                Write
                                            </a>
                                        </li>
                                    </DialogTrigger>
                                    <DialogContent className="w-[95%] md:min-w-[20%] rounded-lg ">
                                        <DialogHeader>
                                            <DialogTitle>Write Here</DialogTitle>
                                            {/* <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription> */}
                                        </DialogHeader>
                                        <Write />
                                        {/* <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter> */}
                                    </DialogContent>
                                </Dialog>
                                <div onClick={logout} >
                                    <div className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex cursor-pointer mt-4 md:mt-0 ">
                                        Log out
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* <div className='hidden md:block'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div> */}



                            </div>
                        }

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
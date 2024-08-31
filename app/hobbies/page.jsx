"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const hobbies = [
    {
        num: "01",
        title: "Music Composing",
        discription: "i love composing music",
        href:""
    },
    {
        num: "02",
        title: "Coding",
        discription: "ITS FUNNN",
        href:""
    },
    {
        num: "03",
        title: "Cooking",
        discription: "make some yummies!!!",
        href:""
    },
    {
        num: "04",
        title: "Sports and etc...",
        discription: "i do many other stuff! XDDD",
        href:""
    },
];


import { motion } from "framer-motion";


const Hobbies = () => {
    return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" initial={{opacity:0}} animate={{opacity:1,transition:{delay: 2.4, duration: 0.4, ease: "easeIn"},}}>
                {hobbies.map((hobbie, index) => {
                    return ( <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        <div className= "w-full flex justify-center items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{hobbie.num} </div>
                            <Link href={hobbie.href} className="w-[70px] h-[70px] rounded-full bg-black group-hover:bg-purple-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45 hover:ml-10">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-purple-500 transition-all duration-500">{hobbie.title}</h2>
                        <p>{hobbie.discription}</p>
                        <div className="border-b border-white/20 w-full "></div>
                    </div>
                    );
                })}

            </motion.div>
        </div>
    </section>;
}


export default Hobbies;
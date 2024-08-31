"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path:"/",
    },
    {
        name: "hobbies",
        path:"/hobbies",
    },
    {
        name: "resume",
        path:"/resume",
    },
    {
        name: "projects",
        path:"/projects",
    },
    {
        name: "contacts",
        path:"/contacts",
    },
];

const Nav = ()=> {
    const pathname = usePathname();
    console.log(pathname);
    return (<nav className ="flex gap-8">
        {links.map((link, index)=> {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-purple-500 border-b-2 border-purple-500"} capitalize font-medium hover:text-purple-500 transition-all`}> 
                {link.name} 
            </Link>
        })}
    </nav>
    );
};

export default Nav;
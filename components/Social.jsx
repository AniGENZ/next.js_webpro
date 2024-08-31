import Link from "next/link";

import { FaGithub, FaLinkedin} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "" },
    {icon: <FaLinkedin />, path: "" },
];


const Social = ({conatinerStyles, iconStyles}) => {
    return ( <div className={conatinerStyles}>
        {socials.map((item, index) => {
            return ( <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
    );
};


export default Social;
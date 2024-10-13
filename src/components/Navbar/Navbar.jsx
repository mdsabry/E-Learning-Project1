import { MdMenuOpen } from "react-icons/md";
// import React from "react";
import {motion} from "framer-motion"

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "#",
    },
    {
      id: 3,
      title: "About Us",
      link: "#",
    },
    {
      id: 4,
      title: "Our Team",
      link: "#",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "#",
    },
  ];

  return (
    <nav className="relative z-20">
      <motion.div
      initial={{opacity:0, y: -50}}
      animate={{opacity:1, y: 0}}
      className='container py-10 flex justify-between items-center'>
        {/* Logo Section */}
        <div>
          <h1 className=' font-bold text-3xl'>E-Learning</h1>
        </div>
        {/* Menu Section */}
        <div className='hidden lg:block '>
          <ul className=' flex items-center gap-3'>
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  className=' cursor-pointer inline-block py-2 px-3 hover:text-secondary relative group'
                  href={item.path}>
                  <div className='hidden w-8 h-0.5 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block'></div>
                  {item.title}
                </a>
              </li>
            ))}
            <button className='primary-btn'>Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu Section */}
        <div className='lg:hidden'>
          <MdMenuOpen className=' text-4xl' />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

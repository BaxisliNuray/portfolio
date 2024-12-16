import React from 'react'
import { FaLinkedin } from "react-icons/fa"; 
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {motion} from 'motion/react'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 item-center'>
    <p className='text-4xl' >BN</p>
</div>
<div className='flex items-center justify-center gap-4 m-8 text-2xl'>
    <motion.a whileHover={{
    scale: 1.1,
    boxShadow: "0px 0px 15px 5px rgba(59, 89, 152, 0.8)", // Light blue glow for LinkedIn
  }}
  whileTap={{ scale: 0.95 }}
  style={{
    background: "transparent", 
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none", 
  }}
   href="https://www.linkedin.com/in/nuray-bakhishli-07028a249/" target="_blank"><FaLinkedin /></motion.a>
    <motion.a whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 15px 5px rgba(255, 255, 0, 0.8)", // GitHub black glow
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
        }}
        href="https://github.com/BaxisliNuray" target="_blank"><FaGithub/></motion.a>
    <motion.a
    whileHover={{
      scale: 1.1,
      boxShadow: "0px 0px 15px 5px rgba(225, 48, 108, 0.8)", // Instagram pink glow
    }}
    whileTap={{ scale: 0.95 }}
    style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    }}
    href="https://www.instagram.com/bakhishli.n/" target="_blank"><FaInstagram/></motion.a>
</div>
    </nav>
  )
}

export default Navbar

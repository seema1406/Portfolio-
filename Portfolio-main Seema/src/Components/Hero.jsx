import React from 'react'
import { HERO_CONTENT } from '../Index';
import { motion } from "framer-motion";
import Profile from "../profile.png";

const container =(delay) => ({
  hidden:{x:-100, opacity:0},
  visible:{x:0,opacity:1,
  transition:{duration:0.5, delay:delay}},
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap '>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col item-centre lg:items-start'>
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Seema Mukhiya</motion.h1>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500 via-indigo-500 to-green-500 text-transparent text-3xl bg-clip-text'>MCA Graduate | DevOps & Web Developer</motion.span>
                <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p> 

            </div>
          </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
              <div className='flex justify-centre'>
                  <img src={Profile} alt="Profile" className='rounded-lg  h-96 w-72 ' />
              </div>
            </div>
      </div>
    </div>
  )
}

export default Hero


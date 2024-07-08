import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* FOR INITIAL TEXT PART */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* CIRCLE AND LINE */}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* PURPLE CIRCLE */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          {/* LINE */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        {/* TEXT */}
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Haripriya</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am making this project for<br className="sm:block hidden"/> FSD lab exam</p>
        </div>

      </div>
      {/* COMPUTER CANVAS */}
      <ComputersCanvas/>
    </section>
  )
}

export default Hero
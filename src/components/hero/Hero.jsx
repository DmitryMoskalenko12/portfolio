import './hero.scss';
import { motion } from 'framer-motion';

const Hero = () => {
    const textVariants = {
      initial: {
        x: -500,
        opacity: 0
      },

      animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
      },
      scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
      }
    }

    const sliderVariants = {
        initial: {
          x: 0
        },
  
        animate: {
          x: '-220%',
          transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 20,
          },
        },
      }

    return <div className='hero'>
        <div className='wrapper'>
            <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>
                <motion.h1 variants={textVariants}>Moskalenko Dmytro</motion.h1>
                <motion.h2 variants={textVariants}>Front End developer</motion.h2>
                <motion.div variants={textVariants} className='buttons'>
                <motion.a href='#Portfolio' variants={textVariants}>See the Latest Works</motion.a>
                <motion.a href='#Contact' variants={textVariants}>Contact Me</motion.a>
                </motion.div>
                <motion.img variants={textVariants} animate='scrollButton' src="/scroll.webp" alt="scroll" />
            </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial='initial' animate='animate' className='slidingTextContainer'>
         Front End Developer
        </motion.div>
        <div className='imageContainer'>
            <img src="/hero.webp" alt="hero" />
        </div>
    </div>
}

export default Hero;
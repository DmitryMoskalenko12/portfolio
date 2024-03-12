import './navbar.scss';
import { motion } from 'framer-motion';
import SideBar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className='navbar'>
            <SideBar/>
            <div className='wrapper'>
               <motion.span animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} initial={{opacity: 0, scale: 0.5}}>Front Dev</motion.span>
               <div className='social'>
                <a href=""><img src="/facebook.png" alt="" /></a>
                <a href=""><img src="/instagram.png" alt="" /></a>
                <a href=""><img src="/youtube.png" alt="" /></a>
                <a href=""><img src="/dribbble.png" alt="" /></a>
               </div>
            </div>
        </div>
    )
}

export default Navbar;
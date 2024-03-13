import './navbar.scss';
import { motion } from 'framer-motion';
import SideBar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className='navbar'>
            <SideBar/>
            <div className='wrapper'>
               <motion.span animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} initial={{opacity: 0, scale: 0.5}}>Front End</motion.span>
               <div className='social'>
                <a target='__blank' href="https://www.facebook.com/profile.php?id=100008470213033"><img src="/facebook.png" alt="facebook" /></a>
                <a target='__blank' href="https://www.instagram.com/moskalenko7468/"><img src="/instagram.png" alt="instagram" /></a>
                <a target='__blank' href="https://t.me/Gro_m93"><img src="/telegram.png" alt="telegram" /></a>
               </div>
            </div>
        </div>
    )
}

export default Navbar;
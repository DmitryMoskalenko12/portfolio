import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import project1 from '../../img/project1.png';

const items = [
    {
        id: 1,
        title: 'Coursat project',
        link: 'https://project2-rust-three.vercel.app/',
        img: {test : project1},
        descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur id suscipit numquam vero sunt quam quia, incidunt illo impedit consectetur dicta sed distinctio, non optio, accusamus ut quidem? Quia, reiciendis.'
    },
    {
        id: 2,
        title: 'React Commerce',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fvectors%2F%25D1%2584%25D0%25BE%25D0%25BD&psig=AOvVaw2BHJ4mnAQ_znLaTNYkb2pA&ust=1710352272368000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIje7-6k74QDFQAAAAAdAAAAABAE',
        descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur id suscipit numquam vero sunt quam quia, incidunt illo impedit consectetur dicta sed distinctio, non optio, accusamus ut quidem? Quia, reiciendis.'
    },
    {
        id: 3,
        title: 'React Commerce',
        img: '',
        descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur id suscipit numquam vero sunt quam quia, incidunt illo impedit consectetur dicta sed distinctio, non optio, accusamus ut quidem? Quia, reiciendis.'
    },
    {
        id: 4,
        title: 'React Commerce',
        img: '',
        descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur id suscipit numquam vero sunt quam quia, incidunt illo impedit consectetur dicta sed distinctio, non optio, accusamus ut quidem? Quia, reiciendis.'
    }
]

const Single = ({item}) => {
 const ref = useRef()
 const {scrollYProgress} = useScroll({target: ref});
 const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

 return <section>
   <div className='container'>
    <div className='wrapper'>
     <div className='imageContainer' ref={ref}>
        <img src={item.img.test} alt={item.title} />
     </div>
      <motion.div className='textContainer' style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.descr}</p>
        <a target='__blank' href={item.link}>See Demo</a>
      </motion.div>
    </div>
   </div>
 </section>
}

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset: ['end end', 'start start']});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return <div className='portfolio' ref={ref}>
        <div style={{scaleX: scaleX}} className='progress'>
            <h1>Сompleted works</h1>
            <motion.div style={{scaleX: scaleX}} className='progressBar'></motion.div>
        </div>
        {
            items.map(item => (
                <Single item={item} key={item.id}/>
            ))
        }
    </div>
}

export default Portfolio;
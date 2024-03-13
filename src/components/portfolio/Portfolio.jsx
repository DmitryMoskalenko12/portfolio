import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import project4 from '../../img/project4.png';
import project5 from '../../img/project5.png';
import project6 from '../../img/project6.png';
import project7 from '../../img/project7.png';
import project8 from '../../img/project8.png';
import project9 from '../../img/project9.png';
import project10 from '../../img/project10.png';
import project11 from '../../img/project11.png';
import project12 from '../../img/project12.png';
import project13 from '../../img/project13.png';
import project14 from '../../img/project14.png';
import project15 from '../../img/project15.png';
import project16 from '../../img/project16.png';
import project17 from '../../img/project17.png';
import project18 from '../../img/project18.png';
import project19 from '../../img/project19.png';
import project20 from '../../img/project20.png';

const items = [
    {
        id: 1,
        title: 'Coursat project',
        link: 'https://project2-rust-three.vercel.app/',
        img: {test : project1},
        descr: 'Used in development: React, Framer-motion, Tailwind, Swiper, React-icons'
    },
    {
        id: 2,
        title: 'React Quiz',
        link: 'https://quiz-six-lime.vercel.app/',
        img: {test : project2},
        descr: 'Used in development: React'
    },
    {
        id: 3,
        title: 'Game-shop',
        link:'https://game-shop-test.vercel.app/',
        img: {test : project3},
        descr: 'Used in development: React, Formik, Json-server, Redux-Toolkit, React-transition-group, Yup, React-router-dom, Prettier, Concurrently'
    },
    {
        id: 4,
        title: 'Marvel',
        link:'https://react-marvel-jade.vercel.app/',
        img: {test : project4},
        descr: 'Used in development: React, Prop-types, React-helmet, React-router-dom'
    },
    {
        id: 5,
        title: 'Tv',
        link:'https://tv-two-xi.vercel.app/',
        img: {test : project5},
        descr: 'Used in development: Next.js. It was the usual layout of the page, but I did it on NextJS'
    },
    {
        id: 6,
        title: 'Digital Project',
        link:'https://test-project-ten-chi.vercel.app/',
        img: {test : project6},
        descr: 'Used in development: Next.js, Classname, Mongodb.'
    },

    {
        id: 7,
        title: 'Test Task',
        link:'https://test-project2-tan.vercel.app/',
        img: {test : project7},
        descr: 'Next.js, Mongodb, Swiper, Classnames'
    },
    {
        id: 8,
        title: 'Pizza-shop',
        link:'https://pizza-pink-eight.vercel.app/',
        img: {test : project8},
        descr: 'Next.js, Mongodb, Swiper, Classnames, Redux-Toolkit, React-input-mask, React-transition-group, Formik, Yup, Next-auth, Bcrypt.js'
    },

    {
        id: 9,
        title: 'Wiz-apple',
        link:'https://test-task-wiz.vercel.app/',
        img: {test : project9},
        descr: 'Next.js, Swiper, Classnames, Redux-Toolkit, i18next, Next-118next, TypeScript, Concurrently'
    },

    {
        id: 10,
        title: 'Web-dev',
        link:'https://dmitrymoskalenko12.github.io/web-dev-result/',
        img: {test : project10},
        descr: 'JavaScript, HTML5, CSS, Webpack, Swiper.js'
    },
    {
        id: 11,
        title: 'Tic-Tac-Toe',
        link:'https://tic-tac-toe-rouge-one.vercel.app/',
        img: {test : project11},
        descr: 'React.js, Vite'
    },
    {
        id: 12,
        title: 'Shop-presto',
        link:'https://test-presto.vercel.app/',
        img: {test : project12},
        descr: 'React.js, Email.js, Redux-Toolkit, Formik, React-helmet, React-input-mask, React-paginate, React-router-dom, TypeScript, Yup, Tailwind, Prettier'
    },
    {
        id: 13,
        title: 'Affnetix',
        link:'https://dmitrymoskalenko12.github.io/Affnetix/',
        img: {test : project13},
        descr: 'JavaScript, HTML5, CSS, YouTubeAPI'
    },
    {
        id: 14,
        title: 'Dashboard-test',
        link:'https://dashboard-sepia-three.vercel.app/',
        img: {test : project14},
        descr: 'React.js'
    },
    {
        id: 15,
        title: 'Happy Coaching',
        link:'https://dmitrymoskalenko12.github.io/test-happy/',
        img: {test : project15},
        descr: 'HTML5, CSS, SCSS. It was a test task on layout, the task was to compose only 2 sections.'
    },
    {
        id: 16,
        title: 'VP-test-task',
        link:'https://vp-sepia.vercel.app/',
        img: {test : project16},
        descr: 'React.js, Redux-Toolkit, TypeScript, Eslint(@wemake-services/eslint-config-javascript, @wemake-services/eslint-config-typescript)'
    },
    {
        id: 17,
        title: 'Loan',
        link:'https://dmitrymoskalenko12.github.io/Loan-old-project/',
        img: {test : project17},
        descr: 'HTML5, CSS, SCSS, JavaScript.This is a very old project. '
    },
    {
        id: 18,
        title: 'Pulsometr',
        link:'https://dmitrymoskalenko12.github.io/pulsometr-old-project/',
        img: {test : project18},
        descr: 'HTML5, CSS, SCSS, JavaScript.This is a very old project.'
    },
    {
        id: 19,
        title: 'Picture',
        link:'https://dmitrymoskalenko12.github.io/picture-old-project/',
        img: {test : project19},
        descr: 'HTML5, CSS, SCSS, JavaScript.This is a very old project.'
    },
    {
        id: 20,
        title: 'Window-Project',
        link:'https://dmitrymoskalenko12.github.io/project-window-old/',
        img: {test : project20},
        descr: 'HTML5, CSS, SCSS, JavaScript.This is a very old project.'
    },


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
        <a href={item.link}>See Demo</a>
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
        <div className='progress'>
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
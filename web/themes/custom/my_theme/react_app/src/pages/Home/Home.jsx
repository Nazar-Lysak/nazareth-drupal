import {motion} from 'framer-motion';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <motion.div 
      className={styles.wrapper} 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.25}}
    >
      <motion.h1 
        className={styles.headding} 
        initial={{transform: 'translateX(-800%)'}} 
        animate={{transform: 'translateX(0%)'}} 
        transition={{duration: 0.30}}
      >
        React <span>❤</span> Drupal
      </motion.h1>  
      <motion.p 
        className={styles.text} 
        initial={{transform: 'translateX(-800%)'}} 
        animate={{transform: 'translateX(0%)'}} 
        transition={{duration: 0.30}}
      >
        React and Drupal can be used together to create amazing digital experiences. Knowing where to start and how to leverage the strengths of both can be challenging though. This page is a collection of the best articles, videos, and presentations we've found on the topic.
      </motion.p>
      <motion.a 
      className={styles.link}
        href="https://reactjs.org"
        target="_blank" 
        rel="noopener noreferrer"
        initial={{transform: 'translateX(-800%)'}} 
        animate={{transform: 'translateX(0%)'}} 
        transition={{duration: 0.40}}
      >
        Learn React
      </motion.a>       
    </motion.div>
  );
};

export default Home;

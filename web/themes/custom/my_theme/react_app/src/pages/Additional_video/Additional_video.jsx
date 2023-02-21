import {motion} from 'framer-motion';

import styles from './Additional_video.module.scss';

const Blog = () => {
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
        Additional Video
      </motion.h1>        
    </motion.div>
  );
};

export default Blog;
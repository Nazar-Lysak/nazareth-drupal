import { useEffect, useState } from "react";
import { getApi } from '../../utils/getApi';
import {motion} from 'framer-motion';
import styles from './Blog.module.scss';

const Blog = () => {

  const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const blogView = `https://${window.location.host}/rest-list-blog?_format=json`;
        getApi(blogView).then((body) => {         
            setBlogList(body);            
          });
    }, [])

    if (blogList.length) {
      const blogView = blogList.map((blog, index) => {
        return <motion.a
          className={styles.blogItem} 
          initial={{transform: 'translateX(-800%)'}} 
          animate={{transform: 'translateX(0%)'}} 
          transition={{duration: index < 10 ? `0.${index * 2}` : `1.${index * 2}`}}
          key={`${blog}_${index}`}
          href={blog.path[0].alias}
        >
          <h3 className={styles.headding}>
            {blog.title[0].value}
          </h3>
          <div className={styles.content}>
            <img className={styles.image} src={blog.field_image[0].url} alt={blog.field_image[0].alt} />
            <p className={styles.description} dangerouslySetInnerHTML={{__html: blog.field_description[0].value}} />            
          </div>          
          <p className={styles.date}>
            {blog.created[0].value}
          </p>
        </motion.a>
      })

      console.log(blogList)
      return (
        <motion.div 
          className={styles.wrapper} 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{duration: 0.25}}
        >
        {blogView}
        </motion.div>
      );      
    } else {
      <h2>LOADING...</h2>
    }








  
};

export default Blog;
import { useEffect, useState } from "react";
import { getApi } from '../../utils/getApi';
import {motion} from 'framer-motion';
import styles from './Blog.module.scss';

const Blog = () => {

  const [blogList, setBlogList] = useState([]);
  const [blogCategories, setBlogCategories] = useState('');

  const setCategoryForBlog = (categories) => {
    const arr = [];
    // for(let i =  0; i <= categories.length; i++) {
    //   for(let j =  0; j <= blogCategories.length; j++) {
    //     if(categories[i].target_id === blogCategories[j].id) {
    //       arr.push(blogCategories[j].term)
    //     }
    //   }
    // }

    


    console.log('categodies ', categories);
    console.log('terms ', blogCategories)
    
    return '';
  }

  useEffect(() => {
    const categoriesTerm = `https://${window.location.host}/rest-list-taxonomy-categories?_format=json`;
    getApi(categoriesTerm).then((body) => {  
      setBlogCategories(body.map(el => {
        return ({
          term: el.name[0].value,
          id: el.tid[0].value,
        })
      }));      
    });
  }, [])

  useEffect(() => {
    const blogView = `https://${window.location.host}/rest-list-blog?_format=json`;
    getApi(blogView).then((body) => {  
      setBlogList(body.map(el => {
        return {
          id: el.uuid[0].value,
          created: el.created[0].value,
          nodeType: el.type[0].target_id,
          categories: setCategoryForBlog(el.field_blog_categories),
          title: el.title[0].value,
          decription: el.field_description[0].value,
          imageUrl: el.field_image[0].url,
          imageAlt: el.field_image[0].alt,
          link: el.path[0].alias,
        }
      }));      
    });
  }, [blogCategories])

  if (blogList.length > 0) {

    // console.log(blogList)
    // console.log(blogCategories)
    
    const blogView = blogList.map((blog, index) => {
      return <motion.a
        className={styles.blogItem} 
        initial={{transform: 'translateX(-800%)'}} 
        animate={{transform: 'translateX(0%)'}} 
        transition={{duration: index < 10 ? `0.${index * 2}` : `1.${index * 2}`}}
        key={blog.id}
        href={blog.link}
      >
        <h3 className={styles.headding}>
          {blog.title}
        </h3>
        <div className={styles.content}>
          <img className={styles.image} src={blog.imageUrl} alt={blog.imageAlt} />
          <p className={styles.description} dangerouslySetInnerHTML={{__html: blog.decription}} />            
        </div>          
        <p className={styles.date}>
          {blog.created}
        </p>
      </motion.a>
    })

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
import {Route, Routes} from 'react-router-dom';


import styles from './App.module.scss';

import Home from '../pages/Home/Home';
import ReactCourse from '../pages/React_course/React_course';
import Blog from '../pages/Blog/Blog';
import AdditionalVideo from '../pages/Additional_video/Additional_video';

function App() {
  return (
    <div className={styles.content_wrapper}>
      <Routes>
        <Route path={`/user/1`} element={ <Home />} />
        <Route path={`/react-course`} element={ <ReactCourse />} />
        <Route path={`blog`} element={<Blog />} />
        <Route path={`/additional-video`} element={<AdditionalVideo />}/>
      </Routes>      
    </div>
  );
}

export default App;

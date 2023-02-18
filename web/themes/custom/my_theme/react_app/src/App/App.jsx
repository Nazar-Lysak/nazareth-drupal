import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.content_wrapper}>
      <h1 className={styles.headding}>React <span>❤</span> Drupal</h1>
        <p className={styles.text}>
          React and Drupal can be used together to create amazing digital experiences. Knowing where to start and how to leverage the strengths of both can be challenging though. This page is a collection of the best articles, videos, and presentations we've found on the topic.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;

import styles from '../styles/Home.module.css';
import Login from '../components/Login';

function Home() {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  )
}

export default Home
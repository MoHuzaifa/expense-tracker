import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar"
import styles from '../styles/Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.outerContainer}>
      <Sidebar />
      <Topbar />
    </div>
  )
}

export default Dashboard
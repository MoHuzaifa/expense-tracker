import { AiOutlineMail } from 'react-icons/ai';
import { RiNotification2Line } from 'react-icons/ri';
import Image from 'next/image';
import Avatar from '../asset/Avatar.jpg';
import styles from '../styles/Topbar.module.scss';

const Topbar = () => {
  const handleIconClick = () => alert('You Clicked An Icon!');

  return (
    <div className={styles.topBar}>
      <div className={styles.headingContainer}>
        <h1>Overview</h1>
        <p>Hi Huzaifa, get your monthly transaction summary here</p>
      </div>
      <div className={styles.iconContainer}>
        <AiOutlineMail className={styles.icon} onClick={handleIconClick} />
        <RiNotification2Line
          className={styles.icon}
          onClick={handleIconClick}
        />
        <div className={styles.avatarContainer}>
          <Image
            className={styles.avatar}
            src={Avatar}
            alt='profile picture'
            width='50px'
            height='50px'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

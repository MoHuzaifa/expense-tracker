import { SiEmbarcadero } from 'react-icons/si';
import { MdDashboardCustomize } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import styles from '../styles/Sidebar.module.scss';

const navOptions = [
  {
    icon: <MdDashboardCustomize className={styles.icon} />,
    text: 'Dashboard',
  },
  {
    icon: <AiOutlineQuestionCircle className={styles.icon} />,
    text: 'FAQs',
  },
  {
    icon: <FiSettings className={styles.icon} />,
    text: 'Settings',
  },
  {
    icon: <AiOutlinePhone className={styles.icon} />,
    text: 'Contact-Us',
  },
  {
    icon: <FiLogOut className={styles.icon} />,
    text: 'Log Out',
  },
];

const Sidebar = () => {
  return (
		<div className={styles.sideBar}>
			<SiEmbarcadero className={styles.logo} />
			{navOptions?.map((option, index) => (
				<div key={index} className={styles.outerContainer}>
					<div>{option.icon}</div>
					<p className={styles.iconText}>{option.text}</p>
				</div>
			))}
		</div>
	);
};

export default Sidebar;

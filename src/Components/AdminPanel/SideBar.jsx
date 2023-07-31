import styles from "../../styles/SideBar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = () => {
  //   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link href="/adminpanel" style={{ textDecoration: "none" }}>
          <span className={styles.logo}>lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <Link href="/adminpanel">
            <li>
              <DashboardIcon className={styles.icon} />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className={styles.title}>LISTS</p>
          <Link href="/adminpanel/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link href="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className={styles.icon} />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={styles.icon} />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.colorOption}
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className={styles.colorOption}
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

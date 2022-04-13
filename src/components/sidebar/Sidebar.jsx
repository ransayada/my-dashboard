import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top"><span className="logo">nushAdmin.</span></div>
      <hr />
      <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon"/>
              <span> Dashboard</span>
            </li>
            <p className="title">LISTS</p>

            <li>
              <PersonIcon className="icon"/>
              <span> Users</span>
            </li>
            <li>
              <StoreMallDirectoryIcon className="icon"/>
              <span> Products</span>
            </li>
            <li>
              <PaymentIcon className="icon"/>
              <span> Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon"/>
              <span> Delivery</span>
            </li>
            <p className="title">USEFULL</p>
            <li>
              <QueryStatsIcon className="icon"/>
              <span> Stats</span>
            </li>
            <li>
              <NotificationsIcon className="icon"/>
              <span> Notifications</span>
            </li>
            <p className="title">SERVICE</p>

            <li>
              <SettingsSuggestIcon className="icon"/>
              <span> System Health</span>
            </li>
            <li>
              <PsychologyIcon className="icon"/>
              <span> Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon"/>
              <span> Settings</span>
            </li>
            <p className="title">USER</p>

            <li>
              <FaceIcon className="icon"/>
              <span> Profile</span>
            </li>
            <li>
              <LogoutIcon className="icon"/>
              <span> Logout</span>
            </li>
            
          </ul>
        </div>
      <div className="bottom">
        <div className="color-options"></div>
        <div className="color-options"></div>
        {/* <div className="color-options"></div>
        <div className="color-options"></div>
        <div className="color-options"></div> */}
      </div>
    </div>
  )
}

export default Sidebar
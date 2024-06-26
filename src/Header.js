import SearchIcon from '@mui/icons-material/Search';
import linkedInIcon from './assets/linkedin.png'
import "./Header.css"
import HeaderOptions from './HeaderOptions';
import HomeIcon from "@mui/icons-material/Home"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Chat from '@mui/icons-material/Chat'
import ProfilePic from './assets/profile.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header()
{
    const dispatch = useDispatch();



    const logoutOfApp = () => {
            dispatch(logout())
            auth.signOut();
    };
    return (
        <>
            <div className="header">
                <div className="header_left">
                    <img src={linkedInIcon} alt="" />
                    <div className="header_search">
                        <SearchIcon/>
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>

                <div className="header_right">
                    <HeaderOptions Icon={HomeIcon} title="Home" />
                    <HeaderOptions  Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOptions  Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOptions  Icon={Chat} title="Chat"/>
                    <HeaderOptions  Icon={NotificationsIcon} title="Messaging"/>
                    <HeaderOptions avatar={true} title="me" onClick={logoutOfApp}/>
                </div>
            </div>
        </>
    );
}

export default Header;
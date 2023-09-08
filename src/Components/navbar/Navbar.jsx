import "./navbar.scss";
import HomeIcon from '@mui/icons-material/Home';
import GridViewOutlinedIcon from '@mui/icons-material/GridView';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
function Navbar() {
  return (
    <div className="navbar">
        <div className="left">
         <span>PeekMovies</span>
        <HomeIcon/>
        <GridViewOutlinedIcon/>
        </div>
        <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="person" />
          <span>john</span>
        </div>
        </div>
    </div>
  )
}

export default Navbar
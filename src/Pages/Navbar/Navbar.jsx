import React from "react";
import Search from '../../Components/Search/Search'
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from '@mui/material'
import '../../Pages/Home/Home.css'
import { Link } from "react-router-dom";
const Navbar=()=>{
return(
    <div className="container">
        <div className="nav">
            <Link to='/'>
                <div  className='icon'><HomeIcon style={{fontSize:"35px"}}/>
                </div>
            </Link>
           
        <Search/>
        </div>
        
        <p className='welcome_note'>Nazia's Recipe Blog</p>
    </div>
)
}
export default Navbar
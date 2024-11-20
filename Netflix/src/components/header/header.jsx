import React from "react";
import Netflix from "../../img/pngegg.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


import './header.css'
const header = () => {
    return (
        <div className="header-outer-container">
            <div className="header-container">
                <div className="header-left">
                    <ul>
                        <li>
                            <img src={Netflix} alt="Netflix Logo" width="100"/>
                        </li>
                        <li className="lists">Home</li>
                        <li className="lists">TvShows</li>
                        <li className="lists">Movies</li>
                        <li className="lists">Latest</li>
                        <li className="lists">MyList</li>
                        <li className="lists">Browse By Language</li>
                    </ul>
                </div>
                <div className="header-right">
                    <ul>
                        <li><SearchIcon/></li>
                        <li><NotificationsNoneIcon/></li>
                        <li><AccountCircleIcon/></li>
                        <li><ArrowDropDownCircleIcon/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default header;

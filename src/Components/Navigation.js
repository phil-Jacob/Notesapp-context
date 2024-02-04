import React from "react";
import { NavLink } from "react-router-dom";
import archive from "../Assets/archive.svg";
import search from "../Assets/search.svg";
import bin from "../Assets/bin.svg";
import description from "../Assets/description.svg";
import home from "../Assets/home.svg";
import task_alt from "../Assets/task_alt.svg";

function Navigation() {
  return (
    <div className="navbar">
    
    <ul className='menu-list'>
        <nav>
        <li className='menu-item'><img className="icon-nav" src={home} alt=""></img>
        <NavLink to = '/' className='route-link' >Home</NavLink></li>
        <li className='menu-item'><img src={search} alt=""></img>Search</li>
        <li className='menu-item'><img src={description} alt=""></img>
        <NavLink to= '/Notes' className='route-link'>Notes</NavLink></li>
        <li className='menu-item'><img src={task_alt} alt=""></img>
        <NavLink to = '/Tasks' className='route-link'>Tasks</NavLink></li>
        <li className='menu-item'><img src={archive} alt=""></img>Archieve</li>
        <li className='menu-item'><img src={bin} alt=""></img>Bin</li>
        </nav>
      </ul>
      </div> 
  );
}

export default Navigation;

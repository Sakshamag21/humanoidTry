import { Fragment } from "react"

import { useState } from 'react';
import styles from "./menuBar.module.css"
import Link from 'next/link';
import { Link as Link1 } from "react-scroll";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';



function MenuBar() {
    const [anchorEl, setAnchorEl] =useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  if (anchorEl){
    setAnchorEl(null)
  }
  else{
    setAnchorEl(event.currentTarget);
  }
  
  console.log(event.currentTarget)
};
const handleClose = () => {
  setAnchorEl(null);
  console.log(anchorEl)
};
    
   
    return(<Fragment> 
        
        
        <div className={styles.navigation}>
        
      <Button
      variant="contained"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/"><a>Home</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/"><Link1 activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={50}>About Us</Link1></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/"><Link1 activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={50}>Contact Us</Link1></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/membersPage"><a>Members</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/alumni"><a>Alumni</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/achievement"><a>Achievements</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/galleryPage"><a>Gallery</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/firaPage"><a>Competition</a></Link></MenuItem>
        
      </Menu>
    
            {/* <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle"></input>

             <label htmlFor="navi-toggle" className={styles.navigation__button}>
                <span className={styles.navigation__icon}>&nbsp;</span>
            </label> 
            
            <div className={styles.navigation__background}>&nbsp;</div>

            <nav className={styles.navigation__nav}>
                <ul className={styles.navigation__list}>
                   
                    <li className={styles.navigation__item}><Link href="/" ><a className={styles.navigation__link}>Home</a></Link></li>
                    <li className={styles.navigation__item}><Link href="/"><a ><Link1 activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={50} className={styles.navigation__link}>About Us</Link1></a></Link></li>
                    <li className={styles.navigation__item}><Link href="/"><a className={styles.navigation__link}><Link1 activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={50}>About Us</Link1></a></Link></li>
                    <li className={styles.navigation__item}><Link href="/membersPage"><a className={styles.navigation__link}>Members</a></Link></li>
                    <li className={styles.navigation__item}><Link href="/alumni"><a className={styles.navigation__link}>Alumni</a></Link></li>
                    <li className={styles.navigation__item}><Link href="/botPage"><a className={styles.navigation__link}>Bots</a></Link></li>
                    <li className={styles.navigation__item}><Link href="/galleryPage"><a className={styles.navigation__link}>Gallery</a></Link></li>
                    <li className={styles.navigation__item}><Link href="/firaPage"><a className={styles.navigation__link}>Competition</a></Link></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Bot description</a></li>
                    </ul>
            </nav> */}

        </div>
        {/* <div className={styles.logo}></div> */}
        <div className={styles.menu} >
            <div className={styles.logo}></div>

            
        
            
            
                 <button className={styles.menubutton}><Link href="/"><a>Home</a></Link></button>
                <button className={styles.menubutton} ><Link href="/"><Link1 activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={50}>About Us</Link1></Link></button>
                <button className={styles.menubutton} ><Link href="/"><Link1 activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={50}>Contact Us</Link1></Link></button>
            {/* <button className={styles.menubutton} ><Link1 activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={50}><Link href="/"><a>Contact Us</a></Link></Link1></button>  */}
            <button className={styles.menubutton}><Link href="/membersPage"><a>Members</a></Link></button>
            <button className={styles.menubutton}><Link href="/alumni"><a>Alumni</a></Link></button>
            <button className={styles.menubutton}><Link href="/achievement"><a>Achievements</a></Link></button>
            {/* <button className={styles.menubutton}><Link href="/botPage"><a>Bots</a></Link></button> */}
            <button className={styles.menubutton}><Link href="/galleryPage"><a>Gallery</a></Link></button>
            <button className={styles.menubutton}><Link href="/firaPage"><a>Competition</a></Link></button>
            
            

        </div>
    </Fragment>)
}

export default MenuBar;

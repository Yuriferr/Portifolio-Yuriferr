import React, {useEffect, useState} from "react"
import './style.scss'

import Logo from '../../assets/logoBranca.png'

import { FiAlignRight } from 'react-icons/fi'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header(){
    const [iconMenu, setIconMenu] = useState(false)

    useEffect(() => {
        ActiveIcon()
    }, [])
    
    function ActiveIcon(){
        if(window.screen.width <= 500){
            setIconMenu(true)
        }else{
            setIconMenu(false)
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function Projetos(){
        window.location.href = "#projetos";
    }

    return(
        <header>
            <div className='logo'>
                <img src={Logo}/>
            </div>
            <div className='links'>
                <p onClick={Projetos}>Projetos</p>
            </div>

            <div className="iconMenu">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                ><FiAlignRight color="white" size={35}/></Button>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><p onClick={Projetos}>Projetos</p></MenuItem>
            </Menu>
        </header>
    )
}
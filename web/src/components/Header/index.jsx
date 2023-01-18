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

    function Sobre(){
        window.location.href = "#sobre";
    
    }
    function Projetos(){
        window.location.href = "#projetos";
    }

    function Conhecimentos(){
        window.location.href = "#conhecimentos";
    }

    return(
        <header>
            <div className='logo'>
                <a href="">
                    <img src={Logo}/>
                </a>
            </div>
            <div className='links'>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#conhecimentos">Conhecimentos</a>
                <a href="#contatos">Contatos</a>
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
                <MenuItem onClick={handleClose}><a href="#sobre">Sobre</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="#projetos">Projetos</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="#conhecimentos">Conhecimentos</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="#contatos">Contatos</a></MenuItem>
            </Menu>
        </header>
    )
}
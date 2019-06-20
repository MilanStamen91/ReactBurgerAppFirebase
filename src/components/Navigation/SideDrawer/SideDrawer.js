import React from 'react'
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxJs/ReactAux';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {
    //Open-Close Animation on SideDrawer
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
            <Logo />
        </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;
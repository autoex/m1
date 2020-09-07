import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {





    render() {
        let arrMenu = this.props.menu;
        return <>
            <ul>
            {arrMenu.map((el, index) =>
                <li key={index}><NavLink to={el.link}>{el.label}</NavLink></li>)}
            </ul>
        </>
    }
}

export default Header;
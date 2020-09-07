import React from "react";

class Header extends React.Component {




    render() {
        let arrMenu = this.props.menu;
        console.log(arrMenu)
        return <>
            <ul>
            {arrMenu.map((el, index) =>
                <li key={index}><a href={el.link}>{el.label}</a></li>)}
            </ul>
        </>
    }
}

export default Header;
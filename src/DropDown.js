import React from "react";


class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }
    toggleState =()=> {

        this.setState({
            isOpened: !this.state.isOpened
        })
    }


    render() {
    let dropDownText;

    if (this.state.isOpened) {
        dropDownText = <div>Drop DOWWWWWWWWWWWWWWWWWWn</div>
    }

        return <>
           {console.log('isOpened: ', this.state.isOpened)}
            <div onClick={this.toggleState}>Drop Down box</div>
            {dropDownText}
        </>
    }
}

export default DropDown;
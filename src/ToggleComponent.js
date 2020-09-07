import React from "react";

class ToggleComponent extends React.Component {

constructor(props){
    super(props)
    this.state = {
        isLoading: false
    }

}
toggleFunc =()=> {
    this.setState(
        {isLoading: !this.state.isLoading}
    )
    console.log(this.state.isLoading);

}


    render() {



        return <>

            <hr/>
            toggle button
            <hr/>
            <button onClick={this.toggleFunc}>ok</button>
        </>
    }
}

export default ToggleComponent;
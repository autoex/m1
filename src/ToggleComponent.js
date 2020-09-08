import React from "react";
import './ToggleComponent.css'

class ToggleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHide: true
        }
    }

    toggle =()=> {
      this.setState({
          isHide: !this.state.isHide


      });
        console.log(this.state.isHide);
    }




    render() {

        let hideBox;

        if(!this.state.isHide) {

            hideBox = <div>dfdsgsg</div>
        }

        return <>
            <button onClick={this.toggle}>Click</button>
            {hideBox}
            </>
    }
}

export default ToggleComponent;
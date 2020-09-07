import React from "react";

class RegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        debugger;
       console.log('Email is: ', this.state.email)
    }
    handleEmailChange (event) {
        console.log('Change', this.state.email);
        this.setState({email: event.target.value})


    }


    render() {

        return <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='E-mail' value={this.state.email} onChange={this.handleEmailChange}/>
                <button>Send</button>
            </form>
        </>
    }
}

export default RegForm;
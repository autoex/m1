import React from "react";


class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'ToDo here',
            toDoList: ['Test ToDo'

            ]
        }
    }

    inputHandle = (e) => {
        console.log(this.state.inputValue)
        this.setState({
            inputValue: e.target.value
        });


    }

    clearInputOnclick = (e) => {
        e.target.value = ''
    }

    sendButton = (e) => {
        e.preventDefault();

        let toDo = this.state.inputValue;
        debugger;
        this.setState({toDoList: this.state.toDoList.push(toDo).bind(this)});
        console.log(this.state.toDoList)

    }

    render() {
        console.log(this.state.inputValue);
        /*  debugger
          let toDoList = this.state.toDoList.map((el, index)=> <p key={index}>{el}</p>);*/
        return <>
            <form action="">
                <input type="text" onChange={this.inputHandle} onClick={this.clearInputOnclick}
                       value={this.state.inputValue}/>
                <button onClick={this.sendButton}>Send</button>
            </form>

            <div className={'toDoList'}>
                {/*{toDoList}*/}
            </div>

        </>


    }
}

export default ToDo

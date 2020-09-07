import React from "react";
import DropDown from "./DropDown";
import Header from "./Header";
import RegForm from "./RegForm";


class App extends React.Component {




  render() {
    return <>
        <Header menu={this.props.menu}/>
      <DropDown  />
      <RegForm />
    </>
  }
}

export default App;
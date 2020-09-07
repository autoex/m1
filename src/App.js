import React from "react";
import DropDown from "./DropDown";
import Header from "./Header";


class App extends React.Component {




  render() {
    return <>
        <Header menu={this.props.menu}/>
      <DropDown  />
    </>
  }
}

export default App;
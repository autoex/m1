import React from "react";
import Header from "./Header";
import {Route} from "react-router-dom";


class App extends React.Component {




  render() {
    const routeComponent =  this.props.menu.map((el, index )=>


        <Route path={el.link} component={el.component} key={index} />
    );

    return <>
        <Header menu={this.props.menu}/>

    {/*  <DropDown  />
      <RegForm />
      <ToggleComponent />*/}


     {/* <Route path={'/dropdown'} component={DropDown}/>
      <Route path={'/regform'} component={RegForm}/>*/}


    <div>  {routeComponent}
    </div>
    </>
  }
}

export default App;
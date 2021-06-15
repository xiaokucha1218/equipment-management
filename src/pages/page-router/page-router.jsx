import React, { Component } from "react";
import { Switch, Route, Redirect,BrowserRouter } from "react-router-dom";
import EquipmentList from "../equipment-list/equipment-list";
import EquipmentDetail from "../equipment-detail/equipment-detail";
import EquipmentCreation from "../equipment-creation/equipment-creation";
class PageRouter extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Redirect to="/list" />
          )}
        />
        <Route path="/list" component={EquipmentList} />
        <Route path="/add" component={EquipmentCreation} />
        <Route path="/detail/:id" component={EquipmentDetail} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;

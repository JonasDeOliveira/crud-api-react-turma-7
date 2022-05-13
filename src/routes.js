import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import RegisterCustomer from './pages/Customer/Register'
import ListCustomer from './pages/Customer/List'
import EditCustomer from './pages/Customer/Edit'
import NotFound from './pages/NotFound'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={RegisterCustomer} />
            <Route path="/listcustomer" component={ListCustomer} />
            <Route path="/editcustomer/:id" component={EditCustomer} />
            <Route component={NotFound} />
        </Switch>
    )
}
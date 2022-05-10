import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    )
}
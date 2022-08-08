import { Route, Switch } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/">
                <Login />
            </Route>
            <Route>
                <Home exact path="/home" />
            </Route>
        </Switch >
    )
}
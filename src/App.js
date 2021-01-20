import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup } from './pages'
import { useAuthListener } from './hooks'

export function App() {
    const { user } = useAuthListener()

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path={ROUTES.SIGN_IN}>
                    <Signin />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <Signup />
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <Browse />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </Router>
  )
}

export default App
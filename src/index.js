// Modules
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import * as firebase from 'firebase'

// CSS
import "./index.css"

// Components
import NavBar from "./NavBar"
import LeaderBoard from "./LeaderBoard"

// Pages
import Error from "./Error"


const App = () => {

    const [userInput, setUserInput] = useState(new Set());
    
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <NavBar getInput={setUserInput} />
                    <LeaderBoard userInput={userInput} isAdmin={false} />
                </Route>

                <Route path="/admin">
                    <NavBar getInput={setUserInput} />
                    <LeaderBoard userInput={userInput} isAdmin={true} />
                </Route>

                <Route path="*">
                    <Error />
                </Route>

            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
// Modules
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { auth } from "./firebase"

// CSS
import "./CSS/index.css"
import "./CSS/signIn.css"

// Components
import NavBar from "./Components/NavBar"
import Intro from "./Components/Intro"
import Rules from "./Components/Rules"
import MissionBoard from "./Components/MissionBoard"
import WorkSubmission from "./Components/WorkSubmission"
import LeaderBoard from "./Components/LeaderBoard"
import ChangeHistory from "./Components/ChangeHistory"
import Rewards from "./Components/Rewards"
import SignIn from "./Components/SignIn"
import Footer from "./Components/Footer"

// Pages
import Error from "./Error"


const App = () => {
    const [currentAdmin, setCurrentAdmin] = useState(undefined);

    useEffect(() => {
        auth.signOut();
    }, []);

    auth.onAuthStateChanged((user) => {
        if(!user) {
            setCurrentAdmin(undefined);
        }
    });

    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <NavBar />
                    <Intro />
                    <Rules />
                    <MissionBoard />
                    <WorkSubmission />
                    <LeaderBoard />
                    <Rewards />
                    <Footer />
                </Route>

                <Route path="/admin">
                    {
                        currentAdmin ? (
                        <>
                            <NavBar currentAdmin={currentAdmin} getAdmin={setCurrentAdmin} />
                            <Intro />
                            <Rules />
                            <MissionBoard />
                            <WorkSubmission />
                            <LeaderBoard currentAdmin={currentAdmin} />
                            <ChangeHistory />
                            <Rewards />
                            <Footer />
                        </>
                        ) : <SignIn getAdmin={setCurrentAdmin}/>
                    }
                </Route>

                <Route path="*">
                    <Error />
                </Route>

            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
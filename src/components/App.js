import React from 'react';
//import {BrowserRouter, Route} from "react-router-dom"; 
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

/*Using Anchor Tags in routing is a bad way of navigating throught the pages. */

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/streams" exact component={StreamList} ></Route>
                        <Route path="/streams/new" component={StreamCreate} ></Route>
                        <Route path="/streams/edit/:id" component={StreamEdit} ></Route>
                        <Route path="/streams/delete/:id" component={StreamDelete} ></Route>
                        <Route path="/streams/:id" component={StreamShow} ></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;

import React from 'react';
//import {BrowserRouter, Route} from "react-router-dom"; 
import { Router, Route } from "react-router-dom";
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
            <Header />
            <div>
                <Route path="/" exact component={StreamList} ></Route>
                <Route path="/new" component={StreamCreate} ></Route>
                <Route path="/edit" component={StreamEdit} ></Route>
                <Route path="/delete" component={StreamDelete} ></Route>
                <Route path="/show" component={StreamShow} ></Route>
            </div>
            </Router>
        </div>
    )
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import TextModule from "./textModule";

import './style.css';

const App = () => {
    // cosnole.log('error');
    return (
        <div className="main">
            <TextModule msg="inside the module!" />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
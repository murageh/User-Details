import React, {Fragment} from 'react';
import './styles/App.css';
import Title from "./components/Title";
import Dashboard from "./components/Dashboard";

function App() {

    return (
        <Fragment>
            <Title/>
            <Dashboard/>
        </Fragment>
    );
}

export default App;

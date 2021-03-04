import React, {Fragment} from "react"
import LeftNavBar from "./LeftNavBar";
import Users from "./Users";

const Dashboard = () => {


    return (
        <div className={"Dashboard"}>
            <Fragment>
                <LeftNavBar/>
                <Users/>
            </Fragment>
        </div>
    );
}

export default Dashboard;
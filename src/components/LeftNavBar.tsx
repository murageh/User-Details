import React, {useState} from "react";
import "../styles/App.css";
import MenuItem from "./MenuItem";

interface MenuItems {
    items: typeof MenuItem[],
}

const LeftNavBar: React.FC = () => {

    const [selected, setSelected] = useState(0);

    const showRegisteredUsers = () => {
        setSelected(0);
    }
    const showActiveUsers = () => {
        setSelected(1)
    }
    const showAboutUs = () => {
        setSelected(2)
    }

    return (
        <div className={"left-nav-bar"}>
            <MenuItem text={"Registered users"} action={showRegisteredUsers} selected={selected === 0}
                      setSelection={setSelected}/>
            <MenuItem text={"Active Users"} action={showActiveUsers} selected={selected === 1}
                      setSelection={setSelected}/>
            <MenuItem text={"About us"} action={showAboutUs} selected={selected === 2} setSelection={setSelected}/>
        </div>
    )
}


export default LeftNavBar;
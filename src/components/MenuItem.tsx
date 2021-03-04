import React from "react";
import "../styles/App.css";

interface Menu {
    text: string,
    action: React.MouseEventHandler<HTMLDivElement>,
    selected: boolean,
    setSelection: React.Dispatch<React.SetStateAction<number>>
}

const MenuItem: React.FC<Menu> = (props: Menu) => {

    return (
        <div className={props.selected ? "menu-item selected" : "menu-item"} onClick={props.action}>
            <span>{props.text}</span>
            <span>&#8250;</span>
        </div>
    )
}


export default MenuItem;
import React from "react";
import {classes} from "./app/constants";

export const App: React.FC = () => {
    return (
        <div className={`${classes.flexCenter} ${classes.abs}`}>
            <div>
                Hello react component
            </div>
        </div>
    )
}
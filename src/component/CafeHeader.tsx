import React from "react";

interface headerText {
    header:string;
}

export function CafeHeader({header}:headerText){
    return(
        <div className="header">
            <h1>{header}</h1>
        </div>

    );
} 
import React from "react";

export default function Hblog(props:string){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}
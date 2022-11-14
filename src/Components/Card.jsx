import React from "react";

export default function Card(props)  {
    return (
        <div className="card"> 
            <img src={props.ImageUrl}></img>
            <h5>{props.name}</h5>
            <p>{props.desc}</p>
            <button className="cardbutton">View</button>

        </div>
    )
}
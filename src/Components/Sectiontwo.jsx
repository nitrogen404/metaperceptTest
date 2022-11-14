import React from "react";
import Card from "./Card";
import data from "../content";

export default function Sectiontwo() {
    return (
        <div className="sectiontwo">
            <h1>Classes</h1>
            <p className="secp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet</p>
            <div className="cards">
                {data.map((course) => (
                    <Card ImageUrl={course.ImageUrl} name={course.Name} desc={course.ShortDesc}></Card>
                    
                ))}

            </div>
        </div>
    )
}


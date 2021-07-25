import React, { useState } from "react";

const Details = ({details}) => {
    return (
        <div id="info-content" style={{display:"block"}}>
            <div><b>User selected:</b> {details.firstName} {details.lastName}</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly value={details.description}></textarea>
            </div>
            <div><b>Address:</b> {details.address.streetAddress}</div>
            <div><b>City:</b> {details.address.city}</div>
            <div><b>State:</b>{details.address.state}</div>
            <div><b>Zip:</b> {details.address.zip}</div>
        </div>
        
    )
}
export default Details;
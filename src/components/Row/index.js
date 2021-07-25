import React from "react";

const Row = ({ personData , showDetails}) => {
   
    return (
        <tr onClick={showDetails} id={personData.id} className="data-row">
            <td className="column1">{personData.id}</td>
            <td className="column2">{personData.firstName}</td>
            <td className="column3">{personData.lastName}</td>
            <td className="column4">{personData.email}</td>
            <td className="column5">{personData.phone}</td>
        </tr>
    )
}
export default Row;
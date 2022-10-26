import React from "react";
const Card = (props) => {
    return (
    <div className="card" key={props['ID Nation']}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Nation ID: {props.item['ID Nation']}</li>
            <li className="list-group-item">Nation: {props.item['Nation']}</li>
            <li className="list-group-item">Year: {props.item['ID Year']}
                <ol>
                {Object.entries(props.item).map(item => 
                    <li className="list-group-item">{item}</li>)
                }
                </ol>
            </li>
        </ul>
    </div>
    );
}
export default Card;
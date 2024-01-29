import React from 'react';
import "./StaffInfoRow.css";

function StaffInfoRow(props) {
    return (
        <tr className="staffRow">
            <td className="col1"><img src={props.img} alt={`${props.name}-Photo`} /></td>
            <td className="col2">{props.name}</td>
            <td className="col3">{props.education}</td>
            <td className="col4"><a href={props.social}>LinkedIn Profile</a></td>
            <td className="col5">
                <button className="editBtn">
                    Edit <svg className="editIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14.354 1.646a.5.5 0 0 0-.708 0L4.854 10.146a1.5 1.5 0 0 0-.354.646L3 14l3.207-1.5a1.5 1.5 0 0 0 .646-.354L14.354 2.354a.5.5 0 0 0 0-.708zM5.5 10.207l5.793-5.793.5.5-5.793 5.793-.5-.5z"/>
                        <path fill-rule="evenodd" d="M13.646 0a1.5 1.5 0 0 1 1.06 2.56l-.06.06-12 12a1.5 1.5 0 0 1-2.12-2.12l12-12a1.5 1.5 0 0 1 1.06-.44z"/>
                        </svg>
                </button>
            </td>
            <td className="col6">
                <button className="deleteBtn">
                    Delete &#x1F5D1;
                </button>
            </td>
        </tr>
    );
}

export default StaffInfoRow;

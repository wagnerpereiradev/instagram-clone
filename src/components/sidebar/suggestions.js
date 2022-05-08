import './sidebar.css';
import React from 'react';


function Suggestions(props) {
    return (
        <div className='suggestions__profiles'>
            <img src={props.imgpic} width="32px" />
            <div>
                <b>{props.username}</b>
                <p>{props.legend}</p>
            </div>
            <button>Following</button>
        </div>
    );
}

export default Suggestions;
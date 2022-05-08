import './stories.css';
import React from 'react';
import Border from './icons/border__insta.svg';


function Stories(props) {
    return (
        <div className='container'>
            <div className='img__stories'>
                <img className='picstories' src={props.picstories} width="56px" height='56px' />
                <img className='border' src={Border} width="66px" height="66px" />
            </div>
            <div className='text'>
                <p>{props.username}</p>
            </div>

        </div>
    );
}

export default Stories;
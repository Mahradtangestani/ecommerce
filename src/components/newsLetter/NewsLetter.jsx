import React from 'react';
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h2>Get Exclusive offers on your email</h2>
            <p>Subscribe to our newletter and stay update</p>
            <div>
                <input type="email" placeholder='Your Email ID'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;

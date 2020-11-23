import React from 'react';
import logo from '../logo.svg';

function MyHeader() {
    return (
        <div className="header">
            <div className="img-nav">
                <img src="../../ironhack-logo.svg"/>
                <img src="../../menu-top.svg" className="menu"/>

            </div>
            <h1>Say Hello to ReactJS </h1>
            <p>You will learn to use</p>
            <p>the most popular frontend library</p>
            <p>and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </div>
    )
}

export default MyHeader;
import React from 'react'
import Counter from '../Counter';
import User from '../User';
import { Link } from 'react-router';

function Header(){
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Todo list</a>
                {/* <Link to="#" className="navbar-brand">Todo list</Link> */}
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#" className="pull-right">
                    <User />
                </a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
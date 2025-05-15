import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold text-2xl">Elijah's Ship</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>About Me</a></li>
            <li>
                <details>
                <summary>More</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Resume</a></li>
                    <li><a>Projects</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
    );
}

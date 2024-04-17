import React, { useState, useEffect, useRef } from 'react';

export default function TopBar({ menus, notifications, headerTitle }) {
    const [showNotifyDropdown, setShowNotifyDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const notifyRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (notifyRef.current && !notifyRef.current.contains(event.target)) {
                setShowNotifyDropdown(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="app-container">
                <h2>{headerTitle}</h2>
                <div className="app-navbar">
                    <div className="input-widget">
                        <input type="text" placeholder="Search for something" />
                        <span className="search-icon"></span>
                    </div>
                    <div className="relative">
                        <button className="setting btn">
                            <span className="setting-icon icon"></span>
                        </button>
                    </div>
                    <div className="relative" ref={notifyRef}>
                        <button className="notify btn" onClick={() => setShowNotifyDropdown(!showNotifyDropdown)}>
                            <span className="notify-icon icon"></span>
                        </button>
                        {showNotifyDropdown && (
                            <div className="notify-dropdown">
                                <div className="notify-head">
                                    <h5>Notifications</h5>
                                    <button className="close-notify" onClick={() => setShowNotifyDropdown(false)}>&#x2715;</button>
                                </div>
                                <ul>
                                    {notifications.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.path}>
                                                <h5>{item.title}</h5>
                                                <div className="time-ago">
                                                    <h6>{item.desc}</h6>
                                                    <p>{item.timeAgo}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={profileRef}>
                        <button className="profile" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                            <span className="user-pic"></span>
                        </button>
                        {showProfileDropdown && (
                            <div className="profile-dropdown">
                                <div className="profile-widget">
                                    <span className="user-icon"></span>
                                    <div>
                                        <h5>Grace John</h5>
                                        <p>+91 9827839223 <span>|</span> gracejohn@gmail.com</p>
                                    </div>
                                </div>
                                <ul>
                                    {menus.map((menu, index) => (
                                        <li key={index}>
                                            <a href={menu.path}>{menu.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

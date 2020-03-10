import React from 'react';
import { UserInfo } from '../interfaces';
import '../styles/User.scss';

const User = (user:UserInfo) => (
    <div className="user">
        <div className="user__header">{user.name}</div>
        <div className="user__details">
            <div className="user__details__item user__details__item--inactive">{user.email}</div>
            <div className="user__details__item">{user.role}</div>
        </div>

    </div>
);

export default User;

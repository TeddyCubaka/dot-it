import { Icon } from '@rsuite/icons';
import { FaSearch } from 'react-icons/fa';
import UserInfo from './account-info';
import React, { useEffect, useRef, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
                <div className="logo">
                    <div className='logo-illustration'>
                        <div><div></div></div>
                    </div>
                    <span>Dot It</span>
                </div>
                <UserInfo />
        </header>
    );
}


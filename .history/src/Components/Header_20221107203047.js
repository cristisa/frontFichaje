import React from 'react';
import {Link} from 'wouter';

import useUser from 'hooks/useUser';

import './Header.css';

export default function Header () {
    const {isLogged} = useUser()

    return (
        <header className='gf-header'>

        {
            isLogged
            ? <Link to='/logout'>
            Logout
            </Link>
            : <Link to='/login'>
            Login
            </Link>

        }
        </header>
    )
}
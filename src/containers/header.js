import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo 
                    to={ROUTES.HOME}
                    src={`${process.env.PUBLIC_URL}/images/misc/logo.svg`}
                    alt="Netflik"
                />
                <Header.Caption>Personal project for learning purposes.</Header.Caption>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
import React from 'react'
import { Container, Row, Column, Link, Title, Text, Break, Inner } from './styles/footer-signin'

export default function FooterSignin({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

FooterSignin.Inner = function FooterSigninInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

FooterSignin.Row = function FooterSigninRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

FooterSignin.Column = function FooterSigninColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

FooterSignin.Link = function FooterSigninLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

FooterSignin.Title = function FooterSigninTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

FooterSignin.Text = function FooterSigninText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

FooterSignin.Break = function FooterSigninBreak({ children, ...restProps }) {
    return <Break {...restProps} />
}
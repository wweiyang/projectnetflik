import React from 'react'
import { FooterSignin } from '../components'

export function FooterSigninContainer() {
    return (
        <FooterSignin>
            <FooterSignin.Inner>
                <FooterSignin.Title>Questions? Contact us.</FooterSignin.Title>
                <FooterSignin.Break />
                <FooterSignin.Row>
                    <FooterSignin.Column>
                        <FooterSignin.Link href="#">FAQs</FooterSignin.Link>
                        <FooterSignin.Link href="#">Investor Relations</FooterSignin.Link>
                        <FooterSignin.Link href="#">Ways to Watch</FooterSignin.Link>
                        <FooterSignin.Link href="#">Corporate Information</FooterSignin.Link>
                        <FooterSignin.Link href="#">Netflix Originals</FooterSignin.Link>
                    </FooterSignin.Column>

                    <FooterSignin.Column>
                        <FooterSignin.Link href="#">Help Centre</FooterSignin.Link>
                        <FooterSignin.Link href="#">Jobs</FooterSignin.Link>
                        <FooterSignin.Link href="#">Terms of Use</FooterSignin.Link>
                        <FooterSignin.Link href="#">Contact Us</FooterSignin.Link>
                    </FooterSignin.Column>

                    <FooterSignin.Column>
                        <FooterSignin.Link href="#">Account</FooterSignin.Link>
                        <FooterSignin.Link href="#">Redeem gift cards</FooterSignin.Link>
                        <FooterSignin.Link href="#">Privacy</FooterSignin.Link>
                        <FooterSignin.Link href="#">Speed Test</FooterSignin.Link>
                    </FooterSignin.Column>

                    <FooterSignin.Column>
                        <FooterSignin.Link href="#">Media Centre</FooterSignin.Link>
                        <FooterSignin.Link href="#">Buy gift cards</FooterSignin.Link>
                        <FooterSignin.Link href="#">Cookie Preferences</FooterSignin.Link>
                        <FooterSignin.Link href="#">Legal Notices</FooterSignin.Link>
                    </FooterSignin.Column>
                </FooterSignin.Row>
                <FooterSignin.Break />
                <FooterSignin.Text>Netflik Asia</FooterSignin.Text>
            </FooterSignin.Inner>
        </FooterSignin>
    )
}
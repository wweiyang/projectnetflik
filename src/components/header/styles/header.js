import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `${process.env.PUBLIC_URL}/images/misc/${src}.jpg` : `${process.env.PUBLIC_URL}/images/misc/home-bg.jpg`)}) top left / cover no-repeat;
    
    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #FFA51D;
    min-width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #FF713B;
    }

    @media (max-width: 600px && min-width: 1449px) {
        margin-left: 90px;
    }

    @media (min-width: 600px) {
        margin-left: 40px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;

    @media (max-width: 600px && min-width: 1449px) {
        height: 45px;
        width: 167px;
    }

    @media (min-width: 600px) {
        margin-right: 40px;
    }
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Caption = styled.p`
    text-align: center;
    color: #757575;
    padding: 0 1em;

    @media (max-width: 1000px) {
        font-size: 12px;
    }
`

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color: 0.5s ease;

    &:hover {
        background: #FFA51D;
        color: white;
    }
`
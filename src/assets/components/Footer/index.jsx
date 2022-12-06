import styled from "styled-components";

const Attribution = styled.footer`
    font-size: 11px; 
    text-align: center; 
    color: grey;
    

    a { 
        color: hsl(228, 45%, 44%); 
    }
`;

export default function Footer() {
    return (
        <Attribution>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/marianaceci" target="_blank">Mariana</a>.
        </Attribution>
    )
}
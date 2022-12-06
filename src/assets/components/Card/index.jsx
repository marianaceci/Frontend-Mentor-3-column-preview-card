import styled from "styled-components";
import { useState } from 'react';

import { carsList } from "../../CarsList";
import { colorBgHeaderButton, fontTitle, colorParagragh } from '../variables';

const CardStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 25px;
    padding: 50px 40px;
    background-color: ${props => props.color};   
    border-radius: ${props =>
        props.children[1].props.children === 'sedans' ? '10px 10px 0px 0px' 
        : props.children[1].props.children === 'luxury' ? '0px 0px 10px 10px' : '0px'};
    
    @media screen and (min-width: 768px) {
        border-radius: ${props => 
            props.children[1].props.children === 'sedans' ? '10px 0px 0px 10px' 
            : props.children[1].props.children === 'luxury' ? '0px 10px 10px 0px' : '0px'};
    }
`;

const TypeTitle = styled.h2`
    font-family: ${fontTitle};
    text-transform: uppercase;
    font-size: 2.5rem;
    color: ${colorBgHeaderButton};
`;
    
const TextStyle = styled.p`
    color: ${colorParagragh};
    font-size: 1rem;
    line-height: 1.8rem;
`;

const ButtonStyle = styled.button`
    background-color: ${colorBgHeaderButton};
    outline: none;
    border: 1px solid ${colorBgHeaderButton};
    padding: 15px 30px;
    font-size: 1rem;
    border-radius: 30px;
    cursor: pointer;    

    @media screen and (min-width: 768px) {
        margin-top: 50px;
    };

    &:hover {
        background-color: transparent;
    };
`;



export default function Card() {

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = colorBgHeaderButton        
    };
    const handleMouseLeave = (e) => {
        e.currentTarget.style.color = e.target.parentElement.style.backgroundColor        
    };

    return (
        <>
            {carsList.info.map(({ id, type, text, img, alt, color }) => {
                return (
                    <CardStyle
                        key={id}
                        style={{backgroundColor: color}}
                    >
                        <img src={img} alt={alt} />
                        <TypeTitle>{type}</TypeTitle>
                        <TextStyle>{text}</TextStyle> 
                        <ButtonStyle
                            style={ isHover ? { color: colorBgHeaderButton } : { color: color }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >Learn More
                        </ButtonStyle>
                    </CardStyle>
                )
            })}        
        </>
    )
}
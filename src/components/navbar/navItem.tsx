import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
    link: string;
    onClick: () => void; 
    isActive?: boolean;
    children?: React.ReactNode;
    color?: string;
    bgColor?: string;
    border?: string;
    fontSize?: string;
}

const ButtonContainer = styled.button<{ color?: string, border?: string, bgColor?: string, fontSize?: string }>`
    background-color: ${(props) => props.bgColor || 'transparent'};
    border: ${(props) => props.border || 'none'};
    color: ${(props) => props.color || '#000'};
    font-size: ${(props) => props.fontSize ||'1.1rem'};
    height: -webkit-fill-available;
    cursor: pointer;

    &:focus {
        color: red;
        outline: none;
        box-shadow: 0 0 3px 2px rgba(255, 106, 61, 0.5);
    }
`; //FIXME: change css to smthng beautiful

const NavItem: FC<ButtonProps> = ({link, isActive, onClick, color, bgColor, border, fontSize, children}) => {
    const buttonStyle = { 
        backgroundColor: isActive ? '#ff8a5d' : bgColor || 'transparent', 
        color: isActive ? '#fff' : '#ff6a3d' 
    }; 

    return(
        <Link to={link}>
            <ButtonContainer 
                style={buttonStyle} 
                color={color} 
                border={border} 
                bgColor={bgColor} 
                fontSize={fontSize}
                onClick={onClick}
            >
                {children}
            </ButtonContainer>
        </Link>
    );
};

export default NavItem;
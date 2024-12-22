import React, { FC } from "react";
import styled from "styled-components";

type CloseProps = {
    onClose: () => void;
    children?: React.ReactNode;
}

const Button = styled.button`
    border: none;
    background: transparent;
    font-weight: bold;
`
const CloseButton: FC<CloseProps> = ({ onClose, children }) => {
    return(
        <Button onClick={onClose}>{children}</Button>        
    );
};

export default CloseButton;
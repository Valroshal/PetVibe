import CloseButton from "../../../components/buttons/CloseButton";
import React, { FC } from "react";
import styled from "styled-components";
import CarouselWrapper from "./Carousel/CarouselWrapper";

type GMProps = {
    onClose: () => void;
}
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* High z-index to appear above other components */
`

const ModalContainer = styled.div`
    background-color: #FFdea8;
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 70vh;
    border-radius: 15px;
    margin: 5rem;
`

const CloseBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem;
`
const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem;
    height: 100%;
`
const GreetingModal: FC<GMProps> = ({onClose}) => {
    return(
        <ModalOverlay>
            <ModalContainer>
                <CloseBtnContainer>
                    <CloseButton onClose={onClose}>X</CloseButton>
                </CloseBtnContainer>
                <CarouselContainer>
                    <CarouselWrapper />
                </CarouselContainer>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default GreetingModal;
import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import DotWrapper from "./DotWrapper";
import styled from "styled-components";
import { ArrowLeft } from 'src/icons/qr_code.svg.svg'
export type Item = {
    title: string;
    subtitle: string;
    text: string;
}

const carouselItemsInfo: Item [] = [
    {
        title: 'Pet Vibe',
        subtitle: 'bringing your pet back to you!',
        text: 'Make your pet QR code with all required information',
    },
    {
        title: 'Pet Vibe',
        subtitle: 'bringing your pet back to you!',
        text: 'If you`ve lost the pet, our friendly community will help to return it back home!',
    },
    {
        title: 'Pet Vibe',
        subtitle: 'bringing your pet back to you!',
        text: 'If you`ve found a lost pet, you can find it`s owner and save it',
    },
];

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`

const ContextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const CarouselWrapper = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleLeft = () => {
        console.log('handleLeft', activeIndex)
        setActiveIndex((prevIndex: number) => {
            return prevIndex > 0 ? prevIndex - 1 : prevIndex;
        })
    }

    const handleRight = () => {
        console.log('handleRight', activeIndex)
        setActiveIndex((prevIndex) => {
            return prevIndex < carouselItemsInfo.length -1 ? prevIndex + 1 : prevIndex;
        })
    }

    
    return(
        <CarouselContainer>
            <button onClick={handleLeft}><img src={ArrowLeft} alt="Google icon" /></button>
            <ContextContainer>
                <CarouselItem children={carouselItemsInfo[activeIndex]} />
                <div>{activeIndex}</div>
                <DotWrapper index={activeIndex} totalDots={carouselItemsInfo.length} />
            </ContextContainer>
            <button onClick={handleRight}>Right</button>
        </CarouselContainer>
    );
}

export default CarouselWrapper;
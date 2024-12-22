import React, { FC } from 'react';
import styled from 'styled-components';

type DotProps = {
    index: number;
    totalDots: number;
};

const DotContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    justify-content: center;
    padding: 1rem;
`

//shouldForwardProp => for not to pass isActive to the Dom.
// else: use isactive(all lowercase of type string not boolean) - according to the HTML standarts
const Dot = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isActive",
  })<{ isActive: boolean }>`
    width: ${(props) => (props.isActive ? "17px" : "10px")};
    height: 10px;
    border-radius: 50%;
    background-color: #000;
    transition: background-color 0.3s ease;
  `;

const DotWrapper:FC<DotProps> = ({ index, totalDots }) => {

    return(
        <DotContainer>
            {
                Array.from({length: totalDots}).map((_, ind) => (
                    <Dot key={ind} isActive={ind === index} />
                ))
            }
        </DotContainer>
    );
}

export default DotWrapper;
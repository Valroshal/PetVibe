import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
`

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState<number | "">(1); // another solution to check type in function - empty will be string
    // const handleCounterIncrement = () => {
    //     setCounter(counter + 1)
    // }

//      Always use functional updates (setCounter((prev) => prev + 1)) when the next state depends on the previous state.

//     This approach uses a functional update. The callback function receives the previous state value 
//     as prevCounter and ensures the state update is based on the most recent state.
        // When to Use:
        // When the next state depends on the previous state.
        // Useful in cases where React batches multiple state updates together (e.g., in setTimeout or event handlers).
        // Prevents issues with stale state values caused by closures.
    const handleIncrement = () => setCounter((prevCounter) => prevCounter + 1); 

    const handleCounterDecrement = () => setCounter(counter - 1)

    const handleCounterReset = () => setCounter(0)

    const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStep(value === "" ? "" : Number(value));
    };

    return(
        <div>
            <p>{counter}</p>
            {/* // was div - see styled on top */}
            <ButtonContainer>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleCounterDecrement} disabled={counter <= 0}>Decrement</button>
                <button onClick={handleCounterReset}>Reset</button>
            </ButtonContainer>
            <input 
                type="number"
                value={step}
                onChange={handleStepChange}
                placeholder="Step"
            />
            <button onClick={() => setCounter((prev) => prev + (Number(step) || 0))}>Increment by Step</button>
        </div>
    );
};

export default Counter;
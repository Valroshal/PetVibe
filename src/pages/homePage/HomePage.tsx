import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import DogImageList from "./dogBreedList";
import GreetingModal from "./GreetingModal/GreetingModal";

const queryClient = new QueryClient();

const HomePage: React.FC = () => {

    const [showModal, setShowModal] = useState(true)

    //don't need useCallback because the child component is not wrapped with memo (no need), so no unnecessary renderings appear
    //if memoized => use useCallback
    const handleClickClose = () => setShowModal(false)
    return (
        <QueryClientProvider client={queryClient}>
            <DogImageList />
            {
                showModal && <GreetingModal onClose={handleClickClose}/>
            }
        </QueryClientProvider>
    )
};

export default HomePage;
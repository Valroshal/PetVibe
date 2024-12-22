import React, { useState } from "react";
import QRSubmit from "./QRSubmit";

const QRCreationPage = () => {
    const [data, setData] = useState("I'm unicorn");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value)
    }
    
    return(
        <div>Create QR Code
            <input 
                type="text" 
                placeholder="Enter data for QR code" 
                value={data} 
                onChange={handleInputChange}
            />
            <QRSubmit data = {data} />
        </div>
    );
};

export default QRCreationPage;
import React, { useState } from "react";
import QRCode from 'qrcode';

interface QrCodeProps {
    data: any;
}

const QRSubmit: React.FC<QrCodeProps> = ({data}) => {

    const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
    if (!data) {
        console.error('Data for QR code generation is missing.');
        return null;
    }

    const generateQrCode = async () => {     
        await QRCode.toDataURL(data)
            .then((url: string) => {
                setQrCodeUrl(url)
            })
            .catch((err: any) => {
                console.error(err)
            })
        };

    return(
        <div>
            <button onClick={generateQrCode}>Generate QR Code</button>
            {qrCodeUrl && (
                <img src={qrCodeUrl} alt="Generated QR Code" />
            )}
        </div>
    );
};

export default QRSubmit;
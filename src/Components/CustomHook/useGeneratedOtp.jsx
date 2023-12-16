// Random 6 Digit OTP Generate CustomHook
import { useEffect, useState } from 'react';
export const useGeneratedOtp = () => {
    const [generateOtp, setGenerateOtp] = useState(0);

    useEffect(() => {
         // Math.floor(Math.random() * (max - min + 1) + min)    // formula
         let otpValue = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
         setGenerateOtp(otpValue);
    }, [generateOtp])
    return generateOtp;
 }


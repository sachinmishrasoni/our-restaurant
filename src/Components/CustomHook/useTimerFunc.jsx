// Custom Hook for Timer
import { useState, useEffect } from 'react';

const useTimerFunc = () => {
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [countDownBool, setCountDownBool] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        if (secondsLeft === -1) {
            setMinutesLeft(minutesLeft - 1)
            setSecondsLeft(59)
        } else if (secondsLeft === 0 && minutesLeft === 0) {
            setCountDownBool(false)
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [secondsLeft, minutesLeft])

    function startCountDown(seconds, bool) {
        setCountDownBool(bool)
        if (seconds <= 59) {
            setMinutesLeft(0);
            setSecondsLeft(seconds);
        } else {
            if (seconds % 60 === 0) {
                setMinutesLeft(seconds / 60)
                setSecondsLeft(0)
            } else {
                setMinutesLeft(Math.floor(seconds / 60))
                setSecondsLeft(seconds % 60)
            }
        }
        // setSecondsLeft(seconds)
    }

    return { secondsLeft, minutesLeft, startCountDown, countDownBool };
}

export default useTimerFunc;
import dayjs from "dayjs"
import { useEffect, useState } from "react"

export function Calendar() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const weekDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    useEffect(() => {
        console.log(currentDate.subtract(1, "day").date())
        console.log(currentDate.add(1, 'day').date())

    })

    const [currentDate, setCurrentDate] = useState(dayjs());
    const [currentDay, setCurrentDay] = useState(dayjs().date())

    function handleDecreaseMonth() {
        const newDate = currentDate.subtract(1, "month");
        setCurrentDate(newDate);
    }

    function handleIncreaseMonth() {
        const newDate = currentDate.add(1, "month");
        setCurrentDate(newDate);
    }
    function handle() {
        const newDay = currentDate.subtract(1, "day").date()
        setCurrentDay(newDay)
    }

    return (
        <div>
            <div>
                <button onClick={handleDecreaseMonth}>-</button>
                {months[currentDate.month()]}
                <button onClick={handleIncreaseMonth}>+</button>

            </div>
            <div>
                <button onClick={handle}>-</button>
                {currentDay}
            </div>
        </div>
    )
}

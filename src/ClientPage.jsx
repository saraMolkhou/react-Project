import { useState } from "react";
import { Appointments } from "./clients/apointments"
 
export const ClientPage = () => {
    const [showAppointments, setShowAppointments] = useState(false); // משתנה מצב להצגת הפגישות

    const handleShowAppointments = () => {
        setShowAppointments(!showAppointments); 
    };

    return (
        <div>
             <button onClick={handleShowAppointments}>
                {showAppointments ? "Hide Appointments" : "Show Appointments"}
            </button>

            {showAppointments && <Appointments />}
        </div>
    );
}

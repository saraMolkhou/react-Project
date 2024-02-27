import { useState } from "react";
import  {Services}  from "./servicePage"; 
export const AddService = () => {
    const [showServices, setShowServices] = useState(false); // משתנה מצב להצגת הפגישות

    const handleShowServices = () => {
        setShowServices(!showServices); 
    };

    return (
        <div>
             <button onClick={handleShowServices}>
                {showServices ? "Hide Button" : "Add service"}
            </button>

            {showServices && <Services/>}
        </div>
    );
}

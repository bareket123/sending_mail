import React, {useState} from 'react';
import "../Styles/DaysMenuStyle.css";
function DaysMenu({chosenMonth,onValueChange}) {
    const [daysNumber, setDaysNumber] = useState(30);

    const increment = () => {
        const newValue = daysNumber + 1;
        setDaysNumber(newValue);
//        onValueChange(newValue);

    }
    const decrement = () =>{
        const newValue = daysNumber > 0 ? daysNumber - 1 : 0;
        setDaysNumber(newValue);
       // onValueChange(newValue);
    }

    // const sendValueToParent = () => {
    //     //const value = "Hello, Parent!";
    //     alert(daysNumber)
    //     onValueChange(daysNumber); // העברת הערך חזרה להורה
    // };
    return (
        <div className={"main-container"}>

            <h3 className={"header"}> בחרי כמות ימים בחודש {chosenMonth}</h3>

            <button className="counter-button" onClick={decrement}>
                -
            </button>

            <input
                type="number"
                className="counter-input"
                value={daysNumber}
                readOnly
            />
            <button className="counter-button" onClick={increment}>
                +
            </button>
            <button onClick={() => {onValueChange(daysNumber, chosenMonth);alert("כמות הימים שנבחרה היא " + daysNumber)}} className={"save_button"}>✅</button>
            {/*<div className={"directions"}>יש ללחוץ על המספר לשמירה</div>*/}

        </div>
    )
}


export default DaysMenu;

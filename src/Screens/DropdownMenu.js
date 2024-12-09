import React, { useState } from "react";
import "../Styles/DropdownMenuStyle.css";
import { useNavigate } from "react-router-dom";
import DaysMenu from "./DaysMenu";
import emailjs from '@emailjs/browser';
import LoadingLogo from "./LoadingLogo";
/*
הרעיון הוא ליצור משתנה בולאיני שיגרום לאפשרות לבחור חודש להיות חסומה עד שלא בוחרים ימים
 */

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMonths, setSelectedMonths] = useState([]);
    // const [currentDays, setCurrentDays] = useState("");
    const [messageToSend, setMessageToSend] = useState("");
    const [toContinue, setToContinue] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
 //   const navigate = useNavigate();

    const getCurrentDay = (value,chosenMonth) => {
        // setCurrentDays(value);
        setMessageToSend(messageToSend+" בחודש "+chosenMonth +" היו "+value+" טובלות "+"\n \n")

        // setMessageToSend(messageToSend+" היו: "+value+" טובלות ");
    }

    /*
    בחודש אוקטובר היו כ- 22 טובלות
     */




    const months = [
        "ינואר",
        "פברואר",
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר"
    ];



    // פונקציה לפתיחת/סגירת התפריט
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const selectChoice = (chosenMonth) => {
        setSelectedMonths((prevMonths) => [...prevMonths, chosenMonth]);
        // setMessageToSend(" בחודש "+chosenMonth+messageToSend)
        setIsOpen(false);
    }
    const deleteChoice = (choice) => {
        //alert(choice)
        console.log("inside delete choice", choice);
        setSelectedMonths((prevMonths) => prevMonths.filter((item) => item !== choice));
        const updatedMessage = messageToSend.replace(`בחודש ${choice}`, '').trim();
        setMessageToSend(updatedMessage);
        console.log(selectedMonths);


    }

    const continueButton = () => {
        setShowLogo(true);
        if (toContinue){
            const emailParams = {
                user_name: "rachel Atia",
                user_email: "atbar8510@gmail.com",
                message: messageToSend,
            };
            emailjs.send('service_hkwnow8', 'template_qvdb8n1',emailParams,'482Vcf2oR2pmojmNv')
                .then(
                    (response) => {
                        setShowLogo(false);
                        alert("המייל נשלח לאדווה בהצלחה");
                        console.log('Email sent successfully:', response.status, response.text);

                    },
                    (error) => {
                        console.error('Email sending failed:', JSON.stringify(error)); // או console.log(error)
                    }
                );

            setMessageToSend("")
            setSelectedMonths([])
            //setIsOpen(false);
            // setCurrentDays("")
            setToContinue(!toContinue)
        }else {
            setToContinue(!toContinue);
        }

     }


    return (
        <div>
        {
            showLogo ?
                <LoadingLogo/>
                :
                <div className="dropdown">
                    {
                        !toContinue ?
                            <div>
                                <h3>אילו חודשים תרצי למלא?</h3>
                                <button className="dropdown-button" onClick={toggleMenu}>
                                    בחרי חודש 📆
                                </button>
                                {isOpen && (
                                    <ul className="dropdown-menu">
                                        {
                                            months.map((month, index) => (
                                                <li onClick={() => selectChoice(month)}>{month}</li>
                                            ))
                                        }

                                    </ul>
                                )}
                                {
                                    selectedMonths.length > 0 &&
                                    <div className={"selected-months-div"}>
                                        החודשים שנבחרו:
                                        {
                                            selectedMonths.map((currentChoice, index) => (
                                                <div className={"month-div"}>
                                                    <button title={"delete button"} className={"month-button"}
                                                            onClick={() => {
                                                                //  setMessageToSend(messageToSend+"בחודש "+currentChoice)
                                                                deleteChoice(currentChoice)
                                                            }}>
                                                        X {currentChoice}
                                                    </button>

                                                </div>
                                            ))

                                        }

                                        <button disabled={selectedMonths.length === 0} className={"continue-button"}
                                                onClick={() => setToContinue(!toContinue)}>
                                            המשיכי לבחירת הימים

                                        </button>
                                    </div>
                                }


                            </div>
                            :
                            <div>
                                <h3>בחרי את הימים עבור החודשים שנבחרו</h3>
                                {
                                    selectedMonths.map((month, index) => (
                                        <DaysMenu onValueChange={getCurrentDay} chosenMonth={month}/>
                                    ))
                                }
                                <button disabled={messageToSend.length === 0} className={"send-button"}
                                        onClick={continueButton}>שלחי מייל לאדווה
                                </button>

                            </div>


                    }


                </div>

        }
        </div>
    );
}

export default DropdownMenu;

import React, {useState} from "react";
import InfoIcon from "./../assets/info.png";
import DebugIcon from "./../assets/debug-icon.png";
import FeedbackIcon from "./../assets/feedback.png";
import GetInfo from "./get-info";
import ReportNow from "./report-now";



type ModalProps = {
    callback: () => void;
  };

const Modal:React.FC<ModalProps> = ({callback}) => {

    const [tabInfo, setTabInfo] = useState("");

    const onClose = () => {
        callback();
        setTabInfo("");
    }

    return(
        <div className="courier vh-100 flex items-center justify-center">
            <div className={`shadow-4 bg-light-gray w-50 w-100-m w-100-s pa3 f6-m f7-s`}>
                <div className="pa3 flex flex-column">
                    <div className="flex justify-between">
                        <button className="pointer" onClick={() => setTabInfo("")} disabled={tabInfo ? false :  true}>&#8592; back</button>
                        <button className="pointer" onClick={onClose}>&#10006; close</button>
                    </div>
                    {
                        tabInfo === "GET_INFO" && <GetInfo />
                    }
                    {
                        tabInfo === "REPORT_NOW" && <ReportNow />
                    }
                    {
                        !tabInfo && 
                        <>
                        <h1 className="f2 fw2 black-90 mv3">
                            Reporting Tool
                        </h1>
                        <div className="flex justify-around items-center h-100 b ma5">
                            <button className="flex flex-column bn b pointer" onClick={() => setTabInfo("GET_INFO")}>
                                <div className="self-center">
                                    <img alt="info-icon" src={InfoIcon}  className="w2 h2" />
                                </div>
                                <div className="self-center f6">Get Information</div>
                            </button>
                            <button className="flex flex-column bn b pointer" onClick={() => setTabInfo("REPORT_NOW")}>
                                <div className="self-center">
                                    <img alt="debug-icon" src={DebugIcon} className="w2 h2" />
                                </div>
                                <div className="self-center f6">Report Now</div>
                            </button>
                            <button className="flex flex-column bn b pointer">
                                <div className="self-center">
                                    <img alt="feedback-icon" src={FeedbackIcon}  className="w2 h2" />
                                </div>
                                <div className="self-center f6">Feedback</div>
                            </button>
                        </div>
                        </>
                    }      
                </div>
            </div> 
        </div>

    )
}

export default Modal;
import React, {useState} from "react";
import DebugIcon from "./../assets/debug-icon.png";
import Modal from "./modal";

const ReportingTool = () => {

    const [modalStatus, setModalStatus] = useState(false);

    return(
        modalStatus ? 
        <Modal callback={() => setModalStatus(false)} />
        : 
        <div className="vh-100 flex items-center justify-end">
            <div className="fixed">
            <button onClick={() => setModalStatus(true)}>
                <img alt="debug-icon" src={DebugIcon} className="w3 h3" />
            </button>
            </div>
        </div>
    )
}

export default ReportingTool;
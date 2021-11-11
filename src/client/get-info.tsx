import React, {useState} from "react";

const browserCookies = document.cookie.split(";");
const localStorage = window.sessionStorage;

const ReportNow = () => {

    const [currentCookie, setCurrentCookie] = useState("");
    const [currentStorageValue, setCurrentStorageValue] = useState("");

    const onSelectCookie = (event:any) => {
        setCurrentCookie(event.target.value);
    }
    const onSelectLocalStorage = (event:any) => {
        setCurrentStorageValue(event.target.value);
    }

    return(
        <>
            <h1 className="f2 fw2 black-90 mv3">
                GET INFORMTAION
            </h1>
            <div data-automation-id="add-new-item" className="flex flex-column w-90 center bg-white pa4 mt3">   
                {
                    browserCookies.length && 
                    <div className="pv2 flex flex-column">
                        <div className="tl">
                            <label className="tl mb2">Browser Cookies</label>
                            <span className="f7">(select cookie name, to see their respective value)</span>
                        </div>
                        <select onChange={onSelectCookie}>
                            <option value="">Select</option>
                            {
                                browserCookies.map(cookie => {
                                    const cookieItem = cookie.split("=");
                                    return <option value={cookieItem[1]}>{cookieItem[0]}</option>
                                })
                            }
                        </select>
                        {
                            currentCookie && 
                            <div className="bg-light-yellow tl pa2 f6">
                                {currentCookie}
                            </div>
                        } 
                    </div>
                }
                {
                    localStorage.length && 
                    <div className="pv2 flex flex-column">
                        <div className="tl">
                            <label className="tl mb2">Local Storage</label>
                            <span className="f7">(select local storage key, to see their respective value)</span>
                        </div>
                        <select onChange={onSelectLocalStorage}>
                            <option value="">Select</option>
                            {
                                Object.keys(localStorage).map(key => {
                                    return <option value={localStorage[key]}>{key}</option>
                                })
                            }
                        </select>
                        {
                            currentStorageValue && 
                            <div className="bg-light-yellow tl pa2 f6">
                                {currentStorageValue}
                            </div>
                        } 
                    </div>
                }
            </div>
        </>
    )
}

export default ReportNow;
import React, { useState } from "react";

const ReportNow = () => {

    const intialState = {
        "teamToReport": "",
        "summary": "",
        "description": "",
        "reporter": "",
        "severity": ""
    }
    
    const [formData, setFormData] = useState(intialState);
    const [alert, setAlert] = useState<boolean>(false)

    const onSubmit = () => {
        const isEmpty = Object.values(formData).some(x => (x === null || x === ''));
        if(isEmpty) {
            setAlert(true);
        }else {
            const jiraUrl = `https://jira.walmart.com/secure/CreateIssueDetails!init.jspa?summary=${encodeURI(formData.summary)}&description=${encodeURI(formData.description)}&reporter=${encodeURI(formData.reporter)}&pid=45703&issuetype=1&reporter=s0s05pn&customfield_10216=14900&customfield_10212=25900&priority=11&customfield_20400=5791649`;
            window.open(jiraUrl, `_blank`);
        }
    }
    return(
        <>
            <h1 className="f2 fw2 black-90 mv3">
                Report Now
            </h1>
            <div data-automation-id="add-new-item" className="flex flex-column w-90 center bg-white pa4 mt3">
            {
                alert && <div className="bg-gold pv2 mb3 b white ph1 f6">&#9888; Please fill all details before you submit</div>
            }
                <div className="pv2 flex flex-column">
                    <div className="tl">
                        <label className="tl mb2">Team to Report*</label>
                        <span className="f7">(respective tag will be added automatically)</span>
                    </div>
                    <select onChange={e => setFormData({...formData, "teamToReport": e.target.value})}>
                        <option value="">Select One</option>
                        <option value="Glass-Web-Cart">Glass-Web-Cart</option>
                        <option value="Glass-Web-PostTx-US">Glass-Web-PostTx</option>
                    </select>
                </div>
                <div className="pv2 flex flex-column">
                    <div className="tl">
                        <label className="tl mb2">Summary*</label>
                        <span className="f7">(jira title)</span>
                    </div>
                    <input 
                        className="tl pa1" 
                        type="text" 
                        maxLength={40}
                        onChange={e => setFormData({...formData, "summary": e.target.value})}
                    />
                </div>
                <div className="pv2 flex flex-column">
                    <div className="tl">
                        <label className="tl mb2">Description*</label>
                        <span className="f7">(little more information about bug)</span>
                    </div>
                    <textarea rows={5} onChange={e => setFormData({...formData, "description": e.target.value})}></textarea>
                </div>
                <div className="pv2 flex flex-column">
                    <div className="tl">
                        <label className="tl mb2">Severity*</label>
                        <span className="f7">(how big is the issue)</span>
                    </div>
                    <select onChange={e => setFormData({...formData, "severity": e.target.value})}>
                        <option value="">None</option>
                        <option value="10115">1 - Critical</option>
                        <option value="10116">2 - Major Problem</option>
                        <option value="10117">3 - Minor Problem</option>
                        <option value="10118">4 - Cosmetic</option>
                        <option value="14900">TBD</option>
                    </select>
                </div>
                <div className="pv2 flex flex-column">
                    <div className="tl">
                        <label className="tl mb2">Reporter*</label>
                        <span className="f7">(walmart username)</span>
                    </div>
                    <input 
                        className="tl pa1" 
                        type="text" 
                        onChange={e => setFormData({...formData, "reporter": e.target.value})}
                    />
                </div>
                
                <button 
                    className="pointer bg-dark-green white pv2 ph4 bn fl mt3" 
                    onClick={onSubmit}
                >
                        &#x2714; SUBMIT
                </button>
            </div>
        </>
    )
}

export default ReportNow;
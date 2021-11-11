import React from "react";
import './App.css';
import './tachyons.css';

import ReportingTool from "./client/reporting-tool";


const App: React.FC = () => {

  return (
      <div className={"App"} >
        <ReportingTool />
      </div>  
   );
};

export default App;

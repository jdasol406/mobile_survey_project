import { Route, Routes } from "react-router-dom";
import SurveyList from "./SurveyList";
import SurveyWrite from "./SurveyWrite";
import SurveyDetails from "./SurveyDetails";

function Survey() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SurveyList/>}/>
        <Route path="/SurveyWrite" element={<SurveyWrite/>}/>
        <Route path="/SurveyDetails" element={<SurveyDetails/>}/>
      </Routes>
    </>
  );
}

export default Survey;


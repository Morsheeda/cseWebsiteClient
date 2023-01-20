import TopNavBar from "./components/topTst/TopNavBar";
import Topbar from "./components/topbar/Topbar";

import MainHome from "./pages/mainHome/MainHome"

import NUnotices from "./pages/notices/NUnotice/NUnotices"
import AdmissionNotice from "./pages/notices/admissionNotice/AdmissionNotice"
import ISTNotice from "./pages/notices/ISTnotice/ISTnotice"

import AdmissionEligibility from "./pages/admission/admissionEligibility/AdmissionEligibility";
import TuitionFees from "./pages/admission/tuitionFees/TuitionFees";
import AdmissionProcedure from "./pages/admission/admissionProcedure/AdmissionProcedure";
import ScholarshipAssistantship from "./pages/admission/scholarshipAssistantship/ScholarshipAssistantship";

import Administration from "./pages/academics/administration/Administration";
import CommunicationLab from "./pages/academics/communicationLab/CommunicationLab";
import ComputerLab from "./pages/academics/computerLab/ComputerLab";
import CourseOutline from "./pages/academics/courseOutline/CourseOutline";
import ElectricalAndElectronicsLab from "./pages/academics/electricalAndElectronicsLab/ElectricalAndElectronicsLab";
import ExamFormFillup from "./pages/academics/examFormFillup/ExamFormFillup";
import FacultyMember from "./pages/academics/faculty/FacultyMember";
import Library from "./pages/academics/library/Library";
import Result from "./pages/academics/result/Result";
import ISTjournal from "./pages/academics/ISTjournal/ISTjournal";

import WinningPrizes from "./pages/achievements/winningPrizes/WinningPrizes";
import PhotoGallery from "./pages/achievements/photoGallery/PhotoGallery";

import AboutIST from "./pages/about/aboutIST/AboutIST";
import AboutECE from "./pages/about/aboutECE/AboutECE";
import AboutThisWebsite from "./pages/about/aboutThisWebsite/AboutThisWebsite";

import Contact from "./pages/about/contact/Contact";

import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import AdminLogin from "./pages/adminlogin/AdminLogin";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import User from "./pages/user/User";

import Footer from "./pages/footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  // const currentUser = true;
  const { user } = useContext(Context)
  return (
    <Router>
      {/* <Topbar /> */}
      <TopNavBar/>
      <Switch>
        <Route exact path="/"> <MainHome /> </Route>


        <Route path="/admissionNotice"> <AdmissionNotice/> </Route>
        <Route path="/Notices"> <ISTNotice/> </Route>
        <Route path="/nuNotices"> <NUnotices/> </Route>
        
        <Route path="/admissionForm"> <ElectricalAndElectronicsLab/> </Route>
        <Route path="/admissionEligibility"> <AdmissionEligibility/> </Route>
        <Route path="/tuitionFees"> <TuitionFees/> </Route>
        <Route path="/admissionProcedure"> <AdmissionProcedure/> </Route>
        <Route path="/scholarshipAssistantship"> <ScholarshipAssistantship/> </Route>
        
        <Route path="/administration"> <Administration/> </Route>
        <Route path="/facultyMember"> <FacultyMember/> </Route>
        <Route path="/courseOutline"> <CourseOutline/> </Route>
        <Route path="/gradingPolicies"> <ExamFormFillup/> </Route>
        <Route path="/academicCalendar"> <Result/> </Route>
        <Route path="/communicationLab"> <CommunicationLab/> </Route>
        <Route path="/computerLab"> <ComputerLab/> </Route>
        <Route path="/studentFacilities"> <Library/> </Route>
        <Route path="/journal"> <ISTjournal/> </Route>

        <Route path="/blogs"> <Homepage/> </Route>

        <Route path="/winningPrizes"> <WinningPrizes/> </Route>
        <Route path="/photoGallery"> <PhotoGallery/> </Route>
        
        <Route path="/aboutIST"> <AboutIST/> </Route>
        <Route path="/aboutECE"> <AboutECE/> </Route>
        <Route path="/aboutThisWebsite"> <AboutThisWebsite/> </Route>
        <Route path="/contact"> <Contact/> </Route>

        <Route path="/posts"> <Homepage /> </Route>
        <Route path="/register"> {user ? <Homepage /> : <Register />} </Route>
        <Route path="/login"> {user ? <Homepage /> : <Login />} </Route>
        <Route path="/admin"> {user ? <Homepage /> : <AdminLogin />} </Route>
        <Route path="/post/:id"> <Single /> </Route>
        <Route path="/write"> {user ? <Write /> : <Login />} </Route>
        <Route path="/user"> {user ? <User /> : <Login />} </Route>
        <Route path="/settings"> {user ? <Settings /> : <Login />} </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
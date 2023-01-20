import React from 'react'
import "./TopNavBar.css"
import eceLogo1 from "../../resources/images/ECE Logo Tr.png"
import eceLogo2 from "../../resources/images/ECE Logo WT Tr.png"
import { Link } from "react-router-dom";

export default function TopNavBar() {
    return <div className="topNavBar">
        <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
            <div className="navBartopLeft">
                <div className="navBartopLeftImg">
                    <Link className="link" to="/">
                        <div className="navBartopLeftImgBx"></div>
                        {/* <img className="navBartopLogo" 
                    src={require( "../../resources/images/ECE Logo Tr.png" )}
                    alt="" /> */}
                    </Link>
                </div>
                <div className="siteHeading">
                    <Link className="link" to="/">
                        <h3>Department of Computer Science and Engineering</h3>
                        <h4>Feni University, bangladesh</h4>
                    </Link>
                </div>
            </div>

            <div className="collapse navbar-collapse navBartopRight" id="navbarSupportedContent">
                <ul className="navbar-nav ml-lg-auto navBartopList">
                    <li className="nav-item menuTitle active ">
                        <Link className="nav-link link" to="/"><li className="navBartopListItem">HOME</li><span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item menuTitle active ">
                        <Link className="nav-link link" to="/blogs"><li className="navBartopListItem">Blog</li></Link>
                    </li>
                    <li className="nav-item menuTitle active ">
                        <Link to="/Notices" onClick={() => window.location.replace("/Notices")} className="nav-link link" ><li className="navBartopListItem">Notices</li></Link>
                    </li>

                    {/* <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Notices <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link to="/admissionNotice" onClick={() => window.location.replace("/admissionNotice")} className="link dropdown-item dropDownMenuItem" ><li className="">Admission Notices</li></Link>
                            <Link to="/ISTNotice" onClick={() => window.location.replace("/ISTNotice")} className="link dropdown-item dropDownMenuItem" ><li className="">IST Notices</li></Link>
                            <Link to="/NUnotices" onClick={() => window.location.replace("/NUnotices")} className="link dropdown-item dropDownMenuItem" ><li className="">NU Notices</li></Link>
                        </div>
                    </li> */}

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Admission <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/admissionForm"><li className="">Admission Form</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/admissionEligibility"><li className="">Admission Eligibility</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/admissionProcedure"><li className="">Admission Procedure</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/tuitionFees"><li className="">Tuition Fees Structure</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/scholarshipAssistantship"><li className="">Scholarship / Assistantship</li></Link>

                        </div>
                    </li>

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Academics <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/administration"><li className="">Administration</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/facultyMember"><li className="">Faculty Member</li></Link>
                            {/* <Link className="link dropdown-item dropDownMenuItem" to="/courseOutline"><li className="">Course Outline</li></Link> */}
                            <Link className="link dropdown-item dropDownMenuItem" to="/gradingPolicies"><li className="">Grading Policies</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/academicCalendar"><li className="">Academic Calendar</li></Link>
                            {/* <Link className="link dropdown-item dropDownMenuItem" to="/electricalAndElectronicsLab"><li className="">Electrical And Electronics Lab</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/communicationLab"><li className="">Communication Lab</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/computerLab"><li className="">Computer Lab</li></Link> */}
                            <Link className="link dropdown-item dropDownMenuItem" to="/studentFacilities"><li className="">Student Facilities</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/journal"><li className="">Feni University Journal</li></Link>
                        </div>
                    </li>

                    {/* <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> Achievements <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/winningPrizes"><li className="">Winning Prizes</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/photoGallery"><li className="">Photo Gallery</li></Link>
                        </div>
                    </li> */}

                    <li className="nav-item menuTitle dropdown active">
                        <li className="nav-link" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <li className='navBartopListItem'> About <i class="fas fa-caret-down"></i></li>
                        </li>
                        <div className="dropdown-menu dropDownMenu" aria-labelledby="navbarDropdown">
                            <Link className="link dropdown-item dropDownMenuItem" to="/aboutIST"><li className="">Feni University</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/aboutECE"><li className="">CSE Department</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/aboutThisWebsite"><li className="">This Website</li></Link>
                            <Link className="link dropdown-item dropDownMenuItem" to="/contact"><li className="">Contact</li></Link>
                        </div>
                    </li>

                    <li className="nav-item menuTitle active iEMSbuttonContainer">
                        <a className='nav-link link' target="_blank" rel="noreferrer" href="https://fuiems.pipilikasoft.com/"><li className='iEMSbutton'>i-EMS</li></a>
                    </li>

                </ul>
                <i className="navBartopSearchIcon fas fa-search"></i>

            </div>

        </div>
    </div>
}


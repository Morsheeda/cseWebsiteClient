import React from 'react'
import "./MainHome.css"
import { Link } from "react-router-dom";
import ImgCarousel from '../../components/imgCarousel/ImgCarousel'
import BlogImage from '../../resources/images/5G Global Technology.png'
import Posts from "../../components/posts/Posts";
import PostsInHome from "../../components/postsInHome/PostsInHome"
import dean from "../../resources/images/Dean.jpg"
import chairman from "../../resources/images/Chairman.jpg"

import { useState, useEffect } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom';

export default function MainHome() {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    return <div className="mainHome">
        {/* <div className="latestNoticeBoard">
            <marquee behavior="" direction="left">The latest notice of the institute will be shown here all the time to grab the attention of the web surfer</marquee>
            <div className="allNoticeButton" ><a href="/ISTNotice">All IST Notices</a></div>
        </div> */}
        <div className="mainHomeUpperPart ">
            <div className="upperPartLeft ">
                <ImgCarousel />
                <div className="departmentHead">
                    <div className="departmentHeadTitle">
                        <div className="departmentHeadImg">
                            {/* <img src="https://www.feniuniversity.ac.bd/public/storage/upload/facultyMembers/resize_356X390/221008062616-3007.jpg" alt="" /> */}
                            <img src={chairman} alt="" />
                        </div>
                        <div className="departmentHeadDesig">
                            <h3>Busrat Jahan</h3>
                            <h4>Assistant Professor and Chairman</h4>
                            <h5>Department of Department of Computer Science and Engineering.</h5>
                        </div>
                    </div>
                    <div className="departmentHeadMsg">
                        <p>
                            Welcome to the Computer Science and Engineering Department (CSE) at the Feni University.  As Chairman of the department, I would like to share with you some highlights of our department: our world class faculty and laboratory facilities, state-of-the-art infrastructure, successful alumni, and great job markets. The Department of CSE at Feni University started its journey since 2013.  With the commitment for seeking truth and making innovation, demand-orientation and quality first, the department has cultivated a large number of top-quality talents for the society through the reform and innovation of teaching methodology, the curriculum and the management. We constantly strive to provide an excellent academic and research atmosphere for the students and faculty members to inherit a professional efficiency along with moral dignity and values.
                        </p>
                    </div>
                </div>
            </div>
            <div className="upperPartRight ">
                <div className="homeBlogSection">
                    <h3>Recent Blogs</h3>
                    <PostsInHome posts={posts} />
                </div>
                {/* <Link className="link " to="/blogs">
                    <button className='allBlogButton'>See all blogs</button>
                </Link> */}
            </div>
        </div>
        <div className="mainHomeMiddlePart">
            <div className="dean">
                <div className="deanTitle">
                    <div className="deanImg">
                        {/* <img src="https://www.feniuniversity.ac.bd/public/storage/upload/content/221220064224-8724IMG_289891130_025128.jpg" alt="" /> */}
                        <img src={dean} alt="" />
                    </div>
                    <div className="deanDesig">
                        <h3>Professor Dr. M. Jamaluddin Ahmed <span> CSci, CChem, FRSC, FRS</span></h3>
                        <h4>Chartered Scientist (EU), Fellow Chartered Chemist (UK) </h4>
                        <h4>Vice Chancellor & Dean <span> (Faculty of Science & Engineering) </span></h4>
                        <h5> Feni University.</h5>
                    </div>
                </div>
                <div className="deanMsg">
                    <p>
                    Welcome to the Faculty of Science and Engineering at Feni University As Dean, I have the privilege of leading this faculty a place where curiosity, empathy, and intellect conglomerate to prepare our students to meet the future challenges. We prioritize to prepare the next generation of scientists to resolve global health, energy and environmental challenges. The faculty provides knowledge and skills-based learning environment to our graduates. All the faculty members are actively pursuing interdisciplinary research in science and engineering, power and energy, robotics and automation, data analytics and communication technology. The faculty members are students centric, dedicated to teaching and learning, actively involved in research, witnessed by publications in highly ranked academic journals. As Dean, my aim is to escalate the important opportunities for our graduate students to create new knowledge, prepare for professions in and outside the university, and determine the contemporary requirements of the society.
                    </p>
                </div>
            </div>
        </div>
        <div className="mainHomeLowerPart">
            <div className="mainHomeLowerPartDescriptionContainer">
                <h4 className="mainHomeLowerPartTitle">CSE at feni university</h4>
                <p className="mainHomeLowerPartDescription">
                    Department of Computer Science and Engineering (CSE) at Feni University provides B.Sc. (Honors) in Computer Science and Engineering (CSE) undergraduate course. This department at Feni University started its journey since 2013.
                    <br />
                    This is one of the most trending engineering fields in the world. CSE blends together the field of Computer Science and Computer Engineering. The academic program includes core subjects such as Computer Programming, Mathematics, Data Structures, Algorithm Design, Theory of Computation, Database Management System, Networking, Information Security, Mobile Application Development, Web Design and Development.  Students pursuing the course will gain profound knowledge about design, development and management of software as well as hardware. They will also increase their analytical capability, critical thinking, and problem-solving skills.
                    <br />
                    In recent years, computer science and technology comes into widespread use in daily life and new technologies such as cloud computing, Internet of Things, mobile internet, big data, etc. are emerging.
                    <br />
                    Accordingly, CSE Department adjusted its subject directions and now strong research groups have formed in the areas of theoretical computer science, parallel and distributed systems, computer networking, artificial intelligence, cryptography and information security, etc. In accordance with international standards, CSE department is striving to become one of the top computer science departments in the world.
                    <br />
                    The CSE department offers one programs at the undergraduate level:  the BSc degree programs in Computer Science and Engineering.
                    <br />
                    We have credit waiver facilities for diploma holders who already have been completed their diploma program.   The design of the degree programs takes into account the highest national standards for computing curricula set by the University Grants Commissions (UGC) of Bangladesh.
                    <br />
                    With a fine tradition and smooth introduction, CSE Department has constantly overcome difficulties and actively innovated along the way. We insist on integrating teaching and scientific research with social services, prioritizing on students and their moral education. We are making our best effort to contribute to the development of IT industry in Bangladesh and the academic advancement in computer science, with the hope of entering the top tier in research. This department sincerely welcomes those at local or other who aspire to pursue studies, to educate, or to innovate in the area of computer science to join us.

                </p>
            </div>
            <div className="mainHomeLowerPartDescriptionContainer">
                <h4 className="mainHomeLowerPartTitle">What does a Computer Engineer do?</h4>
                <div className="jobCardContainer">
                    <div className='jobCard'>
                        <h5 className="jobCardTitle">computer programmer</h5>
                        <p className="jobCardDescription">
                            A computer programmer is responsible for creating the code for operating systems and software applications. After software developers design a computer program, the programmers write code that turns that design into a set of instructions a computer's operating system can follow. Other duties of a computer programmer include developing a new web-based information system, creating and publishing technical diagrams to support coding efforts and integrating new functionality into existing software.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">software developer</h5>
                        <p className="jobCardDescription">
                            A software developer creates many different kinds of software for various applications. They spend much of their time creating flowcharts and models that tell computer programmers how to create codes for software. They are involved in all aspects of software development, including designing, constructing, maintaining and testing software. Other duties that a software developer performs include working closely with programmers, assessing existing and new software systems.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">game developer</h5>
                        <p className="jobCardDescription">
                            A game developer is responsible for overseeing the developmental process of a video game. They may design games or use already implemented designs and write coding that brings the game characters, environments and other elements to life. They also create a plan of the different game levels and how gamers will advance through these. Other duties that a game developer performs include finding solutions to improve the game development pipeline, testing existing game systems, fixing bugs.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">web developer</h5>
                        <p className="jobCardDescription">
                            A web developer designs and develops websites and website applications. Using a variety of web technologies and programming languages, a web developer integrates security measures, implements application features and manages site functionality. Other duties that a web developer performs include constructing the layout of a website, developing a user-friendly design and visually appealing home page, writing content for the website and meeting with clients to discuss their requirements for a website.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">data scientist</h5>
                        <p className="jobCardDescription">
                            A data scientist analyzes raw data and synthesizes it into results that can be easily understood. They use their skills in machine learning, statistics and programming to analyze the data and use it to gain insights and make better business decisions. They may work in social media companies and analyze user data to understand behavior of the users. Other duties that a data scientist performs include understanding the model that best fits the data they're analyzing to identify solutions.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">firmware engineer</h5>
                        <p className="jobCardDescription">
                            A firmware engineer develops and implements software for industry-specific systems and applications. They plan, improve and manage software applications from inception to use, including allocating resources to complete programming projects and creating detailed plans to make sure that the firmware is functioning properly. Other duties that a firmware engineer performs include preparing and creating instructional manuscripts for firmware operation of the system.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">computer system analyst</h5>
                        <p className="jobCardDescription">
                            A computer system analyst helps companies or organizations use computer technology efficiently and effectively. They integrate new solutions into current systems after conducting a cost-benefit analysis to find out whether it's financially sound and will serve the company or organization well. They also research the software and hardware that are part of a company's computer systems in addition to how the systems are being used. Other duties that a computer systems analyst performs include training the end-users.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">information security analyst</h5>
                        <p className="jobCardDescription">
                            An information security analyst is responsible for maintaining and preserving the secrecy and security of digital data for a company or organization. They protect a company's information from malware, viruses, cyber-attacks and hackers. They also protect computer systems and networks and prevent cybercriminals from stealing important data, as well as keep a system's firewall protection up to date. Other duties that an information security analyst performs include investigating security breaches.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">multimedia programmer</h5>
                        <p className="jobCardDescription">
                            A multimedia programmer is a specialist software engineer who works with different multimedia features—such as video, animation, two-dimensional and three-dimensional modeling, digital photography, graphics, sound and text—to create innovative products. They also write efficient computer scripts or codes to make the various features work, ensuring that timings, animations, graphics and sound work as intended.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">forensic computer analyst</h5>
                        <p className="jobCardDescription">
                            A forensic computer analyst uses a range of specialized software and other techniques to analyze, retrieve and secure data linked to a variety of criminal activities, such as network intrusions, hacking, online fraud, and scams. They also secure a device or system so it can't be tampered with, use a range of forensic software or tools to extract and analyze data and deal with confidential or highly sensitive images or data.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">IT consultant</h5>
                        <p className="jobCardDescription">
                            An IT consultant works in partnership with clients, helping them utilize information technology to overcome problems or achieve their business objectives. They often work to improve the efficiency and structure of IT systems in various organizations. They also provide strategic guidance to clients regarding IT infrastructures and technology through improvements to IT. Other duties that an IT consultant performs include providing technical expertise and guidance to the clients.
                        </p>
                    </div>
                    <div className="jobCard">
                        <h5 className="jobCardTitle">technical support specialist</h5>
                        <p className="jobCardDescription">
                            A technical support specialist works with end-users to provide technical assistance and support for hardware, software and technical issues. Some of the more common issues they troubleshoot include inabilities to access data, slow performance, inefficient software and connection problems. Other duties that a technical support specialist performs include sending technical documentation to end-users and customers.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="mainHomeSourceContainer">
                <div className="mainHomeSource">
                    <iframe className="mainHomeIframe" scrolling='no' src="https://ist.edu.bd/department-of-electronics-and-communication-engineering/" width="100%" height="533" frameborder="0"></iframe>
                </div>
            </div> */}
        </div>
    </div>
}

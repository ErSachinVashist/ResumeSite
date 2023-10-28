import { createSlice } from "@reduxjs/toolkit";
import IMAGES from '../assets/images/IMAGES'

const exp = { years: '6', clients: '13', projects: '51' },
    work = [
        { company: 'Honda Car Limited, Noida', img: IMAGES.honda, role: 'Javascript Intern', duration: 'June-July 2014', desp: 'Worked as javascript developer and prepared utilities for logging hours of the employees in different departments and forwarding weekly report to the managers.' },
        { company: 'QSS Technsoft, Noida', img: IMAGES.qss, role: 'MERN Stack Developer', duration: 'Oct-Dec 2016', desp: 'Worked as MEAN Stack developer and made multiple  web applications from scratch using AngularJs and NodeJs with built in authentication  and authorization functionality along with handling data in mongoDb and deployed applications on the server using PM2 module.' },
        { company: 'ServerGuy, Delhi', img: IMAGES.serverguy, role: 'FULL Stack Developer', duration: 'Dec 2016 - Dec 2019', desp: "Started my role as MERN Stack developer and took responsibility of developing along with designing both Frontend and Backend of company internal products single-handedly using React, Nodejs, MySql, Docker Containers and GIT. Bagged promotion to become FULL Stack Engineer after developing my skills in the Cloud(AWS) and Dev-Ops technologies like Git CI/CD, Docker, Kubernetes, Rundeck, Ansible etc. Before my last day in office, I was able lead a team of 5 developers to design,develop,deploy and debug company's 3 major products." },
        { company: 'Genpact, Bangalore', img: IMAGES.genpact, role: 'Asst. Manager (FrontEnd)', duration: 'Dec 2019 - Dec 2021', desp: 'Worked as Asst. Manager is Genpact Sharepoint Team in Bangalore. Along with developing Modern Sharepont Applications on React and Nodejs for various Clients, my role comprises client-dealing, team-building, giving training sessions, codebase standardization and maintaining  agile flow during project execution. Currently bagged number of Genpact Recognition Awards and Rising Star of the quarter, Top learners of the month and Operational Excellence being most precious awards.' },
        { company: 'Accenture, Gurugram', img: IMAGES.accenture, role: 'Team Lead', duration: 'Dec 2021 - today', desp: 'Currently working as Team Lead for UK based client. Currently my job responsibilities are to work on product deliverables with requirements based out of Full-Stack technologies along with managing multi-region teams for the client. Along with that I am also leading a program called "Employee-Upskilling" in inhouse teams for preparing candidates according to client requirements.' },
    ],
    achieve = [
        { title: 'Six Sigma Green Belt Certified', img: IMAGES.certified, desp: 'Prepaired a digital soultion for the client to save 1.5 FTE (USD 140400 ~ dollar equivalent)' },
        { title: 'Rising Star of the quarter (2020)', img: IMAGES.employee, desp: 'Delivered a dozen projects in first quarter seamlessly with lowest UAT Bug Rate' },
        { title: 'Client-Feedback Excellence (2021)', img: IMAGES.satisfied, desp: 'Received recognition from clients multiple times for hassle-free project deliveries' },
        { title: 'React Trainer (2021)', img: IMAGES.trainer, desp: 'Given sessions on UI Development with ReactJs and NodeJs to multiple departments personnel' },
        { title: 'Operational Excellence (2021)', img: IMAGES.success, desp: 'Received Award for uplifting Team Projects delivery quality and execution' },
    ];

const workSlice = createSlice({
    name: 'workData',
    initialState: { exp, work, achieve },
    reducers: {

    }
})

export default workSlice.reducer
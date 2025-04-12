import bas1 from "./Bas/DSC_4195.jpg";
import bas2 from "./Bas/DSC_8211.jpg";
import mySelf from "./Myself/Myself.png";
import r2m from "./R2M/picGroup.jpg";
import ta1 from "./TA/DSC07518.jpg";
import ta2 from "./TA/DSC07967.jpg";
import teaching1 from "./teaching_ac11/1E0A0325.jpg";
import teaching2 from "./teaching_ac11/528A9715.jpg";
import teaching3 from "./teaching_ac11/IMG_3001.jpg";
import usa1 from "./USA/haveme.jpg";
import usa2 from "./USA/naveme1.jpg";
import api from "./skills/API-removebg-preview.png";
import bootstrap from "./skills/Bootstrap_logo.svg.png";
import arduino from "./skills/Arduino-removebg-preview.png";
import dart from "./skills/Dart-logo.png";
import flutter from "./skills/flutter-logo-5086DD11C5-seeklogo.com.png";
import go from "./skills/Go-Logo_Blue.png";
import cpp from "./skills/ISO_C++_Logo.svg.png"
import py from "./skills/py-removebg-preview.png";
import sql from "./skills/sql-removebg-preview.png";
import pixWeb from "./projectWorked/frontEnd.jpg"
import logo from "./mountains-7704778_1280.png"
import ig from "./instagram.png"
import linkedin from "./linkedin.png"
import github from "./social.png"
import mail from "./mail.png"
import mySeft2 from "@/assets/Myself/MySeft2.jpg"
import pythonPic from './project/Python.png'
import front from './project/frontend.png'
import arduinoTur from './project/Arduino.jpg'
import robot from './project/robot.jpg'
import backend from './project/backend.jpg'
import drowress from './project/Drowes.jpg'
import webPort from './projectWorked/web-port.png'




export const assets = {
    logo,
    bas1,
    bas2,
    mySelf,
    r2m,
    ta1,
    ta2,
    teaching1,
    teaching2,
    teaching3,
    usa1,
    usa2,
    ig,
    linkedin,
    github,
    mail,
    mySeft2,
}

export const skill = [
    {
        "logo": api,
        "name": "API"
    },
    {
        "logo": bootstrap,
        "name": "Bootstrap"
    },
    {
        "logo": arduino,
        "name": "Arduino"
    },
    {
        "logo": dart,
        "name": "Dart"
    },
    {
        "logo": flutter,
        "name": "Flutter"
    },
    {
        "logo": go,
        "name": "Go"
    },
    {
        "logo": cpp,
        "name": "C++"
    },
    {
        "logo": py,
        "name": "Python"
    },
    {
        "logo": sql,
        "name": "SQL"
    }
]

export const projectType = [
    {
        'title': 'Python',
        'Image': pythonPic,
        'Desc': "There is a basic use of Python and basic API creation. There is a project using Python to model an SME and connect to a database to store data.",
    },
    {
        'title': 'FrontEnd (React,Next,Tailwind)',
        'Image': front,
        'Desc': "You can design web pages using Frame work such as React, Tailwind, Bootstrap. I have created a mockup of an SME web page which has a Routing section to connect different pages together.",
    },
    {
        'title': 'Hardware (Arduino Project, Esp8266)',
        'Image': robot,
        'Desc': "There are Arduino to make software projects to follow lines and cane projects for the elderly, mostly with GPS alerts and other Arduino competitions.",
    },
    {
        'title': 'Backend and Database(Express,Nodejs)',
        'Image': backend,
        'Desc': "I can create API using NodeJs, Express.Js to connect or send data to Frontend and can connect to database. I am studying other methods such as Python Golang.",
    },

]

export const httpWeb = [
    {
        'Title': 'Canva',
        'Website': "https://www.canva.com/design/DAGiRFbEgR0/OtsTpiZR4Bp15azUWYH2kg/view?utm_content=DAGiRFbEgR0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb8a26d1add"
    },
    {
        'Title': 'Github',
        'Website': "https://github.com/Jaosou"
    },
    {
        'Title': 'LinkedIn',
        'Website': "https://www.linkedin.com/in/atichamee/"
    },
    {
        'Title': 'IG',
        'Website': "https://www.instagram.com/jaosoung_.jjjj/"
    },
]


export const projectDetail = [
    {   // Todo : Python
        'Title': 'Driver-Drowsiness-Detection(In Progress)',
        'Image': drowress,
        'Desc': 'The Driver Drowsiness Detection system is an AI-powered solution designed to enhance road safety by identifying signs of driver fatigue in real time. Utilizing computer vision and machine learning, the system analyzes facial features, eye movements, and head position to detect early signs of drowsiness. Upon detection, it triggers alerts such as sound alarms or vibrations to warn the driver, preventing potential accidents. This technology is ideal for long-haul truck drivers, public transportation operators, and personal vehicle users, significantly reducing the risk of fatigue-related crashes.',
        'Time': '2024',
        'Link': 'https://github.com/Jaosou/Eye-detection-project.git',
        'Position': 'Hello',
    },
    {   // Todo : Frontend
        'Title': 'Front End and Framework(React,Next,Tailwind)',
        'Image': front,
        'Desc': 'I learned it myself from YouTube. The Framework used is React Next Tailwind for designing the website page. I called the API from the SERVER side using JSX to call it. I used Motion.js to help with the animation to make it smoother.',
        'Time': '2024',
        'Link': 'https://github.com/Jaosou/Web-Ecom-Front.git',
        'Position': '',
    },
    {   // Todo : Arduino robot
        'Title': 'Arduino Line following robot (Esp8266)',
        'Image': robot,
        'Desc': 'Using the Esp8266 board as a control unit for a line-following robot with a color detection sensor to ensure that the robot can follow the line and not leave it. This project is part of a course I studied at university.',
        'Time': '2024',
        'Link': 'https://github.com/Jaosou/Robot-follow-line.git',
        'Position': '',
    },
    {   // Todo : Backend
        'Title': 'Backend RestFul API(Express.js,Node.js)',
        'Image': backend,
        'Desc': 'There is a workshop on YouTube using React, connecting to a database using Express.js Node.js, the database is connected to Mysql Wokbench, and the database is created using commands from the Prisma library. During the workshop, there is learning and further development or additional functionality. Various access checks are performed using JWT or bcrypt to endcode passwords to prevent theft.',
        'Time': '2025',
        'Link': 'https://github.com/Jaosou/Web-Ecom-api.git',
        'Position': '',
    },
    {   // Todo : GNSS
        'Title': 'GNSS LOW COST',
        'Image': arduinoTur,
        'Desc': 'We participated in the GNSS LOW COST competition. It was our first time competing, and we placed 22nd out of 72 teams. We used a GPS module to receive satellite signals and programmed our robot to move straight towards a specified target in degrees and minutes. A compass module helped the robot rotate to find the correct direction.',
        'Time': '2025',
        'Link': 'https://github.com/Jaosou/GNSS-LOW-COST-ROBOT.git',
        'Position': '',
    },
    {   // Todo : "Web Portfolio"
        'Title': 'Website Portfolio',
        'Image': webPort,
        'Desc': 'This is a website created using only HTML, CSS, and JavaScript, with the Bootstrap library used for styling to enhance its aesthetics. It was my first website project without using any frameworks, showcasing my past work, education, and interests. However, with the emergence of new frameworks, I challenged myself by building the website you are currently viewing using Next.js, which has been a very challenging but rewarding experience.',
        'Time': '2025',
        'Link': 'https://portfolio-aticha.netlify.app/',
        'Position': '',
    },
]
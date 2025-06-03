// images
import img1 from '../../assets/projects/first/1.png';
import img2 from '../../assets/projects/first/2.png';
import img3 from '../../assets/projects/first/3.png';

import prj2_imgPhone from '../../assets/projects/second/android_lg.png';
import prj2_imgTab from '../../assets/projects/second/ipad.png';
import prj2_imgMac from '../../assets/projects/second/macbook.png';

import prj3_imgMac from '../../assets/projects/third/Home page.png';

import prj4_imgMac from '../../assets/projects/fourth/Laptop.png';
import prj4_imgPhone from '../../assets/projects/fourth/Mobile.png';

// tools
import htmlIcon from '../../assets/tools/html5.svg';
import cssIcon from '../../assets/tools/css3.svg';
import bootstrapIcon from '../../assets/tools/bootstrap.svg';
import reactIcon from '../../assets/tools/react.svg';
import JQueryIcon from '../../assets/tools/JQuery.svg';
import jsIcon  from '../../assets/tools/js.svg';
import reduxIcon from '../../assets/tools/redux.svg';
import materialUIIcon from '../../assets/tools/material-ui.svg';
import tailwindIcon from '../../assets/tools/tailwind.svg';
import angularIcon from '../../assets/tools/angular.svg';

const content = [
    {
        imgSrc: {
            laptopSize: img1,
            tabletSize: img2,
            mobileSize: img3
        },
        imgAlt: 'Screenshot of the Helply website',
        liveLink: 'https://helply.ae/',
        codesLink: '',
        designLink: '',
        info: {
            header: 'Helply',
            descriptions: "Helply's goal is to provide users with personalized therapist matches tailored to their preferences and needs. Please note that the codes are not included as I do not have permission to share them. The design was crafted by my former co-worker.",
            tools: [
                {
                    toolName: 'HTML',
                    toolIcon: htmlIcon,
                    iconColor: '#F08959'
                },
                {
                    toolName: 'CSS',
                    toolIcon: cssIcon,
                    iconColor: '#51709F'
                },
                {
                    toolName: 'JS',
                    toolIcon: jsIcon,
                    iconColor: '#EDD858'
                },
                {
                    toolName: 'Boostrap',
                    toolIcon: bootstrapIcon,
                    iconColor: '#a020f0'
                },
                {
                    toolName: 'JQuery',
                    toolIcon: JQueryIcon,
                    iconColor: '#0769ad'
                }
            ]
        },
    },

    {
        imgSrc: {
            laptopSize: prj2_imgMac,
            tabletSize: prj2_imgTab,
            mobileSize: prj2_imgPhone
        },
        imgAlt: 'Screenshot of the BudgetBuddy website',
        // liveLink: 'https://gamar-suleymanova-code.github.io/BudgetBuddy/',
        liveLink: 'https://developmentofstartup.github.io/BudgetBuddy/',
        codesLink: 'https://github.com/gamar-suleymanova-code/BudgetBuddy/',
        designLink: 'https://www.figma.com/design/Rkw9RettRwjPn8qjHCQmWT/BB-UI?t=7ZTlpslCrNuL1xrG-0',
        info: {
            header: 'BudgetBuddy',
            descriptions: "BudgetBuddy is a user-friendly savings app designed to help individuals track their expenses and income. With intuitive features for adding and managing transactions, BudgetBuddy allows users to monitor their daily, weekly, and monthly spending habits. The app includes visual charts to provide insights into financial trends and aids users in achieving their savings goals. The design of the project is completed. Currently, I'm working on the front end development of the project",
            tools: [
                {
                    toolName: 'React',
                    toolIcon: reactIcon,
                    iconColor: '#61DAFB'
                },
                {
                    toolName: 'Boostrap',
                    toolIcon: bootstrapIcon,
                    iconColor: '#a020f0'
                },
                {
                    toolName: 'Redux',
                    toolIcon: reduxIcon,
                    iconColor: '#764ABC'
                }
            ]
        },
    },

    // {
    //     imgSrc: {
    //         laptopSize: prj3_imgMac,
    //         tabletSize: prj3_imgMac,
    //         mobileSize: prj3_imgMac
    //     },
    //     imgAlt: 'Screenshot of the Tapshir website',
    //     designLink: 'https://www.figma.com/design/0TiCAewzzX4bsafv7ozk3s/Freelancer?node-id=0-1&node-type=canvas&t=YQG0UKy5gtoNbYzn-0',
    //     info: {
    //         header: 'Tapshir',
    //         descriptions: "Tapshir is a startup where freelancers can find and apply for temporary jobs from clients or companies in Azerbaijan. I worked only mainly on the frontend development of Profile Setting page which you can access from the menu. The codes weren't going to be provided, but when live link will be ready I will share it right away.",
    //         tools: [
    //             {
    //                 toolName: 'React',
    //                 toolIcon: reactIcon,
    //                 iconColor: '#61DAFB'
    //             },
    //             {
    //                 toolName: 'Material UI',
    //                 toolIcon: materialUIIcon,
    //                 iconColor: '#a020f0'
    //             },
    //             {
    //                 toolName: 'Tailwind CSS',
    //                 toolIcon: tailwindIcon,
    //                 iconColor: '#764ABC'
    //             }
    //         ]
    //     },
    // },

    {
        imgSrc: {
            laptopSize: prj4_imgMac,
            tabletSize: prj4_imgMac,
            mobileSize: prj4_imgPhone
        },
        imgAlt: 'Screenshot of the SualAktiv website',
        designLink: 'https://www.figma.com/design/n46R3oUbB7lHW6sYXgwVBl/SualAktiv?node-id=0-1&p=f&t=lJV2vH1bb9UFTdkD-0',
        codesLink: 'https://github.com/gamar-suleymanova-code/quiz-aktiv',
        info: {
            header: 'SualAktiv',
            descriptions: "A Simple Quiz Generator App which is easy-to-use that allows users to create, customize, and take quizzes.",
            tools: [
                {
                    toolName: 'Angular',
                    toolIcon: angularIcon,
                    iconColor: '#B10027'
                },
                {
                    toolName: 'Material UI',
                    toolIcon: materialUIIcon,
                    iconColor: '#a020f0'
                }
            ]
        },
    },
];

export default content;

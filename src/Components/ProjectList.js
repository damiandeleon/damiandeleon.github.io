import React  from "react";
import projectVP from "../Assets/Images/groupProjectVacationPlanner.png";
import projectDP from '../Assets/Images/dayPlannerApp.png';
import projectPG from "../Assets/Images/passwordGeneratorApp.png";
import projectWD from "../Assets/Images/weatherDashboard.png";
import projectMM from "../Assets/Images/mindManagedApp.png";
import projectFR from "../Assets/Images/frienemies.png";
import Project from "../Components/Project";



const ProjectList = () => {
   
    const projectDetails = [
      {
        id: 1,
        name: "Mind Managed Application",
        img: projectMM,
        techStack:
          "HTML, CSS3, Bootstrsap, HTML, Javascript, MongoDB, Express, Axios, ReactJS, Node.js, openFDA API, Recharts, Auth0",
        gitHubURL: "https://github.com/damiandeleon/project-3-group-8",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://obscure-beyond-60909.herokuapp.com/",
        deployTitle: "Deployed Project",
        description:
          "Mind Managed is a mental health management app.  As a user, the patient will document medications taken, daily moods, and journal anything that they believe is impacting their mood for that day.  The user signs up, signs in, and begins making an entry.  The app uses charts to keep a record of the user’s data as a way to identify mood swing patterns.  This tool can be shared with the mental health provider to aid in counseling and treatment.",
      },
      {
        id: 2,
        name: "Frienemies App",
        img: projectFR,
        techStack:
          "HTML, CSS3, Bootstrap, HTML, Handlebars, Javascript, NPM Packages: Clodinary, MySQL2, sequelize, bcrypt",
        gitHubURL: "https://github.com/damiandeleon/project-2-group-3",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damp-thicket-88352.herokuapp.com/login",
        deployTitle: "Deployed Project",
        description:
          "In a post-COVID world, many people think it’s time for something new!  “Frenemies”, a new take on Social Media interactions!  Connect with new people and make a frienemy out of them!   How does this work?  The user signs up, enters their interests, and the app will present other users who have different interests or “clashes”.  This exposes the user to a world of new ideas, activities, and people.  Once you connect with them, the user can begin their exploration into new horizons and memories.",
      },
      {
        id: 3,
        name: "Vacation Planner Application",
        img: projectVP,
        techStack:
          "HTML, CSS3, Javascript, Bulma, Open Weather API, Zomato API",
        gitHubURL: "https://github.com/damiandeleon/vacation_planner/",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/vacation_planner/",
        deployTitle: "Deployed Project",
        description:
          "A user with no imagination may need help with planning a vacation.  Vacation Planner does that.  The app presents the user with choices of vacation destinations.  Based on what destination is selected, the vacation planner will display the weather in that vacation spot as well as some interesting places to eat.  This is accomplished through API calls.",
      },
      {
        id: 4,
        name: "Day Planner Application",
        img: projectDP,
        techStack:
          "HTML, CSS, HTML, CSS, Javascript, MongoDB, Express, React, Node.js, openFDA API, Recharts, Auth0",
        gitHubURL: "https://github.com/damiandeleon/work-day-scheduler",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/work-day-scheduler/",
        deployTitle: "Deployed Project",
        description:
          "Mind Managed tracks a user's daily mood, prescription use, and journal entry so that the user can keep a detailed record to show their doctor.  The user signs up, signs in, and begins by making a journal entry, and tracking medications.  The app uses charts to keep a record of the user's moods as a way to identify mood swing patters.  This tool can be shared with the mental health provider to aid in counseling and treatment.",
      },
      {
        id: 5,
        name: "Password Generator Application",
        img: projectPG,
        techStack:
          "HTML, CSS, HTML, CSS, Javascript, MongoDB, Express, React, Node.js, openFDA API, Recharts, Auth0",
        gitHubURL: "https://github.com/damiandeleon/Password-Generator",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/Password-Generator/",
        deployTitle: "Deployed Project",
        description:
          "Mind Managed tracks a user's daily mood, prescription use, and journal entry so that the user can keep a detailed record to show their doctor.  The user signs up, signs in, and begins by making a journal entry, and tracking medications.  The app uses charts to keep a record of the user's moods as a way to identify mood swing patters.  This tool can be shared with the mental health provider to aid in counseling and treatment.",
      },
      {
        id: 6,
        name: "Weather Dashboard",
        img: projectWD,
        techStack:
          "HTML, CSS, HTML, CSS, Javascript, MongoDB, Express, React, Node.js, openFDA API, Recharts, Auth0",
        gitHubURL: "https://github.com/damiandeleon/Weather-Dashboard/",
        gitHubTitle: "GitHub Repository",
        deployURL: "https://damiandeleon.github.io/Weather-Dashboard/",
        deployTitle: "Deployed Project",
        description:
          "Mind Managed tracks a user's daily mood, prescription use, and journal entry so that the user can keep a detailed record to show their doctor.  The user signs up, signs in, and begins by making a journal entry, and tracking medications.  The app uses charts to keep a record of the user's moods as a way to identify mood swing patters.  This tool can be shared with the mental health provider to aid in counseling and treatment.",
      },
    ];
    return (
        <Project details={projectDetails} />    
    )

};


export default ProjectList;
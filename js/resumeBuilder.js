var bio = {
  "name": "Marc-Andy Noel Jeune",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(484) 463-7138",
    "email": "marcandy.nj@gmail.com",
    "github": "https://github.com/Marcandy",
    "twitter": "https://twitter.com/MarcandyNJ",
    "location": "Philadelphia, PA"
  },
  "welcomeMessage": "Hi, welcome to my resume. I love building website for people. Take a look " +
  "around at my portfolio and projects. Feel free to contact me, I'd be happy to bring your ideas " +
  "to life.",
  "skills": ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Wordpress"],
  "biopic": "images/biopic.png",
  "display": function () {
    //Name
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);
      //Contacts
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile,
      formattedEmail, formattedGithub, formattedLocation, formattedTwitter);
      //Bio
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBioPic);
    //skills
    var skills = bio.skills;
    if (skills.length > 0 ) {
    $( "#header" ).append( HTMLskillsStart );

    for (var i = 0; i < skills.length; i ++ ) {
      var formattedSkill = HTMLskills.replace("%data%", skills[i]);
      $("#skills").append(formattedSkill);
     }
   }
 }
};
bio.display();



var work = {
  "jobs": [{
      "employer": "Self-Employed",
      "title": "Freelance Web Developer",
      "location": "Philadelphia, PA",
      "dates": "01/2015 - Present",
      "description": "I worked with indiduals and businesses to develop their web platform " +
      "with technologies like CSS, JavaScript, and Wordpress content management system." +
      " I have helped various non-profit organizations, " +
      "such as PSCA and CBMPhila, build their websites and promote their activities."
    },
    {
      "employer": "Radioshack",
      "title": "Sales Associate",
      "location": "Philadelphia, PA",
      "dates": "11/2014 - 07/2015",
      "description": "I explained to customers the benefits and uses of products and help them with" +
      " their purchases. I troubleshoots and solve mobile-phones," +
      " computers and electronics related problems."
    }],

  "display": function () {
    var jobs = work.jobs;
    for (var i = 0; i < jobs.length; i++) {
        //Jobs
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[i].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", jobs[i].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
};

work.display();

var projects = {
  "projects": [{
      "title": "Portfolio",
      "dates": "2016",
      "description": "I developed a responsive website which features some of my freelance work " +
      "and projects. I use technologies like flexbob, Bootstrap, CSS media queries" ,
      "images": ["images/portfolio.png"]
    },
    {
      "title": "Animal Trading Card",
      "dates": "2016",
      "description": "I build a functional webpage with a card-like design of an animal using HTML "+
      "and CSS style",
      "images": ["images/animalcard.png"]
    },
     {
      "title": "Mockup Article",
      "dates": "2016",
      "description": "I converted a mockup of a blog article into a real website with HTML",
      "images": ["images/mockup.png"]
    }],

  "display": function () {
    var projectList = projects.projects;
    for (var i = 0; i < projectList.length; i++) {
        //Projects
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projectList[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projectList[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projectList[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projectList[i].images.length > 0) {
            for (var image = 0; image < projectList[i].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projectList[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
  }
};
projects.display();

var education = {
  "schools": [{
      "name": "Inian River State College",
      "location": "Fort Pierce, FL",
      "degree": "Dual Enrollment",
      "majors": ["General Studies"],
      "dates": "2010",
      "url": "http://www.irsc.edu/"
    }],

  "onlineCourses": [{
      "title": "Front-End Nanodegree",
      "school": "Udacity",
      "dates": "2016,",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "HTML & CSS, JavaScript",
      "school": "Codecademy",
      "dates": "2015",
      "url": "www.codecademy.com/"
    }],

  "display": function () {
    var schoolList = education.schools;
    for (var i = 0; i < schoolList.length; i++) {
    // School section
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", schoolList[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schoolList[i].degree);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", schoolList[i].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schoolList[i].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolList[i].majors);
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  // Online classes
  $("#education").append(HTMLonlineClasses);
  var courses = education.onlineCourses;

  for ( i = 0; i < courses.length; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[i].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[i].school);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", courses[i].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", courses[i].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
 }
};
education.display();

//Map
$("#mapDiv").append(googleMap);

import React from 'react';
import profilePicture from "../../../static/assets/images/bio/profilePicture.jpg";

export default function () {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} 
            />
            <div className="right-column">
                Profile<br />
                A Software Developer who seeks to do all things to the best of my ability. I love learning. Have taught six different classes, getting teaching certifications in History, Professional Communications, and Technology Applications. Have also run and directed live sports video feeds and advertising on a stadium video board. As a lifetime learner my priority is to constantly grow. <br />
                Relevant Skills<br />
                ●	Soft Skills: Spent over 10 years teaching high school. Have been in charge of not only work crews and whole classrooms and have even led professional development classes. Have been characterized as a Renaissance Man as I am constantly developing. Software development is the latest chapter in my growth and I am thoroughly enjoying it.<br />
                ●	Technical Skills: Javascript, ReactJS, Python 3, UML, HTML5, CSS, Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS Grid, Adobe Premiere.<br />
                Projects<br />
                ●	Fantastic Fries: A multi-page, responsive restaurant website that utilizes HTML5, CSS3, Flexbox, CSS Grid, Animations, media queries, custom forms, responsive images, and a range of front end development techniques.<br />
                https://jdh-bottega-react-portfolio.herokuapp.com/<br />
                Work Experience<br />
                ●	Alvarado ISD, AV Tech and Professional Communications Teacher<br />			August 2012 – June 2021<br />
                Taught six different classes and ran a video production program that produced a weekly episode. Also given many hats to wear as listed above. Developed a familial rapport with the faculty and staff, empowering learners and facilitating learning. <br />
                ●	Jesse’s Paint the Town, Lead Manager<br />							May 2007 – August 2011<br />
                Worked full time in the summers for a paint contractor. Duties included: Overseeing the employees we had working in numerous buildings, meeting with building managers to create weekly and monthly objectives, managing our employees so that the projects were accomplished in a professional, excellent, and timely fashion, taking care of payroll, keeping track of, ordering, and retrieving supplies, and generally anything else to make my boss’s life as stress free as possible.<br /> 
                Education<br />
                ●	Masters in Divinity, Southwestern Baptist Theological Seminary<br />					Dec. 2011<br />
                Not a typical Masters degree as I had to complete over 90 hours for a Masters in Divinity. <br />
                ●	Bachelor of Arts in Political Science, Florida Gulf Coast University<br />					April 2006<br />
                Graduated Cum Laude<br />
                Activities<br />
                ●	Leader of the youth program and Liberty Community Church in Port Charlotte, Florida
                ●	Volunteered for Habitat for Humanity
                ●	Volunteered at Beautiful Feet Ministries 
                ●	Volunteered a Mission Arlington<br />
                Hobbies<br />
                ●	Jogging regularly
                ●	Fishing
                ●	Kayaking
                ●	Keeping aquarium fish and making instructional videos of them on my YouTube channel

            </div>
        </div>
    )
}
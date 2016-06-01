var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var About = React.createClass({
  render:function(){

    return(<div className="mainInfo">
                    <div className="row imagerow">
                        <h1>Background</h1>
                        <div className="col-md-2 col-xs-12 image">
                          <img src="images/Jake.jpg"/>
                        </div>
                        <div className="col-md-10 col-xs-12">
                          <p>In May of 2010, I graduated from Clemson University with a degree in Industrial Engineering. For the next six years, I worked in the manufacturing setting with my degree. I quickly became the go-to guy for all new technologies. I was frequently tasked with learning, mastering, and teaching these technologies in a short period.</p>
                          <p>While I also excelled in the Engineering tasks of my jobs, I found my successes from these technologies to be more satisfying. I enjoyed my classes in programming at my stay in Clemson, so I began learning Javascript in my spare time. I continued my self-education for about a year and, after my contract ended with my previous employer, I decided to make a change. I registered for The Iron Yard and began going deeper into front-end development.</p>
                          <p>The greatest asset I can provide is my ability to master new things quickly and thoroughly seasoned through my years at Clemson University and my years in the Engineering field. Programming is constantly changing, and I am prepared and excited for whatever new challenges await.</p>
                        </div>
                    </div>

                    <div className="education">
                      <h1>Education and Skills</h1>
                      <div className="col-md-6 col-xs-12">
                        <h1><img src="images/Clemson.jpeg"  /><a href="http://www.clemson.edu/">Clemson University</a></h1>
                        <p>I graduated from Clemson University in May of 2010 in the field of Industrial Engineering. I gained many technical skills with the software languages involved in Visual Basic, Excel, and Access.</p>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <h1><img src="images/IronYard.svg"  /><a href="https://www.theironyard.com/">The Iron Yard</a></h1>
                        <p>I graduated from The Iron Yard in Greenville, SC in April of 2016. The Iron Yard is a 12-week programming bootcamp that taught Front-End programming languages including HTML, CSS, Javascript, JQuery, React, and Backbone.</p>
                      </div>
                    </div>




                      <div className="skills">
                        <div className="row topskill">
                          <img id="html" src="images/HTML5_Logo.png"/>
                            <img src="images/CSS-logo.svg"/>
                              <img src="images/js-Logo.jpg"/>

                        </div>
                        <div className="row middleskill">
                            <span id="jquery"><a href="https://jquery.com/"><img src="images/jquery-logo.png"/></a></span>
                              <span id="bootstrap"><a href="http://getbootstrap.com/"><img src="images/bootstrap-logo.jpg"/></a></span>
                              <span id="handlebars"><a href="http://handlebarsjs.com/"><img src="images/handlebars-logo.png"/></a></span>
                        </div>
                        <div className="row lowerskill">
                          <span id="react"><a href="http://reactjs.net/"><img src="images/react-logo.png"/></a></span>
                            <span id="backbone"><a href="http://backbonejs.org/"><img src="images/backbone.gif"/></a></span>
                            <span id="parse"><a href="https://github.com/ParsePlatform"><img src="images/Parse-Logo.png"/></a></span>
                        </div>
                      </div>
      </div>)
  },
})

var Projects = React.createClass({
  getInitialState:function(){
      return {
        "pic1":"images/battery.png",
        "pic2":"images/wire.png",
        "pic3":"images/wire.png",
        "pic4":"images/bomb.png",
      }
    },
  render:function(){

    return(
      <div className="col-xs-12">

        <div className="row gaminglocal project">
            <h1>Gaming Local</h1>
                    <div className="col-md-4 sideimage"><a href="http://www.gaminglocal.com/"><img src = "images/gaminglocal.png"/></a></div>
                    <div className="col-md-4">

                      <p>Gaminglocal is a website to allow players of the collectible card game <i>Magic: The Gathering</i> one location is see all MTG related events, specials, and card sales. Store Owners that run tournaments for Magic: The Gathering can register their store and enter information for players to access.</p>
                      <p>Gaminglocal is my final project for The Iron Yard. I created it in under two weeks, and used HTML, CSS, Javascript, JQuery, React, and Backbone. It uses the open source version of Parse in combination with heroku.com for the information storage.</p>
                      <p>This is a highly desired tool for the Magic community. It only took one day after I announced it for the first store to register and start using it as a resource.</p>
                      <p className="playButton"><a href="http://www.gaminglocal.com/"><button className="btn btn-primary">View Here</button></a></p>
                      <p className="playButton"><a href="https://github.com/jakemurphys1/Final-project"><button className="btn btn-primary">View Code</button></a></p>
                    </div>
                    <div className="col-md-4 techs">
                      <h1>Technologies Used</h1>
                      <div className="col-md-6">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>SCSS</p>
                        <p>Bootstrap</p>
                        <p>Javascript</p>
                      </div>
                      <div className="col-md-6">
                        <p>Jquery</p>
                        <p>React</p>
                        <p>Backbone</p>
                        <p>Parse</p>
                      </div>
                    </div>

        </div>

        <div className="row batchmaker project">
            <h1>Gnome and Gorilla Gaming</h1>
            <div className="col-md-4 sideimage"><a href="http://jakemurphys1.github.io/gnomes/dist/index.html"><img src = "images/gnomes.png"/></a></div>
            <div className="col-md-4">

          <p>Gnome and Gorilla Gaming is a store that holds Magic the Gathering Events. This website draws information such as events and contact information from their account on gaminglocal.com, and provides it to this personal website.</p>
          <p>This project was completed over the course of a week. It uses the same server from heroku.com that houses the gaminglocal.com information, and thus may have slower response time.</p>
          <p>This project was made using HTML, CSS, Javascript, JQuery, React and Backbone. It uses the open source version of Parse for the storage.</p>
          <p className="playButton"><a href="http://jakemurphys1.github.io/gnomes/dist/index.html"><button className="btn btn-primary">View Here</button></a></p>
          <p className="playButton"><a href="https://github.com/jakemurphys1/gnomes/tree/gh-pages"><button className="btn btn-primary">View Code</button></a></p>
          </div>
          <div className="col-md-4 techs">
            <h1>Technologies Used</h1>
              <div className="col-md-6">
                <p>HTML</p>
                <p>CSS</p>
                <p>SCSS</p>
                <p>Bootstrap</p>
                <p>Javascript</p>
              </div>
              <div className="col-md-6">
                <p>Jquery</p>
                <p>React</p>
                <p>Backbone</p>
                <p>Parse</p>
              </div>
          </div>
        </div>

        <div className="row majesticthai project">
                  <h1>Majestic Thai</h1>
            <div className="col-md-4 sideimage"><a href="http://jakemurphys1.github.io/7.4-majestic-thai/dist/index.html"><img src = "images/majesticthai.png"/></a></div>
            <div className="col-md-4">

          <p>The Majestic Thai project is a website that allows users to build orders of thai food, and then submit the order.</p>
          <p>This project was completed over the course of a weekend. It uses a free server from heroku.com, and thus may have slower response time.</p>
          <p>This project was made using HTML, CSS, Javascript, JQuery, and Backbone collections. It uses the Backbone built-in collection feature to upload information to heroku.com.</p>
          <p className="playButton"><a href="http://jakemurphys1.github.io/7.4-majestic-thai/dist/index.html"><button className="btn btn-primary">View Here</button></a></p>
          <p className="playButton"><a href="https://github.com/jakemurphys1/7.4-majestic-thai"><button className="btn btn-primary">View Code</button></a></p>
          </div>
          <div className="col-md-4 techs">
            <h1>Technologies Used</h1>
            <div className="col-md-6">
              <p>HTML</p>
              <p>CSS</p>
              <p>SCSS</p>
              <p>Bootstrap</p>
            </div>
            <div className="col-md-6">
                <p>Javascript</p>
              <p>Jquery</p>
              <p>Backbone</p>
            </div>
          </div>
        </div>



        <div className="row games project">
          <div className="col-md-6">
            <h1>Wires</h1>
              <div className="row wires">
                <div className="wirepics">
                  <img src={this.state.pic1} />
                  <img src={this.state.pic2} />
                  <img src={this.state.pic3} />
                  <img src={this.state.pic4} />
                </div>
              </div>
          <p>Prior to enlisting in The Iron Yard program, I spent monthes learning web languages in my free time. As a project, I decided to create some games.</p>
          <p>Wires is a casual game similar to games like Tetris. Tiles will be passed to you, and you must quickly decided which column to send them. Tiles will either be wires, bombs, or batteries. Connect the batteries to the bombs the remove the tiles, and get points. Can you get 10,000 points?</p>
          <p>Wires represents about three weeks of work, either after work or during the weekend.  It was made using only HTML, CSS, Javascript, and JQuery.</p>
          <p className="playButton"><a href="Wires/Wires_intro.html"><button className="btn btn-primary">Play Here</button></a></p>
          </div>

          <div className="col-md-6">
            <div>
              <h1>Incoming</h1>
              <div className="row sprites">
                <div className="incomingpics">
                  <img src="images/Wizard.gif" />
                  <img src="images/Soldier.gif" />
                  <img src="images/Archer.gif" />
                </div>

              </div>
              <p>Incoming is a turn-based strategy game, using elements from X-Com, fire emblem, and other such games. Defend your capitol from legions of enemies using 12 unique soldiers. Each soldiers can grow up to level 7, and learn new abilities along the way. Use their strength against the enemies weaknesses or soon you will be overwhelmed.</p>
              <p>Incoming is by far the largest game I have ever created and consists of about ten monthes of work. When developing this game, I learned essential concepts like styling, animation, and contructors. This knowledge was invaluable when I began my education. It was made using only HTML, CSS, Javascript, and JQuery.</p>
              <p className="playButton"><a href="War/war_home.html"><button className="btn btn-primary">Play Here</button></a></p>
              </div>
          </div>

          </div>

      </div>)
  },
})

var Contact = React.createClass({
  render:function(){

    return(<div className="row contact">
    <div className="col-md-4 col-sm-12 headshot">
      <img src="images/Headshot.jpg"/>
    </div>
            <div className="col-md-4 col-sm-6 ContactInfo">
              <h1>Contact Information</h1>
              <div className="row">
                  <h2>864-331-9694</h2>
                  <h2>jakemurphys1@gmail.com</h2>
                  <h2><a href="https://www.linkedin.com/in/jacob-murphy-76793183?trk=hp-identity-name"><img className="linkedin" src="images/Linkedin.png"/> Profile</a></h2>
                  <h2><img className="github" src="images/github.png"/><a href="https://github.com/jakemurphys1">Github Repositories</a></h2>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 resumeContainer">
                <h1>Resume</h1>
                  <object data="resume.pdf" type="application/pdf">
                    <embed src="resume.pdf" type="application/pdf" />
                  </object>
                <p><a href="resume.pdf"><button className="btn btn-primary">View</button></a></p>
            </div>

          </div>)
  },
})

module.exports={
  "About":About,
  "Projects":Projects,
  "Contact":Contact,
};

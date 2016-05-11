var Backbone=require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM=require("react-dom");
var Input = require("react-bootstrap/lib/Input");
var ButtonInput= require("react-bootstrap/lib/ButtonInput")
//local
var MainForm=require("./components/main.jsx")
var AboutForm=MainForm.About;
var ProjectsForm=MainForm.Projects;
var GamesForm=MainForm.Games;

var BackgroundForm=require("./components/background.jsx")
var EducationForm=require("./components/education.jsx")
var SkillsForm=require("./components/skills.jsx")
var ContactForm=require("./components/contact.jsx")
var ResumeForm=require("./components/resume.jsx")

var GaminglocalForm=require("./components/gaminglocal.jsx")
var MajesticthaiForm=require("./components/majesticthai.jsx")
var BatchMakerForm=require("./components/batchmaker.jsx")

var IncomingForm=require("./components/incoming.jsx")
var WiresForm=require("./components/wires.jsx")
var ChachingForm=require("./components/chaching.jsx")

var picCount=0;
setInterval(function(){
  switch(picCount){
    case 0:
    //$("#img1").removeClass("hidden")
    $("#img1").animate({
      opacity:1,
    })
      picCount+=1;
    break;
    case 1:
$("#img2").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 2:
$("#img3").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 3:
$("#img4").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 4:
$("#img5").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 5:
$("#img6").removeClass("hidden")
$("#img6").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 6:
$("#img7").removeClass("hidden")
$("#img7").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 7:
$("#img8").removeClass("hidden")
$("#img8").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 8:
$("#img9").removeClass("hidden")
$("#img9").animate({
  opacity:1,
})
      picCount+=1;
    break;
    case 9:
$("#img10").removeClass("hidden")
$("#img10").animate({
  opacity:1,
})
      picCount+=1;
    break;
  }
},400)





var homeContainer= document.getElementById("submain")
var detailContainer= document.getElementById("details")

var Router = Backbone.Router.extend({
  routes:{
    "":"about",
    "about":"about",
    "projects":"projects",
    "games":"games",
    "background":"background",
    "education":"education",
    "skills":"skills",
    "contact":"contact",
    "resume":"resume",
    "incoming":"incoming",
    "wires":"wires",
    "chaching":"chaching",
    "gaminglocal":"gaminglocal",
    "majesticthai":"majesticthai",
    "batchmaker":"batchmaker",
  },
  about:function(){
    ReactDOM.unmountComponentAtNode(homeContainer);
      ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<AboutForm router={this}/>,homeContainer)
  },
  projects:function(){
    ReactDOM.unmountComponentAtNode(homeContainer);
      ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<ProjectsForm router={this}/>,homeContainer)
  },
  games:function(){
    ReactDOM.unmountComponentAtNode(homeContainer);
      ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<GamesForm router={this}/>,homeContainer)
  },
  background:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<BackgroundForm router={this}/>,detailContainer)
  },
  education:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<EducationForm router={this}/>,detailContainer)
  },
  skills:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<SkillsForm router={this}/>,detailContainer)
  },
  contact:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<ContactForm router={this}/>,detailContainer)
  },
  resume:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<ResumeForm router={this}/>,detailContainer)
  },
  incoming:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<IncomingForm router={this}/>,detailContainer)
  },
  wires:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<WiresForm router={this}/>,detailContainer)
  },
  chaching:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<ChachingForm router={this}/>,detailContainer)
  },
  gaminglocal:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<GaminglocalForm router={this}/>,detailContainer)
  },
  majesticthai:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<MajesticthaiForm router={this}/>,detailContainer)
  },
  batchmaker:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<BatchMakerForm router={this}/>,detailContainer)
  },
})


var router = new Router();
Backbone.history.start();

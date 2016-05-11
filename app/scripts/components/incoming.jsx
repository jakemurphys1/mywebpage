var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var Incoming = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(<div>
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
      </div>)
  },
})


module.exports=Incoming

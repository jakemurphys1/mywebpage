var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var Background = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(<div>
      <h1>Contact Information</h1>
        <div className="row">
            <h2>864-331-9694</h2>
            <h2>jakemurphys1@gmail.com</h2>
            <h2><a href="https://www.linkedin.com/in/jacob-murphy-76793183?trk=hp-identity-name"><img className="linkedin" src="images/Linkedin.png"/> Profile</a></h2>
            <h2><img className="github" src="images/github.png"/><a href="https://github.com/jakemurphys1">Github Repositories</a></h2>
        </div>
      </div>)
  },
})


module.exports=Background

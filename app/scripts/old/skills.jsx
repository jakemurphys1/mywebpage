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

    return(<div className="skills">
      <h1>Skills</h1>
      <div className="col-md-4">
        <p className="topskill"><img src="images/HTML5_Logo.png"/></p>
        <p id="backbone"><a href="http://backbonejs.org/"><img src="images/backbone.gif"/></a></p>
          <p id="parse"><a href="https://github.com/ParsePlatform"><img src="images/Parse-Logo.png"/></a></p>
        </div>
        <div className="col-md-4">
              <p className="topskill"><img src="images/CSS-logo.svg"/></p>
              <p id="bootstrap"><a href="http://getbootstrap.com/"><img src="images/bootstrap-logo.jpg"/></a></p>
              <p id="handlebars"><a href="http://handlebarsjs.com/"><img src="images/handlebars-logo.png"/></a></p>
        </div>
        <div className="col-md-4">
          <p className="topskill"><img src="images/js-Logo.jpg"/></p>
        <p id="jquery"><a href="https://jquery.com/"><img src="images/jquery-logo.png"/></a></p>
          <p id="react"><a href="http://reactjs.net/"><img src="images/react-logo.png"/></a></p>
        </div>

      </div>)
  },
})


module.exports=Background

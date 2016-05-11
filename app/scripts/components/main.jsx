var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var About = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(
      <div className="col-xs-12">
        <div className="list-inline nav nav-tabs">
          <li><a href="#background">Background</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </div>
      </div>)
  },
})

var Projects = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(
      <div className="col-xs-12">
        <div className="list-inline nav nav-tabs">
          <li><a href="#gaminglocal">GamingLocal.com</a></li>
          <li><a href="#majesticthai">Majestic Thai</a></li>
          <li><a href="#batchmaker">BatchMaker</a></li>
        </div>
      </div>)
  },
})

var Games = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(
      <div className="col-xs-12">
        <div className="list-inline nav nav-tabs">
                <li><a href="#wires">Wires</a></li>
          <li><a href="#incoming">Incoming</a></li>
          <li><a href="#chaching">Cha-Ching</a></li>
        </div>
      </div>)
  },
})

module.exports={
  "About":About,
  "Projects":Projects,
  "Games":Games,
};

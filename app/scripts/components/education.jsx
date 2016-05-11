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

    return(<div className="education">
      <h1>Education</h1>
      <div className="col-md-6 col-xs-12">
        <h1><img src="images/Clemson.jpeg"  /><a href="http://www.clemson.edu/">Clemson University</a></h1>

        <p>I graduated from Clemson University in May of 2010 with a 3.14 GPA in the field of Industrial Engineering. I gained many technical skills with the software languages involved in Visual Basic, Excel, and Access.</p>
      </div>
      <div className="col-md-6 col-xs-12">
        <h2><img src="images/IronYard.svg"  /><a href="https://www.theironyard.com/">The Iron Yard</a></h2>
        <p>I graduated from The Iron Yard in Greenville, SC in April of 2016. The Iron Yard is a 12-week programming bootcamp that taught Front-End programming languages including HTML, CSS, Javascript, JQuery, React, and Backbone.</p>
      </div>
      </div>)
  },
})


module.exports=Background

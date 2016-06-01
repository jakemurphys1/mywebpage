var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var Resume = React.createClass({
  render:function(){

    return(<div className="resumeContainer">
      <h1>Resume</h1>
        <object data="resume.pdf" type="application/pdf">
      <embed src="resume.pdf" type="application/pdf" />
  </object>
      <p><a href="resume.pdf"><button className="btn btn-primary">View</button></a></p>
      </div>)
  },
})


module.exports=Resume

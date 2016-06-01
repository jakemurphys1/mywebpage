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

        <div className="col-md-4 sideimage"><a href="http://jakemurphys1.github.io/7.4-majestic-thai/dist/index.html"><img src = "images/majesticthai.png"/></a></div>
        <div className="col-md-4">
                <h1>Majestic Thai</h1>
      <p>The Majestic Thai project is a website that allows users to build orders of thai food, and then submit the order.</p>
      <p>This project was completed over the course of a weekend. It uses a free server from heroku.com, and thus may have slower response time.</p>
      <p>This project was made using HTML, CSS, Javascript, JQuery, and Backbone collections. It uses the Backbone built-in collection feature to upload information to heroku.com.</p>
      <p className="playButton"><a href="http://jakemurphys1.github.io/7.4-majestic-thai/dist/index.html"><button className="btn btn-primary">View Here</button></a></p>
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
    </div>)
  },
})


module.exports=Incoming

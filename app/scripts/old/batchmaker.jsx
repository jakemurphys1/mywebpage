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

        <div className="col-md-4 sideimage"><a href="http://jakemurphys1.github.io/8.4-donuts/dist/index.html"><img src = "images/batchmaker.png"/></a></div>
        <div className="col-md-4">
            <h1>BatchMaker</h1>
      <p>The BatchMaker project is a website that allows users to create recipes, and save them to a server to access later.</p>
      <p>This project was completed over the course of a weekend. It uses a free server from heroku.com, and thus may have slower response time.</p>
      <p>This project was made using HTML, CSS, Javascript, JQuery, React and Backbone. It uses the open source version of Parse for the storage.</p>
      <p className="playButton"><a href="http://jakemurphys1.github.io/8.4-donuts/dist/index.html"><button className="btn btn-primary">View Here</button></a></p>
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

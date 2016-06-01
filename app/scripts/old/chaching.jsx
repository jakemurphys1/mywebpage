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
      <h1>Cha-Ching</h1>
      <p>Cha-Ching is a casual game designed to be similar to the popular game 2048.</p>
      <p>Use the arrow keys to shift all the tiles left, right, top, or down. The tiles will contain some form or currency, and if two identical tiles run into one another, they will combine to for a higher currency. Can you reach the 100 dollar bill?</p>
      <p>Cha-Ching is the oldest game I have listed. It consisted of about a month of work. It was made using only HTML, CSS, Javascript, and JQuery.</p>
        <p className="playButton"><a href="puzzle/2048_home.html"><button className="btn btn-primary">Play Here</button></a></p>
      </div>)
  },
})


module.exports=Incoming

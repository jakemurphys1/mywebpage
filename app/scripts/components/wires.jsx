var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var Incoming = React.createClass({
  componentDidMount(){
    var checkpoint=0;
    var self=this;
setInterval(function(){
  switch(checkpoint){
    case 0:
    self.setState({"pic1":"images/battery.png","pic2":"images/wire.png","pic3":"images/wire.png","pic4":"images/bomb.png"})
      checkpoint+=1
    break;
    case 1:
    self.setState({"pic1":"images/battery.png","pic2":"images/wire-L.png","pic3":"images/wire.png","pic4":"images/bomb.png"})
      checkpoint+=1
    break;
    case 2:
    self.setState({"pic1":"images/battery.png","pic2":"images/wire-L.png","pic3":"images/wire-L.png","pic4":"images/bomb.png"})
    checkpoint+=1
    break;
    case 3:
    self.setState({"pic1":"images/bangpic.png","pic2":"images/bangpic.png","pic3":"images/bangpic.png","pic4":"images/bangpic.png"})
    checkpoint=0
    break;
  }
},500)
  },
  getInitialState:function(){
      return {
        "pic1":"images/battery.png",
        "pic2":"images/wire.png",
        "pic3":"images/wire.png",
        "pic4":"images/bomb.png"
      }
    },

  render:function(){

    return(<div>
        <h1>Wires</h1>
          <div className="row wires">
            <div className="wirepics">
              <img src={this.state.pic1} />
              <img src={this.state.pic2} />
              <img src={this.state.pic3} />
              <img src={this.state.pic4} />
            </div>
          </div>
      <p>Prior to enlisting in The Iron Yard program, I spent monthes learning web languages in my free time. As a project, I decided to create some games.</p>
      <p>Wires is a casual game similar to games like Tetris. Tiles will be passed to you, and you must quickly decided which column to send them. Tiles will either be wires, bombs, or batteries. Connect the batteries to the bombs the remove the tiles, and get points. Can you get 10,000 points?</p>
      <p>Wires represents about three weeks of work, either after work or during the weekend.  It was made using only HTML, CSS, Javascript, and JQuery.</p>
      <p className="playButton"><a href="Wires/Wires_intro.html"><button className="btn btn-primary">Play Here</button></a></p>
      </div>)
  },
})


module.exports=Incoming

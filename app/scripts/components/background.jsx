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

    return(<div className="row imagerow">
        <h1>Background</h1>
    <div className="col-md-2 col-xs-12 image">
      <img src="images/Jake.jpg"/>
    </div>
    <div className="col-md-10 col-xs-12">
      <p>In May of 2010, I graduated from Clemson University with a degree in Industrial Engineering. For the next six years, I worked in the manufacturing setting with my degree. I quickly became the go-to guy for all new technologies. Whether it was databases like Oracle or SAP, software like Access, or macros with Visual basic, I was tasked with learning, mastering, and teaching in a short period.</p>
      <p>While I also excelled in the IE tasks of my jobs, I found my successes from these technologies to be more satisfying. I enjoyed my classes in programming at my stay in Clemson, so I began learning Javascript in my spare time. I continued my self-education for about a year and, after my contract ended with my previous employer, I decided to make a change. I registered for The Iron Yard and began going deeper into front-end development.</p>
      <p>I recognize that I may not have the direct experience others may have concerning front-end development. But what I can provide is my ability to master new things quickly and thoroughly seasoned through my years at Clemson University and my years in the Engineering field. Programming is constantly changing, and I am prepared for whatever new challenges await.</p>
    </div>


      </div>)
  },
})


module.exports=Background

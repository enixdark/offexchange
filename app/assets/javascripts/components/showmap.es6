
const ShowMap = React.createClass({
  render(){
    return (
      <div >
        <input id="pac-input" class="controls" type="text" placeholder="Enter a location" style={{"z-index": 0, position: "absolute", left: "116px", top: "14px"}}/>
        <div id="map" style={{width: "100%", height: "300px"}}></div>
      </div>
    )
  }
})

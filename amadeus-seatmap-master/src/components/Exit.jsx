const Exit = (props) => {

  const styleLeft = {
    position: "absolute",
    left: "-4.1em", 
    top: `${props.row*2}em`,
    backgroundColor: "#499167",
    
  }

  const styleRight = {
    position: "absolute",
    left: "13.5em", 
    top: `${props.row*2}em`,
    backgroundColor: "#499167"
  }
  return <div className="exit" >
    <span style={styleLeft}>EXIT</span>
    <span style={styleRight}>EXIT</span>
  </div>
  }
  
  export default Exit;
const Wing = (props) => {
  const leftVal = props.orientation === 'left' ?  "-252px" : "15.5em"
  const style = {
    backgroundColor: "#99B2DD",
    width: "250px",
    height: `${(props.end-props.start)*2}em`,
    position:"absolute",
    top:`${props.start*2}em`,
    left: leftVal
  }
  return <div className="wing" style={style}>
  </div>
  }
  
  export default Wing;
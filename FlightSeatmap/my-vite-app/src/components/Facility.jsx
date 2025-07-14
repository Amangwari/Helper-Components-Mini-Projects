const Facility = (props) => {
  const left = `${props.y*2}em `;
  const top = `${props.x*2}em`;

  return (
    <div className = 'facility' style={{position: "absolute", left:left, top:top, backgroundColor:"#F5EE9E"}}>
<p>{props.code}</p>
    </div>
  )
}

export default Facility;
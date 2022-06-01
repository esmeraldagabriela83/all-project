import React from 'react';

const styleLogo={
  letterSpacing:"0.3em",
  fontWeight:"bold"
}


function Logo(){
  return(
    <div>
    <span style={styleLogo}>Health</span><br></br><p style={{letterSpacing:"0.25em"}}>Project</p>
    </div>
  )
}
export default Logo;

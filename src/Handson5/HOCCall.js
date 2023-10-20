import React from 'react'
// import ParentHOC from './ParentHOC'

function HOCCall(props) {
    console.log(props)
  return (
    <>
        <h1 style={{backgroundColor: "red"}}>{<props.value/>}</h1>
        {/* <h1>{<props.value/>}</h1> */}
        {/* <ParentHOC/> */}
    </>
  )
}
export default HOCCall;

function HOCCallBlue(props){
    return(
        <>
          <h1 style={{backgroundColor: "blue"}}>{<props.value/>}</h1>
        </>
    )
}
export {HOCCallBlue};

function HOCCallOrange(props){
  return(
      <>
          <h1 style={{backgroundColor: "orange"}}>{<props.value/>}</h1>
      </>
  )
}

export {HOCCallOrange};
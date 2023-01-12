import React from 'react'

const Goback = () => {

    function backButton() {
        window.history.back(-1);
      } 
  return (
    <>
        <button onClick={{backButton}}>Go Back</button>
    </>
  )
}

export default Goback
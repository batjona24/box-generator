import React from 'react'

const Ninja = (props) => {
    const { ninjaBoxArray } = props;
  return (
    <div>
      {
        ninjaBoxArray.map((box, index) => (
          <div key={index} style={{ 
              display: "inline-block",
              margin: "10px",
              height: box.size, 
              width: box.size, 
              backgroundColor: box.color
              }}>
          </div>
        ))
      }
    </div>
  )
}

export default Ninja

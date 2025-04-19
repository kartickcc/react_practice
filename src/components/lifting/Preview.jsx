import React from 'react'

const Preview = React.memo(({input}) => {
  return (
    <div>Preview : {input}</div>
  )
})

export default Preview
import * as React from 'react'

function SvgCross(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 1.414L16.586 0 9 7.586 1.414 0 0 1.414 7.586 9 0 16.586 1.414 18 9 10.414 16.586 18 18 16.586 10.414 9 18 1.414z" />
    </svg>
  )
}

export default SvgCross

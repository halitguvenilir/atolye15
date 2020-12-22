import * as React from 'react'

function SvgFree(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={1} y={1} width={40} height={40} rx={20} />
      <rect x={10} y={10} width={22} height={22} rx={11} />
    </svg>
  )
}

export default SvgFree

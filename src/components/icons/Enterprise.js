import * as React from 'react'

function SvgEnterprise(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.813 11.077L21 1.155l17.187 9.922v19.846L21 40.845 3.813 30.923V11.077z"
        stroke="#fff"
        strokeWidth={2}
      />
      <circle cx={21} cy={21} r={8} stroke="#fff" strokeWidth={2} />
    </svg>
  )
}

export default SvgEnterprise

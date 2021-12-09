import Code from '../Code/Code'
import React from 'react'

const CodeArea = React.forwardRef((props: {
  code: string;
  language: string;
  theme: string;
}, ref) => {
  return (
    <div className="CodeArea" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className="header">
        <span className="menu menu-close"></span>
        <span className="menu menu-minimize"></span>
        <span className="menu menu-boost"></span>
        </div>      
      <Code language={props.language}  code={props.code} theme="dracula" />
    </div>
  )
})

export default CodeArea
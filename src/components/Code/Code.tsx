import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/go/go'
// import 'codemirror/mode/clike/clike'
import React, { useEffect } from 'react';
import './Code.css'
// import '../../themes/dracula.css'
// import '../../themes/twilght.css'
import useCodeMirror from '../../hooks/useCodeMirror'

export default function Code(props: {
  code: string;
  language: string;
  theme: string;
}) {
  const ref: React.RefObject<HTMLDivElement> = React.createRef()

  let codeMirror: any;

  const { init } = useCodeMirror()



  useEffect(() => {
    if(!ref.current) return
    codeMirror = init(ref.current, {
      value:props.code, 
      mode: props.language, 
      theme: props.theme
    })
  })

  return (
    <div className="codep" ref={ref}>
    </div>
  )
}
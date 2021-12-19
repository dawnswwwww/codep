import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import CodeArea from './components/CodeArea/CodeArea'
import Operator from './components/Operator/Operator'
import Center from './components/Center/Center'
import Gap from './components/Gap/Gap'
import Settings from './components/Settings/Settings'
import defaultCode from './constants/defaultCode'

function App() {
  const [lang] = useState('javascript')

  const [code] = useState(defaultCode[lang])

  const codeAreaRef: React.RefObject<any> = React.createRef()

  return (
    <div className="App">
        <Gap/>
      <Center>
        <Operator target={codeAreaRef} />
        </ Center>
        <Gap/>
      <Center>
        <div className="codep-codeArea">
          <CodeArea ref={codeAreaRef} language={lang}  code={code} theme="dracula"  />
        </div>
      </ Center>
      <Gap/>
      <Center><Settings /></Center>
    </div>
  )
}

export default App

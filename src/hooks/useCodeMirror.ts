import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'
import SUPPORT_LANG from "@/constants/supportLang"
import THEMES from '@/constants/supportTheme'

console.log(THEMES)

let editor: CodeMirror.Editor

const init = (target: HTMLElement, config: CodeMirror.EditorConfiguration) => {
  editor = CodeMirror(target, {
    tabSize: 2,
    lineNumbers: true,
    scrollbarStyle: 'null',  
    viewportMargin: Infinity,
    ...config
  });
}

const setMode = (mode: string) => editor.setOption('mode', mode)
const setValue = (value: string) => editor.setOption('value', value)
const setTheme = (theme: string) => editor.setOption('theme', theme)

export default function useCodeMirror ()  {
  return { setMode, setValue, init, setTheme }
}
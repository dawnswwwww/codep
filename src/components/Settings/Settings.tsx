
import SUPPORT_LANG from "../../constants/supportLang"
import useCodeMirror from '@/hooks/useCodeMirror'
import SUPPORT_THEME from "../../constants/supportTheme"
import './Settings.css'
import React from 'react'

export default function Settings () {

  const { setMode, setTheme } = useCodeMirror()

  const changeLang = (event: React.ChangeEvent) => {
    const lang = (event?.target as HTMLSelectElement)?.value
    if (lang) setMode(lang)
  }

  const changeTheme = (event: React.ChangeEvent) => {
    const theme = (event?.target as HTMLSelectElement)?.value
    if (theme) setTheme(theme)
  }
  
  return (
    <div className="settings">
      <label htmlFor="lang">语言</label>
      <select name="lang" id="" onChange={changeLang}>
        {
          SUPPORT_LANG.map(lang => (
            <option key={lang} value={lang}>{ lang }</ option>
          ))
        }
      </select>
      <label htmlFor="theme">主题</label>
      <select defaultValue="dracula" name="theme" id="" onChange={changeTheme}>
        {
          SUPPORT_THEME.map(theme => (
            <option key={theme} value={theme}>{ theme }</ option>
          ))
        }
      </select>
    </div>
  )
}
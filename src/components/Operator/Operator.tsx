
import './Operator.css'
import useHtml2Canvas from '../../hooks/useHtml2Canvas'
import useClipboard  from '../../hooks/useClipboard'
import React from 'react'

export default function Operator (props: {
  target: React.RefObject<HTMLElement>
}) {

  const { getDataURLFromHTML, getBlobURLFromHTML }  = useHtml2Canvas()
  const { copyIamge } = useClipboard()

  const download = async () => {
    const dataurl = await getDataURLFromHTML(props.target.current)
    const item = document.createElement('a')
    item.href = dataurl
    item.download = 'image.png'
    item.click()
  }

  const copy = async () => {
    const blob = await getBlobURLFromHTML(props.target.current)
    copyIamge(blob)
  }

  return (
    <div className="operator-area">
      <div className="operator-action copy" onClick={() => copy()}>复制图片</div>
      <div className="operator-action download" onClick={() => download()}>下载图片</div>
    </div>
  )
}
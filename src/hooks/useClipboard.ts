import * as clipboard from 'clipboard-polyfill'

const copyText = (text: string) => {
  return clipboard.writeText(text)
}

const copyIamge = (data: Blob) => {
  const item = new clipboard.ClipboardItem({
    'image/png': data
  });
  return clipboard.write([item])
}


  export default () => ({
    copyText,
    copyIamge
})
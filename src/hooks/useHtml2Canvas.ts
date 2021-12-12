import html2canvas from "html2canvas";

type Node = HTMLElement | null;

const dataURLToBlob = (dataurl: string): Blob => { 
  const arr = dataurl.split(',');
  const mime = ((arr[0] as any).match(/:(.*?);/)[1]) as any;
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

const getDataURLFromHTML = async (Node: Node): Promise<string> => {
  if (!Node) return ''
  const canvas: HTMLCanvasElement = await html2canvas(Node, {
    backgroundColor: null,
    useCORS: true,
  });
  return canvas.toDataURL("image/png");
}

const getBlobURLFromHTML = async (Node: Node): Promise<Blob> => {
  const dataurl = await getDataURLFromHTML(Node);
  return dataURLToBlob(dataurl)
}

export default () => ({
  getBlobURLFromHTML,
  getDataURLFromHTML
})




export default (classSelector:string)=>{
  const elements = document.getElementsByClassName(classSelector)
  if(elements && elements.length){
    const ele = elements[0]
    if(ele.scrollHeight > ele.clientHeight) {
      ele.scrollTop = ele.scrollHeight;
    }
  }
}
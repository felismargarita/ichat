import _ from 'lodash'

const messages = [
  '你说啥,我看不见',
  '有一说一,确实',
  '好的',
  '这啥,我不懂',
  '这不能够吧',
  '你开心就好',
  '还得向您请教?',
  '谢谢你'
]

export default ()=>{
  return messages[_.random(0,messages.length-1)]
}
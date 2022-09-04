import trainingData from "./trainingData.js"

export default function ceateThumnail(props){
  for(let i = 0; i<trainingData['thumnailData'].length; i++){
    let container = document.createElement('div')
    for(const cssValue in props){
      if(cssValue === 'id'){
        container.id = props[cssValue] +i
      } else {
        container.style[cssValue] = props[cssValue]
      }
    }
    main.appendChild(container)
  }
}
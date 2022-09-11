import trainingData from "./trainingData.js";

export default function liTag(props){
  for(let i = 0; i < trainingData['header'].length; i++){
    let container = document.createElement('li')
    container.textContent = trainingData['header'][i]
    for(const cssValue in props){
      container.style[cssValue] = props[cssValue]
      container.id = `li${i}`
    }
    ul.appendChild(container)
  }
}
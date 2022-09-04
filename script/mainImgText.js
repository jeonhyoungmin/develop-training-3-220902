import trainingData from "./trainingData.js";

export default function mainImgText(propsImg, propsText, clampSize){
  for(let i = 0 ; i < trainingData['thumnailData'].length; i++){
    let imgContainer = document.createElement('div');
    let textContainer = document.createElement('div');
    let thumnail = document.getElementById('thumnail'+i);
    let textData = document.createElement('div')
    // img 속성
    for(const cssValue in propsImg){
      imgContainer.style[cssValue] = propsImg[cssValue] 
    }
      imgContainer.style.backgroundImage = `url(${trainingData['thumnailData'][i]['imgSrc']})`
      imgContainer.style.backgroundSize = 'cover'
    // 텍스트 속성
    for(const cssValue in propsText){
      textContainer.style[cssValue] = propsText[cssValue]
    }
      textContainer.style.overflowY = 'hidden'

      textData.innerHTML = `
      <div style = 
      "font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 1vh;
      color: ${trainingData['colorAssets'][1]};">${trainingData['thumnailData'][i]['title']}</div>

      <div style = 
      "font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      text-align: justify;
      margin-bottom: 1vh;
      color: #000000;"> - ${trainingData['thumnailData'][i]['author']}</div>


      <div style =
      "font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      text-align: justify;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${clampSize};
      overflow: hidden;
      color: #000000;"> - ${trainingData['thumnailData'][i]['summary']}</div>`
    thumnail.appendChild(imgContainer)
    thumnail.appendChild(textContainer)
    textContainer.appendChild(textData)
  }
}
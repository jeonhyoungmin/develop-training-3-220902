import trainingData from "./trainingData.js";

export default function bodyRoot(){
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.style.boxSizing = "border-box"
  document.body.style.overflowX = "hidden"
  root.style.width = '100vw';
  let dataLenght = trainingData['thumnailData'].length
  root.style.height = (100 + 40*trainingData['thumnailData'].length) + 'vh';
}
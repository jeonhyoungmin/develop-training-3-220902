import trainingData from "./trainingData.js";
import bodyRoot from "./bodyRoot.js"
import createTag from "./createTag.js"
import liTag from "./liTag.js"
import createThumnail from "./createThumnail.js"
import mainImgText from "./mainImgText.js";
import arrowSlide from "./arrowSlide.js";

bodyRoot()

// ! header
createTag('header', {
  id: 'header',
  width: '100vw',
  height: '80px',
  backgroundColor: 'aqua',
  position: 'fixed',
  zIndex: 1,
  display: 'flex',
  alignItems: 'flex-end'
}, root)
createTag('nav', {
  id: 'nav',
  width: '1300px',
  height: '50px',
  backgroundColor: 'grey',
  position: 'relative',
  left: '3vw',
  display: 'flex',
  justifyContent: 'center'
}, header)
createTag('ul', {
  id: 'ul',
  width: '800px',
  height: 'inherit',
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-around'
}, nav)
liTag({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '15px',
  color: trainingData['colorAssets'][1]
})

// ! main
createTag('div', {
  id: 'containerDiv',
  width: '100vw',
  height: (100 + 40*trainingData['thumnailData'].length) + 'vh',
  backgroundColor: 'yellowgreen',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start'
}, root)
createTag('main', {
  id: 'main',
  width: '60vw',
  height: '80vh',
  backgroundColor: 'blue',
  position: 'relative',
  right: '25vw',
  top: '30vh'
}, containerDiv)
createThumnail({
  id: 'thumnail',
  width: '50vw',
  height: '50vh',
  backgroundColor: 'royalblue',
  marginBottom: '2vh',
  display: 'flex',
  alignItems: 'flex-end'
})
mainImgText({
  width: '15vw',
  height: '50vh',
  backgroundColor: 'aqua'
}, {
  width: '30vw',
  height: '30vh',
  backgroundColor: 'plum',
  position: 'relative',
  left: '2vw'
}, 10)

// ! article
createTag('article', {
  id: 'article',
  width: '15vw',
  height: '80vh',
  backgroundColor: 'cadetblue',
  position: 'fixed',
  bottom: '5vh',
  right: '8vw',
  display: 'flex',
}, containerDiv)
createTag('div', {
  id: 'collectionDiv',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  left: '2vw'
}, article)
createTag('div', {
  id: 'collection',
  width: '13vw',
  height: '5vh',
  backgroundColor: 'pink',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '58px',
  overflow: 'hidden'
}, collectionDiv)
const collection = document.getElementById('collection')
collection.textContent = 'Collection'
createTag('div', {
  id: 'myCollection',
  width: '13vw',
  height: '73vh',
  backgroundColor: 'salmon',
  overflow: 'hidden'
}, collectionDiv)
arrowSlide({
  width: '2vw',
  height: 'inherit',
  backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute'
})
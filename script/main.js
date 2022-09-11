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
  // backgroundColor: 'aqua',
  position: 'fixed',
  zIndex: 1,
  display: 'flex',
  alignItems: 'flex-end',
  backgroundColor: trainingData.colorAssets[0]
}, root)
createTag('div', {
  id: 'darkMode',
  width: '50px',
  height: '30px',
  backgroundColor: trainingData.colorAssets[0],
  color: trainingData.colorAssets[1],
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  textAlign: 'center',
  zIndex: 1
}, header, "white")
createTag('nav', {
  id: 'nav',
  width: '1300px',
  height: '50px',
  // backgroundColor: 'grey',
  borderBottom: "1px solid black",
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
  height: (100 + 40 * trainingData['thumnailData'].length) + 'vh',
  backgroundColor: trainingData.colorAssets[0],
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start'
}, root)
createTag('main', {
  id: 'main',
  width: '60vw',
  height: '80vh',
  // backgroundColor: 'blue',
  position: 'relative',
  right: '25vw',
  top: '30vh'
}, containerDiv)
createThumnail({
  id: 'thumnail',
  width: '50vw',
  height: '50vh',
  // backgroundColor: 'royalblue',
  marginBottom: '2vh',
  display: 'flex',
  alignItems: 'flex-end'
})
mainImgText({
  width: '15vw',
  height: '40vh',
  // backgroundColor: 'rgb(200, 200, 200)'
  // backgroundColor: 'aqua'
}, {
  width: '30vw',
  height: '30vh',
  // backgroundColor: 'plum',
  position: 'relative',
  left: '2vw',
  display: 'flex',
  alignItems: "center",
  // backgroundColor: 'rgb(200, 200, 200)'
}, 10)

// ! article
createTag('article', {
  id: 'article',
  width: '15vw',
  height: '80vh',
  // backgroundColor: 'cadetblue',
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
  // backgroundColor: 'pink',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '58px',
  overflow: 'hidden',
  color: trainingData.colorAssets[1]
}, collectionDiv, 'Collection')
createTag('div', {
  id: 'myCollection',
  width: '13vw',
  height: '73vh',
  // backgroundColor: 'salmon',
  overflow: 'hidden'
}, collectionDiv)
arrowSlide({
  width: '2vw',
  height: 'inherit',
  // backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute'
})

for (let i = 0; i < trainingData.thumnailData.length; i++) {
  let chooseCard = document.getElementById(`thumnail${i}`)
  chooseCard.addEventListener('click', () => {
    // console.log(chooseCard)
    chooseCard.style.display = 'none'
    // collectionCard.id = `collection ${i}`
    let chooseImg = document.querySelector(`#thumnail${i} > div:nth-Child(1)`)
    const myCollection = document.getElementById('myCollection')
    myCollection.appendChild(chooseImg)
    chooseImg.style.width = '5vw'
    chooseImg.style.height = '5vw'
    chooseImg.style.backgroundSize = 'cover'
    chooseImg.style.marginBottom = '5px'


    chooseImg.addEventListener('click', () => {
      chooseCard.style.display = 'flex'
      chooseCard.prepend(chooseImg)
      chooseImg.style.width = '15vw'
      chooseImg.style.height = '40vh'
      chooseImg.style.backgroundSize = '15vw 40vh'
    })
  })
}


let count = 0;
  const darkMode = document.getElementById('darkMode')
  darkMode.addEventListener('click', () => {
    if(count === 0){
      count = 1
      darkMode.textContent = "dark"
      darkMode.style.color = "white"
      darkMode.style.backgroundColor = "black"
      darkMode.style.transition = '1s ease-in-out'
      header.style.backgroundColor = 'black'
      header.style.transition = '1s ease-in-out'
      nav.style.borderBottom = "1px solid white"
      nav.style.transition = '1s ease-in-out'
      // collectionDiv.style.backgroundColor = 'black'
      collection.style.color = 'white'
      collection.style.transition = '1s ease-in-out'
      containerDiv.style.backgroundColor = 'black'
      containerDiv.style.transition = '1s ease-in-out'
      right.style.color = 'white'
      right.style.transition = '1s ease-in-out'
      left.style.color = 'white'
      left.style.transition = '1s ease-in-out'
      for (let i = 0; i < trainingData['header'].length; i++) {
        let li = document.getElementById(`li${i}`)
        li.style.color = 'white'
        li.style.transition = '1s ease-in-out'
      }
      for (let i = 0; i < trainingData['thumnailData'].length; i++) {
        let title = document.getElementById(`title${i}`)
        let author = document.getElementById(`author${i}`)
        let summary = document.getElementById(`summary${i}`)
        title.style.color = 'white'
        summary.style.color = 'white'
        author.style.color = 'white'
        title.style.transition = '1s ease-in-out'
        summary.style.transition = '1s ease-in-out'
        author.style.transition = '1s ease-in-out'
      }
    } else {
      count = 0 
      darkMode.textContent = "white"
      darkMode.style.color = trainingData.colorAssets[1]
      darkMode.style.backgroundColor = trainingData.colorAssets[0]
      darkMode.style.transition = '1s ease-in-out'
      header.style.backgroundColor = trainingData.colorAssets[0]
      header.style.transition = '1s ease-in-out'
      nav.style.borderBottom = "1px solid black"
      nav.style.transition = '1s ease-in-out'
      // collectionDiv.style.backgroundColor = 'black'
      collection.style.color = trainingData.colorAssets[1]
      collection.style.transition = '1s ease-in-out'
      containerDiv.style.backgroundColor = trainingData.colorAssets[0]
      containerDiv.style.transition = '1s ease-in-out'
      right.style.color = trainingData.colorAssets[1]
      right.style.transition = '1s ease-in-out'
      left.style.color = trainingData.colorAssets[1]
      left.style.transition = '1s ease-in-out'
      for (let i = 0; i < trainingData['header'].length; i++) {
        let li = document.getElementById(`li${i}`)
        li.style.color = trainingData.colorAssets[1]
        li.style.transition = '1s ease-in-out'
      }
      for (let i = 0; i < trainingData['thumnailData'].length; i++) {
        let title = document.getElementById(`title${i}`)
        let author = document.getElementById(`author${i}`)
        let summary = document.getElementById(`summary${i}`)
        title.style.color = trainingData.colorAssets[1]
        summary.style.color = trainingData.colorAssets[1]
        author.style.color = trainingData.colorAssets[1]
        title.style.transition = '1s ease-in-out'
        summary.style.transition = '1s ease-in-out'
        author.style.transition = '1s ease-in-out'
      }
    }
  })
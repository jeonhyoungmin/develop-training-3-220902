import trainingData from "./trainingData.js";
import bodyRoot from "./bodyRoot.js"
import createTag from "./createTag.js"

bodyRoot()

// * header
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
  width: '80vw',
  height: '50px',
  backgroundColor: 'grey',
  position: 'relative',
  left: '3vw',
  display: 'flex',
  justifyContent: 'center'
}, header)
createTag('ul', {
  id: 'ul',
  width: 30vw;
  height: inherit;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}, header)





createTag('div', {
  id: 'containerDiv',
  width: '100vw',
  height: '130vh',
  backgroundColor: 'yellowgreen',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}, root)
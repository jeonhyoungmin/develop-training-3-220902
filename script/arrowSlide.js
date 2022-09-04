export default function arrowSlide(props){
  let rightContainer = document.createElement('div')
  let leftContainer = document.createElement('dlv')
  let article = document.getElementById('article')
  let collection = document.getElementById('collection')
  let myCollection = document.getElementById('myCollection')
  rightContainer.textContent = ">"
  leftContainer.textContent = "<"
  for(const cssValue in props){
    rightContainer.style[cssValue] = props[cssValue]
    leftContainer.style[cssValue] = props[cssValue]
  }
  article.appendChild(rightContainer)
  article.appendChild(leftContainer)
  leftContainer.style.display = 'none'
  let count = 0;
  rightContainer.addEventListener('click', function(){
    if(count === 0){
      count++;
      rightContainer.style.display = 'none'
      leftContainer.style.display = 'flex'
      collection.style.width = 0;
      collection.style.transition = 'width 1s ease-in-out'
      myCollection.style.width = 0;
      myCollection.style.transition = 'width 1s ease-in-out'
      article.style.width = '2vw'
      article.style.transition = 'width 1s ease-in-out'
    } 
  })
  leftContainer.addEventListener('click', function(){
    if(count === 1){
      count--;
      leftContainer.style.display = 'none'
      rightContainer.style.display = 'flex'
      collection.style.width = '13vw';
      collection.style.transition = 'width 1s ease-in-out'
      myCollection.style.width = '13vw';
      myCollection.style.transition = 'width 1s ease-in-out'
      article.style.width = '15vw'
      article.style.transition = 'width 1s ease-in-out'
    }
  })
}
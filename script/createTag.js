export default function createTag(tagName, props, parent){
  let container = document.createElement(tagName);
  for(const cssValue in props){
    if(cssValue === 'id'){
      container.id = props[cssValue]
    } else {
      container.style[cssValue] = props[cssValue]
    }
  }
  parent.appendChild(container)
  // return container
}
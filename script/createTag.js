export default function createTag(tagName, props, parent, textContent = ''){
  let container = document.createElement(tagName);
  for(const cssValue in props){
    if(cssValue === 'id'){
      container.id = props[cssValue]
    } else {
      container.style[cssValue] = props[cssValue]
    }
  }
  // return container
  container.textContent = textContent
  return parent.appendChild(container)
}
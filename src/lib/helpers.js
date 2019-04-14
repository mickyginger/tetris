export function createElement(tagName, attributes={}, content) {
  const elem = document.createElement(tagName)
  Object.assign(elem, attributes)
  if(typeof content === 'string') elem.innerHTML = content
  else if(content instanceof Element) elem.appendChild(content)

  return elem
}

export const shapes = {
  O: (width) => [ { width: 2, indices: [0,1,width,width+1] } ],
  I: (width) => [
    { width: 1, indices: [0,width,width*2,width*3] },
    { width: 4, indices: [0,1,2,3] }
  ],
  T: (width) => [
    { width: 3, indices: [0,1,2,width+1] },
    { width: 2, indices: [1,width,width+1,width*2+1] },
    { width: 3, indices: [1,width,width+1,width+2] },
    { width: 2, indices: [0,width,width+1,width*2] }
  ],
  J: (width) => [
    { width: 2, indices: [1,width+1,width*2,width*2+1] },
    { width: 3, indices: [0,width,width+1,width+2] },
    { width: 2, indices: [0,1,width,width*2] },
    { width: 3, indices: [0,1,2,width+2] }
  ],
  L: (width) => [
    { width: 2, indices: [0,width,width*2,width*2+1] },
    { width: 3, indices: [0,1,2,width] },
    { width: 2, indices: [0,1,width+1,width*2+1] },
    { width: 3, indices: [width,width+1,width+2,2] }
  ],
  S: (width) => [
    { width: 3, indices: [1,2,width,width+1] },
    { width: 2, indices: [0,width,width+1,width*2+1] }
  ],
  Z: (width) => [
    { width: 3, indices: [0,1,width+1,width+2] },
    { width: 2, indices: [1,width,width+1,width*2] }
  ]
}

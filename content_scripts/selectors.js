function $(arg1, arg2){
  return arg2 ? arg1.querySelector(arg2) : document.querySelector(arg1);
}

function $$(arg1, arg2){
  let nodes = arg2 ? arg1.querySelectorAll(arg2) : document.querySelectorAll(arg1);
  return [...nodes];
}

function $remove(element){
  if (element){
    element.parentElement.removeChild(element);
  }
}

function $create(element){
  return document.createElement(element);
}

function $insert(elem1, elem2, attrs = {}){
  attrs = {
    position: "beforeend",
    ...attrs
  };

  let newelem = $create(elem2);

  if (attrs.class){
    newelem.className = attrs.class;
  }
  if (attrs.text){
    newelem.textContent = attrs.text;
  }
  if (attrs.id){
    newelem.id = attrs.id;
  }

  if (attrs.position === "parent"){
    elem1.insertAdjacentElement("beforebegin", newelem);
    newelem.insertAdjacentElement("beforeend", elem1);
  }
  else {
    elem1.insertAdjacentElement(attrs.position, newelem);
  }
  return newelem;
}
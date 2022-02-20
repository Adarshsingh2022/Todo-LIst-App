
const addList = document.querySelector(".add-list");
const addBtn = document.querySelector(".uil-plus");
const inputField = document.getElementById("input");

addBtn.addEventListener('click', ()=>{
    
  const createElement = document.createElement('div');
  createElement.classList.add('create-div');
  createElement.innerText = inputField.value;
  addList.appendChild(createElement);
  inputField.value = "";


  createElement.addEventListener('click', ()=>{
      createElement.style.textDecoration = 'line-through'
  })

  createElement.addEventListener('dblclick', ()=>{
      addList.removeChild(createElement);
  })

})

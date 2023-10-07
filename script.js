addEventListener(onload, deleteElements(), editElements());

//fecha elementos
let close = document.querySelectorAll('.close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

//listener de enter
let input = document.querySelector('#myInput');

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('#btn').click();
    deleteElements();
  }
});

//da check nos elementos
let list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);

//cria novos elementos com a partir do input
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.querySelector('#myInput').value;
  let valor = document.createTextNode(inputValue);
  li.appendChild(valor);
  if (inputValue === '') {
    alert('You must write something');
  } else {
    document.querySelector('#myUl').appendChild(li);
    deleteElements();
    editElements();
  }
  document.querySelector('#myInput');
}

function deleteElements() {
  //criando botão de fechar
  //chama a tag do elemento
  let myNodelist = document.getElementsByTagName('LI');
  for (let i = 0; i < myNodelist.length; i++) {
    //cria uma span e uma img em cada um dos elementos em "myNodeList"
    let span = document.createElement('SPAN');
    let img = document.createElement('img');
    //da o local da img
    img.src = 'assets/lixo.svg';
    img.id = 'trash';
    //da o nome
    span.className = 'close';
    //coloca os respectivos elementos no html
    span.appendChild(img);
    myNodelist[i].appendChild(span);
  }
  document.getElementById('myInput').value = '';
  //fecha elementos
  let close = document.querySelectorAll('.close');
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

function editElements() {
  let myEditList = document.getElementsByTagName('LI');
  for (let i = 0; i < myEditList.length; i++) {
    let span = document.createElement('span');
    let img = document.createElement('img');

    img.src = 'assets/edit_dark.svg';
    img.id = 'edit';

    span.className = 'edit';

    span.appendChild(img);
    myEditList[i].appendChild(span);

    span.onclick = function () {
      console.log('APERTADO');
      let newText = prompt("What's the new activity?");
      if (newText !== null) {
        myEditList[i].textContent = newText;
        deleteElements();
        editElements();
      }
    };
  }
}

// Chame a função editElements quando necessário.

//TOGGLE THEMES
let trash = document.querySelector('#trash');
//let check = document.querySelector('.checked');
let change = false;
let btnTheme = document.querySelector('#sun');
let logo = document.querySelector('#logo');
let bd = document.body;
let seta = document.querySelector('.setaBtn');
let setaLogo = document.querySelector('.setaLogo');

btnTheme.addEventListener('click', function () {
  if (change == false) {
    bd.style.setProperty('--pale-white', '#352f44');
    bd.style.setProperty('--deep-purple', '#faf0e6');
    logo.src = 'assets/logo_black.svg';
    btnTheme.src = 'assets/moon.svg';
    btnTheme.style.marginTop = '5px';
    trash.src = 'assets/lixo_light.svg';
    seta.src = 'assets/seta_light.svg';
    setaLogo.src = 'assets/seta_alternativa.svg';
    setaLogo.style.width = '20px';
    setaLogo.style.marginLeft = '10px';
    //check.style.backgroundImage = 'url(assets/check_light.svg)';
    change = true;
  } else {
    bd.style.setProperty('--pale-white', '#faf0e6');
    bd.style.setProperty('--deep-purple', '#352f44');
    logo.src = 'assets/logo.svg';
    btnTheme.src = 'assets/sol.svg';
    btnTheme.style.marginTop = '0';
    trash.src = 'assets/lixo.svg';
    seta.src = 'assets/seta_alternativa.svg';
    setaLogo.src = 'assets/seta_light.svg';
    change = false;
  }
});

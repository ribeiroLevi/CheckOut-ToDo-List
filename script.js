addEventListener(onload, deleteElements());
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
  }
  document.querySelector('#myInput');
}

function deleteElements() {
  //criando botão de fechar
  //chama a tag do elemento
  let myNodelist = document.getElementsByTagName('LI');
  for (let i = 0; i < myNodelist.length; i++) {
    //cria uma span e uma img em cada um dos elementos em "myNodeList"
    var span = document.createElement('SPAN');
    var img = document.createElement('img');
    //da o local da img
    img.src = 'assets/lixo.svg';
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

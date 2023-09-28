//criando botão de fechar
//chama a tag do elemento
var myNodelist = document.getElementsByTagName('LI');
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

//fecha elementos
let close = document.querySelectorAll('.close');

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

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

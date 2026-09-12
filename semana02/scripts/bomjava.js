const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('favchap');

const li = document.createElement('li');
const botaoExcluir = document.createElement('button');

li.textContent = input.value;

botaoExlcuir.textContent = '❌';

li.append(botaoExcluir);
lista.append(li);

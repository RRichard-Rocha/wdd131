const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Novos templos adicionados para cumprir a regra de 3 ou mais novos
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59463,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-855523-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/400x250/curitiba-brazil-temple-lds-755734-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Roma Itália",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 41010,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-2018.jpg"
  }
];

const galeria = document.querySelector("#galeria-templos");

function exibirTemplos(listaDeTemplos) {
  galeria.innerHTML = "";
  
  listaDeTemplos.forEach(templo => {
    let cartao = document.createElement("figure");
    
    // Uso exclusivo de template literals (crases)
    cartao.innerHTML = `
      <h3>${templo.nomeDoTemplo}</h3>
      <p><span>LOCALIZAÇÃO:</span> ${templo.localizacao}</p>
      <p><span>DEDICADO:</span> ${templo.consagracao}</p>
      <p><span>TAMANHO:</span> ${templo.area} sq ft</p>
      <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
    `;
    
    galeria.appendChild(cartao);
  });
}

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  exibirTemplos(templos);
});

document.querySelector("#antigos").addEventListener("click", (e) => {
  e.preventDefault();
  const antigos = templos.filter(t => parseInt(t.consagracao.split(",")[0]) < 1900);
  exibirTemplos(antigos);
});

document.querySelector("#novos").addEventListener("click", (e) => {
  e.preventDefault();
  const novos = templos.filter(t => parseInt(t.consagracao.split(",")[0]) > 2000);
  exibirTemplos(novos);
});

document.querySelector("#grandes").addEventListener("click", (e) => {
  e.preventDefault();
  const grandes = templos.filter(t => t.area > 90000);
  exibirTemplos(grandes);
});

document.querySelector("#pequenos").addEventListener("click", (e) => {
  e.preventDefault();
  const pequenos = templos.filter(t => t.area < 10000);
  exibirTemplos(pequenos);
});

exibirTemplos(templos);
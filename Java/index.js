function ValidaBusca(){
    if(document.querySelector('#q').value==""){
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}




var banners = ["./Imagens/higuruma.jpg", "./Imagens/itadori.jpg"];
var bannerAtual = 0;

function trocaBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('.destaque img').src = banners[bannerAtual]
}

var timer = setInterval(trocaBanner, 1000);

var controle = document.querySelector('.pause');
controle.onclick = function() { 
    if (controle.className == 'pause') { 
        clearInterval(timer);
        controle.className = 'play'; 
    } 
    else { 
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause'; 
    } 
    return false; 
};

document.querySelector('#form-busca').onsubmit = ValidaBusca;

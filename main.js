const buton = document.getElementById("tikla");
const butong = document.getElementById("gecmis");
const text = document.getElementById("input");
const div = document.getElementById("div");
const ul = document.getElementById("list");
let lis = document.querySelectorAll("#list li");
let kayit =[],index,olus;
let kayit2 =[];
let first = true;

ekle();

buton.addEventListener('click', () =>{
    if(first){
        for(var i = 0 ; i < lis.length ; i++){
            kayit.push(lis[i].innerHTML);
        }
    }
    first =false;
    if(text.value != ""){
        kayit.push(text.value);
        olus = "<li>" + text.value +  "<button onclick='sil()'>Sil</button>"+ "<button onclick='ok()'>Yapıldı</button>"+"</li>";
        ul.innerHTML += olus;
    }
    lis = document.querySelectorAll("#list li");
    kayit2 = [];
    ekle();
})
 
function ok (){
    for(var i = 0 ; i < lis.length;i++){
        lis[i].onclick = function(e){
            index = kayit2.indexOf(this.innerHTML);
            this.classList.add("ok");
        }
    }
}   

function sil (){
    for(var i = 0 ; i < lis.length;i++){
        lis[i].onclick = function(e){
            index = kayit2.indexOf(this.innerHTML);
            this.remove(e.target);
        }
    }
}

butong.addEventListener('click', () =>{
    div.innerHTML = "";
    for(var i = 0 ; i < kayit.length ; i++){
        div.innerHTML += kayit[i] +" ";
    }
})

function ekle(){
    for(var i = 0 ; i < lis.length ; i++){
        kayit2.push(lis[i].innerHTML);
    }
}



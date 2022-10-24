
var rnd = Math.floor(Math.random()*9);
var hucrejs=document.querySelectorAll('.hucre');
var resimjs=document.querySelectorAll('.resim');
var sayac =0;
var dizi=[];
var score= document.querySelector('.turnOn');
var yeniden= document.querySelector('.yeni');
var tık=0;
yeniden.addEventListener('click',()=>{
sayac=0;
score.textContent=`🏆Skor :`;
})
setInterval(() => {
    rnd = Math.floor(Math.random()*9);
    if(dizi.length==2){
            dizi.shift();
    }
    dizi.push(rnd);
    if(dizi.length>=1){
        hucrejs[dizi[0]].setAttribute('class','hucre col-3 rounded-2 m-2');
        resimjs[dizi[0]].setAttribute('class','resim');
    }

    if(dizi.length>=2){
        hucrejs[dizi[1]].setAttribute('class','hucre col-3 iz iz2 rounded-2 m-2');
        resimjs[dizi[1]].setAttribute('class','resim iz2');
    }
}, 1000);

for (let i = 0; i < hucrejs.length-1; i++) {
    hucrejs[i].addEventListener('click',()=>{
        if(parseInt(dizi[1]) ==parseInt(hucrejs[i].textContent)){
            if(tık!=hucrejs[i].textContent){
                score.textContent=`🏆Skor : ${sayac+=5}`;
                tık=hucrejs[i].textContent;
                var audio = new Audio('/uygulama12/mp3/succes.mp3');
                    audio.play();
            }
        }
        else{
            var audio2 = new Audio('/uygulama12/mp3/fail.mp3');
            audio2.play();
            score.textContent=`🏆Skor : ${sayac-=5}`;
        }
    })
}
var audio3 = new Audio('/uygulama12/mp3/music.mp3');
audio3.volume = 0.3;
audio3.currentTime=0;
audio3.play();  
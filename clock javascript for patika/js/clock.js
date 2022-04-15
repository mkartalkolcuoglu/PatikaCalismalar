let getname = document.querySelector("#myName");//idsi myname olan elemanı seçme
let now = document.querySelector("#myClock");//idsi myclok olan elemanı seçme
let username = prompt("İsminizi Yazınız");//kullanıcıdan veri alma
getname.innerHTML = username;/*kullanıcıdan aldığımız veriyi daha önce seçtiğimiz myname idli elemana 
eşitliyoruz span kısmında kullanıcıdan aldığımız veri yazılacak*/

let week = new Array(7);//haftanın içinde bulunan indexleri güne çevirme
week[0] = "Pazartesi";
week[1] = "Salı";
week[2] = "Çarşamba";
week[3] = "Perşembe";
week[4] = "Cuma";
week[5] = "Cumartesi";
week[6] = "Pazar";

function sifirekle(i) {//saate sıfır ekleme
  if (i < 10) {
    i = "0"+i;
  }
  return i;
}
  
function showTime() {//zaman gosterme
  let  time = new Date();
  let hour = sifirekle(time.getHours());
  let minute = sifirekle(time.getMinutes());
  let second = sifirekle(time.getSeconds());
  let day = week[time.getDay()];
  now.innerHTML = `${hour}:
  ${minute}:
  ${second} 
  ${day}`;
}

setInterval(()=>{//sayfayı yenileme
  showTime();
}, 1000);

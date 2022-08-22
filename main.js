const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow","green","blue","red"];


button.addEventListener("click" , changebackground);

let sıra = 0;


function changebackground() {
    //rastgele bir renk 

   const rastgelesayı= Math.floor(Math.random() * colors.length);
    const seçilenrenk = colors[rastgelesayı];
    body.style.backgroundColor=seçilenrenk;


    // sıralya arkaplan rengi seç


   // if(sıra == 5) sıra = 0
   // const seçilenrenk = colors[sıra];
   // sıra++ ;
   // body.style.backgroundColor = seçilenrenk
}
function relogio(){
    let data =new Date();
    let hor=data.getHours();
    let min=data.getMinutes();
    let seg=data.getSeconds();
    
    if(hor<10){
        hor="0"+hor;
    }
    if (hor<10) {
        min = "0" + min;
    }
    if (hor < 10) {
        seg= "0" + seg;
    }
     
    let horas=hor+":"+min+":"+seg;
    document.getElementById("relogio").value=horas;
}

var tempo=setInterval(relogio,1000);
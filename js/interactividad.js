document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("espacio").addEventListener("click",espacio);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("punto").addEventListener("click",punto);


document.getElementById("clear").addEventListener("click",clear);

function n1(){
    //aqui se almacena
    let res=document.getElementById("pass").innerHTML;
    //al ser un botin hay que poner innerHTML
    let num1=document.getElementById("n1").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}
function n2(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n2").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}
function n3(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n3").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}
function n4(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n4").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}

function n5(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n5").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}function n6(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n6").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}function n7(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n7").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}function n8(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n8").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}function n9(){
    let res=document.getElementById("pass").innerHTML;
    let num1=document.getElementById("n9").innerHTML;
    document.getElementById("pass").innerHTML=res+num1;
    
}

function changeScreen()
{
    var screenMenu=document.getElementById("menu");
    screenMenu.href="views/menu.html";

    } 


function ok()
{
     if(document.getElementById("pass").innerHTML=="123"){
         //SE MOTRARA EL MENU

         document.getElementById("screen_box").style.display="none";
         document.getElementById("screen1").style.display="block";




         var screenMenu=document.getElementById("menu");
         screenMenu.href;
         document.getElementById("input").innerHTML="se debe mostrar el menu";
     }
     else{document.getElementById("input").innerHTML="CONTRASEÑA INCORRECTA";}
}

function clear(){
    document.getElementById("clear").innerHTML;
}


function clear()
{
    // document.getElementById("teclado1").style.display="block";
    document.getElementById("pass").innerHTML="";
    document.getElementById("input").innerHTML="";

    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="none";
    document.getElementById("screen3").style.display="none";
    document.getElementById("screen4").style.display="none";
    document.getElementById("screen5").style.display="none";
    document.getElementById("screen6").style.display="none";
    document.getElementById("screen_box").style.display="block";


}


function retirar(){

    document.getElementById("screen_box").style.display="none";
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen3").style.display="none";
    document.getElementById("screen4").style.display="none";
    document.getElementById("screen5").style.display="none";
    document.getElementById("screen6").style.display="none";
    document.getElementById("screen2").style.display="block";

} 

function retirasoles(){

    document.getElementById("screen_box").style.display="none";
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="none";
    document.getElementById("screen4").style.display="none";
    document.getElementById("screen5").style.display="none";
    document.getElementById("screen6").style.display="none";
    document.getElementById("screen3").style.display="block";

}

function rotromonto(){
    document.getElementById("screen_box").style.display="none";
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="none";
    document.getElementById("screen3").style.display="none";
    document.getElementById("screen5").style.display="none";
    document.getElementById("screen6").style.display="none";
    document.getElementById("screen4").style.display="block";




}

function retiro_mult_10(){

    document.getElementById("screen_box").style.display="none";
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="none";
    document.getElementById("screen3").style.display="none";
    document.getElementById("screen4").style.display="none";
    document.getElementById("screen6").style.display="none";
    document.getElementById("screen5").style.display="block";



}

function transaccion_procesada(){
    document.getElementById("screen_box").style.display="none";
    document.getElementById("screen1").style.display="none";
    document.getElementById("screen2").style.display="none";
    document.getElementById("screen3").style.display="none";
    document.getElementById("screen4").style.display="none";
    document.getElementById("screen5").style.display="none";
    document.getElementById("screen6").style.display="block";
}

class Factorial{
    constructor(saldo){
        saldo=1000;
        this.saldo=saldo;
        // para hacer operaciones simpre se usa el this.numero
    };

    operacion(){
        var saldo_restante=this.saldo-document.getElementById("ingresa_monto").value;
        return (saldo_restante);
    };
};

function calcular() {
    var res=document.getElementById("saldo");
    //el numero que se ingresa se sustituira por el  valor de this.numero
    var ingresar= new Factorial(document.getElementById('ingresa_monto').value);

    res.value=ingresar.operacion();

};
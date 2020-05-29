class login{
    constructor(pass,money) {
        this.pass=pass;
        this.money=money;
    };

    num1(){return (1);
        
        // document.getElementById("n1").value
    }
    num2(){return (2);}

    
};

var array_pass="1";

function message(){
    //si el password del input es igual a del array_pass entonces ingresa
        if(data_pass.value==1){
            console.log("ingresaste");
        document.getElementById("input").innerHTML="Es correcta ";

        //AQUI VA LAS PANTALLAS
        }

        else{
        document.getElementById("input").innerHTML="Esta Contraseña es Incorrecta ";
        }
}



function enter_password(){
    //donde se almacena
    var data_pass=document.getElementById("pass");
    
    //dato que se trae del boton 1
    var ingresar =new login(document.getElementById("n1").value);
    data_pass.value=ingresar.num1();
    message();

}

function enter_password2(){
    var data_p=document.getElementById("pass");
    var ing=new login(document.getElementById("n2").value);
    data_p.value=ing.num2();
    message();


}


function changeScreen()
{
    var screenMenu=document.getElementById("menu");
    screenMenu.scr="../menu.html";

    } 
//carrito

function calcular(){
    var name=document.getElementById("name").value;
    var lastname=document.getElementById("lastname").value;
    var cantidad=document.getElementById("cantidad").value;
    var select=document.getElementById("ope");
    var select_activa=select.options[select.selectedIndex].value;
    var result=0
    var precioEntrada=200
    
    
    
    

    switch(select_activa=parseInt(select_activa))

    {
        case 1:
                result=precioEntrada-(precioEntrada*0.8);
                break;
        case 2:
            result=precioEntrada-(precioEntrada*0.5);
            break;

        case 3:
            result=precioEntrada-(precioEntrada*0.15);
            break;


    }
    document.getElementById("resultado").value=result*cantidad;
    alert("hola " + name +" "+ lastname + ". " + "Tu importe es $" + result*cantidad )
}
    



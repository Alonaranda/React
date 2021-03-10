const activo = true;
let mensaje = '';
/*
if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}
mensaje = (activo)? 'Activo':'Inactivo';*/
mensaje = activo && 'Activo';//Si no cumple regresa False
console.log(mensaje);
activo===true?console.log('true'):console.log('false');
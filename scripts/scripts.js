
let nombre = "0"
let tema = "0"
nombre = prompt ("Hola, cuál es tu nombre?")
alert( " Bienvenide " + nombre + " Gracias por visitar ésta web \n ¿de qué tema quieres conocer hoy? ")
tema = prompt ("1 Para id \n 2 Para clases \n 3 es README.md")
if (tema == 1){
    alert("Los id son selectores, si bien casi no se usan los puedes emplear para dividir en secciones el sitio web")
    document.write("Los id son selectores, si bien casi no se usan los puedes emplear para dividir en secciones el sitio web")
}else if(tema == 2){
    alert("Las clases nos permite invocar selectores de manera profesional a su vez, las clases se pueden repetir")
    document.write("Las clases nos permite invocar selectores de manera profesional a su vez, las clases se pueden repetir")
}else if(tema == 3){
    alert("README.md es para definir la documentación del proyecto")
    document.write("README.md es para definir la documentación del proyecto")
}else{
    alert("Me quieres ver la cara de estúpida, refresca y elige bien por favor!!!")
}
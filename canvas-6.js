function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	//Aplicamos los estilos generales al texto
	lienzo.font="bold 20px verdana, sans-serif";
	//Escribimos nuestro texto
	//Especificamos su posición inicial
	lienzo.fillText("PDVSA",50,20);

	//3° Transformación "scale"
	//Especificamos su nueva escala
	lienzo.scale(2,2);




	//Aplicamos los estilos generales al texto
	lienzo.font="bold 20px verdana, sans-serif";
	//Escribimos nuestro texto
	//Especificamos su posición inicial
	lienzo.fillText("PDVSA",80,20);

}
window.addEventListener("load", iniciar, false);
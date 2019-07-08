function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	//Aplicamos los estilos generales al texto
	lienzo.font="bold 20px verdana, sans-serif";
	//Escrinimos nuestro texto en el lienzo
	//Indicamos su posición inicial
	lienzo.fillText("PDVSA",50,20);

	//1° Transformación "traslate"
	//Especificamos su nueva posición
	lienzo.translate(50,70);

	//Escribimos nuevamente nuestro texto
	lienzo.fillText("PDVSA",0,0);

}
window.addEventListener("load", iniciar, false);
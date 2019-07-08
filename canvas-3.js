function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	lienzo.font="bold 24px verdana, sans-serif";
	lienzo.textAlign="start";
	lienzo.textBaseline="bottom";

	var txt = "PDVSA";
	lienzo.fillText("Ancho: " + lienzo.measureText(txt).width,5,30);
	lienzo.fillText(txt,5,70);

}
window.addEventListener("load", iniciar, false);
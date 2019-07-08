function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	lienzo.font="bold 24px verdana, sans-serif";
	lienzo.textAlign="start";
	lienzo.textBaseline="bottom";

	lienzo.fillText("PDVSA", 100,124);
	lienzo.strokeText("PDVSA", 150,180,60);

}
window.addEventListener("load", iniciar, false);
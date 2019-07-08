function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	lienzo.transform(3,0,0,1,0,0);
	lienzo.font="bold 20px verdana, sans-serif";
	lienzo.fillText("PDVSA1",20,20);

	lienzo.transform(1,0,0,10,0,0);
	lienzo.font="bold 20px verdana, sans-serif";
	lienzo.fillText("PDVSA2",100,20);

	//Sin importqar las transformaciones anteriores
	//Reinicia la matris para aplicar las transformaciones
	lienzo.setTransform(1,1,1,0,0,0);
	lienzo.font="bold 20px verdana, sans-serif";
	lienzo.fillText("PDVSA3",100,20);

}
window.addEventListener("load", iniciar, false);
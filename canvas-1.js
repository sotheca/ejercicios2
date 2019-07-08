function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al primer trazo
	lienzo.strokeStyle="red";
	//Aplicamos el estilo en línea "lineWidth"
	lienzo.lineWidth=7;
	//Posicionamos el lapiz
	lienzo.moveTo(40,20);
	//Realizamos el trazo a la posicion indicada
	lienzo.lineTo(40,195);
	//Especificamos que solo es el contorno
	lienzo.stroke();

	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al segundo trazo 
	lienzo.strokeStyle="blue";
	//Aplicamos el estilo en línea "lineCap"
	//Esta propiedad determina las forma de la terminación de la línea
	//Esta propiedad puede recibir tre valores: butt, round y square
	lienzo.lineCap="butt";
	//Posicionamos el lapiz
	lienzo.moveTo(80,20);
	//Realizamos el trazo
	lienzo.lineTo(80,195);
	//Metodo para dibujar solo el contorno
	lienzo.stroke();

	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al tercer trazo
	lienzo.strokeStyle="lime";
	//Aplicamos el estilo en línea "lineCap"
	//Hacemos el uso del valor round
	lienzo.lineCap="round";
	//Posicionamos el lapiz
	lienzo.moveTo(120,20);
	//Realizamos el trazo
	lienzo.lineTo(120,195);
	//Metodo para dibujar solo el contorno
	lienzo.stroke();

	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al cuarto trazo
	lienzo.strokeStyle="yellow";
	//Aplicamos el estilo en línea "lineCap"
	//Hacemos el uso del valor square
	lienzo.lineCap="square";
	//Posicionamos el lapiz
	lienzo.moveTo(160,20);
	//Realizamos el trazo
	lienzo.lineTo(160,195);
	//Metodo para dibujar solo el contorno
	lienzo.stroke();

	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al quinto trazo
	lienzo.strokeStyle="purple";
	//lineJoin: determina la forma de la conexión entre línea
	//Hacemos el uso del valor bevel
	lienzo.lineJoin="bevel";
	//Posicionamos el lapiz
	lienzo.moveTo(200,90);
	//Realizamos el trazo
	lienzo.lineTo(230,10);
	lienzo.lineTo(260,90);
	//Metodo para dibujar solo el contorno
	lienzo.stroke();

	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al sesto trazo
	lienzo.strokeStyle="aqua";
	//lineJoin: determina la forma de la conexión entre línea
	//Hacemos el uso del valor round
	lienzo.lineJoin="round";
	//Posicionamos el lapiz
	lienzo.moveTo(200,180);
	//Realizamos el trazo
	lienzo.lineTo(230,100);
	lienzo.lineTo(260,180);
	//Metodo para dibujar solo el contorno
	lienzo.stroke();

	//Comenzamos a realizar los trazos
	lienzo.beginPath();
	//Establecemos un color al septimo trazo
	lienzo.strokeStyle="silver";
	//lineJoin: determina la forma de la conexión entre línea
	//Hacemos el uso del valor miter
	lienzo.lineJoin="miter";
	//Unicamente cuando hacemos uso de miter
	//Es posible hacer uso de la propiedad "miterLimit"
	lienzo.miterLimit=2;
	//Posicionamos el lapiz
	lienzo.moveTo(200,270);
	//Realizamos el trazo
	lienzo.lineTo(230,190);
	lienzo.lineTo(260,270);
	//Metodo para dibujar solo el contorno
	lienzo.stroke();

}
window.addEventListener("load", iniciar, false);
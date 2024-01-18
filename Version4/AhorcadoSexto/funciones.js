const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
//x, y , ancho ,alto
ctx.arc(150, 30, 20, 0, 2 * Math.PI);

//Cuerpo
ctx.moveTo(150, 50, 100, 250);
ctx.lineTo(150, 150, 100, 250);

//Brazo derecho
ctx.moveTo(150, 50, 100, 250);
ctx.lineTo(100, 80, 100, 250);

//Brazo izquierdo
ctx.moveTo(150, 50, 100, 250);
ctx.lineTo(200, 75, 100, 250);

//Pierna izquierda
ctx.moveTo(150, 150, 100, 250);
ctx.lineTo(195, 190, 100, 250);

//Pierna izquierda
ctx.moveTo(150, 150, 100, 250);
ctx.lineTo(100, 190, 100, 250);

//Poste
ctx.moveTo(80, 0, 100, 100);
ctx.lineTo(80, 200, 100, 250);

//Poste acostado
ctx.moveTo(80, 0, 100, 100);
ctx.lineTo(240, 0, 100, 100);

//Gancho
ctx.moveTo(150, 0, 100, 20);
ctx.lineTo(150, 10, 100, 150);

ctx.stroke();
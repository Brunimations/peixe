var ilustrador = document.getElementById("Canvas").getContext("2d");
var ilustradordois = document.getElementById("Canvas").getContext("2d");

//criação do gradiente e seu desenho
var grd=ilustrador.createRadialGradient(1000,555,55,999,66,1000);
function gradiente(){
    grd.addColorStop(0,"brown");
    grd.addColorStop(1,"#CD690A");
    gradienteDesenha();
}
function gradienteDesenha(){
    ilustrador.fillStyle = grd;
    ilustrador.fillRect(0,0,1920,1800);
}
gradiente();

//criação de linhas retas
function linhaReta(){
    ilustrador.moveTo(360,125);
    ilustrador.lineTo(1500,125);

    ilustrador.moveTo(360,960);
    ilustrador.lineTo(1500,960);

    ilustrador.strokeStyle="#ECB47F";
    ilustrador.stroke();
}
linhaReta();

//Criação de linhas com curvas bezier
function curvas(){
ilustrador.beginPath();
ilustrador.moveTo(650,175);
ilustrador.bezierCurveTo(650,300,450,300,450,380);
ilustrador.stroke();

ilustrador.beginPath();
ilustrador.moveTo(1210,175);
ilustrador.bezierCurveTo(1210,300,1410,300,1410,380);
ilustrador.stroke();

ilustrador.beginPath();
ilustrador.moveTo(1230,900);
ilustrador.bezierCurveTo(1230,750,1410,750,1410,700);
ilustrador.stroke();

ilustrador.beginPath();
ilustrador.moveTo(650,900);
ilustrador.bezierCurveTo(650,750,450,750,450,700);
ilustrador.stroke();
}
curvas();

//curvas quadradas
function curvaQuadrada(){
    ilustrador.beginPath();
    ilustrador.moveTo(360,110);
    ilustrador.quadraticCurveTo(100,110,100,350);
    ilustrador.stroke();

    ilustrador.beginPath();
    ilustrador.moveTo(1500,110);
    ilustrador.quadraticCurveTo(1760,110,1760,350);
    ilustrador.stroke();

    ilustrador.beginPath();
    ilustrador.moveTo(360,970);
    ilustrador.quadraticCurveTo(100,1080,100,730);
    ilustrador.stroke();

    ilustrador.beginPath();
    ilustrador.moveTo(1500,970);
    ilustrador.quadraticCurveTo(1760,1080,1760,730);
    ilustrador.stroke();
}
curvaQuadrada();

//Criação de formas em circulos
function circulosos(){
    ilustrador.beginPath();
    ilustrador.arc(200,550,175,0,2*Math.PI);
    ilustrador.stroke();

    ilustrador.beginPath();
    ilustrador.arc(1650,550,175,0,2*Math.PI);
    ilustrador.stroke();
}
circulosos();

const circle = new Path2D();
circle.arc(2000,1000,175,0,2*Math.PI);
ilustradordois.fillStyle="red";
ilustradordois.fill(circle);

//coloca a imagem no canvas
var peixereto=new Image();
function siteIniciado(){
    peixereto.src="fishreto.png";
    siteDesenha();
}
function siteDesenha(){
    requestAnimationFrame(siteDesenha);
    ilustrador.drawImage(peixereto,380,180,1023,723);
}
siteIniciado();
 //criação de texto
function le(){
    ilustrador.font="150px Comic sans ms";
    ilustrador.strokeStyle="black";
    ilustrador.strokeText("Le",120,600);
}
le();
function fish(){
    ilustrador.font="150px Comic sans ms";
    ilustrador.fillStyle = "black";
    ilustrador.fillText("fish",1500,600);
}
fish();

//muda a cor de um dos circulos quando o mouse estiver em sima de seu canvas
Canvas.addEventListener('mousemove',function(event){
    if(ilustradordois.isPointInPath,(circle,event.offsetX,event.offsetY)){
        ilustradordois.fillStyle="blue";
    }
    else{
        ilustradordois.fillStyle="red";
    }
    ilustradordois.fill(circle);
});
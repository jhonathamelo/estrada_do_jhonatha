var ator,carro1,carro2,carro3,estrada,carro4,carro5,carro6
var imagemcarro1,imagemcarro2,imagemcarro3,imagemcarro4,imagemcarro5,imagemcarro6,imagemator
var vidas,pontos

function preload(){
  
  imagemator = loadImage('imagens/ator-1.png')
  imagemcarro1 = loadImage('imagens/carro-1.png')
   imagemcarro2 = loadImage('imagens/carro-2.png') 
  imagemcarro3 = loadImage('imagens/carro-3.png')
   imagemcarro4 = loadImage('imagens/carro-1.png')
   imagemcarro5 = loadImage('imagens/carro-2.png')
  imagemcarro6 = loadImage('imagens/carro-3.png')
   estrada = loadImage('imagens/estrada.png') 
 
  
  
  
}

function setup(){
  createCanvas(600,350)
 
  
  carro1 = createSprite(580,50,20,20)
  carro1.addImage(imagemcarro1)
  carro1.scale=0.5
  
  carro2 = createSprite(580,100,20,20)
  carro2.addImage(imagemcarro2)
  carro2.scale=0.5
  
  carro3 = createSprite(580,150,20,20)
  carro3.addImage(imagemcarro3)
  carro3.scale=0.5
  
  carro4 = createSprite(580,200,20,20)
  carro4.addImage(imagemcarro1)
  carro4.scale=0.5
  
  carro5 = createSprite(580,250,20,20)
  carro5.addImage(imagemcarro2)
  carro5.scale=0.5
  
  carro6 = createSprite(580,300,20,20)
  carro6.addImage(imagemcarro3)
  carro6.scale=0.5
  
    ator = createSprite(280,335,20,20)
  ator.addImage(imagemator)
  ator.scale=0.2
   carro1.velocityX=-11
   carro2.velocityX=-7 
   carro3.velocityX=-13
   carro4.velocityX=-9
   carro5.velocityX=-12
   carro6.velocityX=-10
  
  vidas   = 3
  pontos = 0
}

function draw(){
  
  background(estrada)
   fill("red")
   text('pontos: '+ pontos,20,20)
    text('vidas: '+ vidas,500,20)
     
  if(carro1.x<0){
  carro1.x=600  
  }
     if(carro2.x<0){
  carro2.x=600 
     }
     if(carro3.x<0){
  carro3.x=600 
     }
     if(carro4.x<0){
  carro4.x=600 
     }
     if(carro5.x<0){
  carro5.x=600 
     }
     if(carro6.x<0){
  carro6.x=600
     }
  if(keyDown("DOWN")){
      ator.y = ator.y +5
  }

  
   if(keyDown("up")){
       ator.y = ator.y -5
   }

if(
  ator.isTouching(carro1)||
  ator.isTouching(carro2)||
  ator.isTouching(carro3)||
  ator.isTouching(carro4)||  
  ator.isTouching(carro5)||     
  ator.isTouching(carro6) 
  ) {
    vidas -=1
   ator.x =280
  ator.y =335 

}

  
       
  if(ator.y<0){
  ator.y=330  
    pontos += 1
  }
  
  
         
  if(ator.y>335){
  ator.y=335
 
  }
  
  
  
  if(vidas < 1)
{
     
  carro1.remove()
  carro2.remove()
  carro3.remove()
  carro4.remove()
  carro5.remove()
  carro6.remove()
  ator.remove()
  
  textSize(30)
  text('Game Over', 200,200)
     }  
  drawSprites()
     

  
}

// ação , comedia , terror, guerra

// o asilo , 14 , comedia 
// corações de ferro , 16 , guerrra 
// braven, 16, ação
// cães de ferro , 16, guerra
// morto não fala , 14, terror

let capoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInpute ("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = "corações de ferro";
 text(recomendacao, width / 2, height / 2);
}

function geraRecomdacao(idade) {
  if(idade >= 16) {
  if (idade>=14)
   return "Coração de ferro";
  } else {
   return "Morto não fala ";
   }
  
    
    
    
    
}  

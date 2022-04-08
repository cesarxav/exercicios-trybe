const peça = "BiSpO"

switch (peça.toLowerCase()) {
    case "rainha":
        console.log ("Sua peça: " + peça + " --> Se move em rodas as direções")
        break;

    case "bispo":
    console.log ("Sua peça: " + peça + " --> Anda na diagonal")
        break;
        
    case "peão":
    console.log ("Sua peça: " + peça + " --> Anda somente para frente")
        break;

    case "torre":
    console.log ("Sua peça: " + peça + " --> Anda para os lados, para frente e para trás")
        break;

    case "rei":
    console.log ("Sua peça: " + peça + " --> Anda uma casa em qualquer direção")
        break;

    case "cavalo" :
    console.log ("Sua peça: " + peça + " --> Anda em L")
        break;

    default:
    console.log ("Erro, peça inválida!")
        break;
};
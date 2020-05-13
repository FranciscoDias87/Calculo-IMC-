const calcularIMC = (peso, altura) => {

    // IMC é o resultado do PESO dividdo pelo quandrado da ALTURA
    const imc = peso / (altura*altura);
       
    // Testa para IMC para saber a Classificação e as Consequências
   let classificacao = "";
   let consequencia = "";
   if (imc >= 16 && imc < 17){
       classificacao = "Muito abaixo do peso";
       consequencia = "queda de cabelo, infertilidade, ausencia menstrual";
   }else if (imc >= 17.5 && imc < 18){
       classificacao = "abaixo do peso";
       consequencia = "fadiga, stress, ansiedade";
   }else if(imc >= 18.5 && imc < 25){
       classificacao = "peso normal";
       consequencia = "menor risco de doenças cardiacas e vasculares";
   }else if (imc >= 25.5 && imc < 30){
       classificacao = "acima do peso";
       consequencia = "fadiga, má circulação, varizes";
   }else if (imc >= 30.5 && imc < 35){
       classificacao = "Obsidade Grau I";
       consequencia = "Diabetes, angima, infarto, aterosclerose";
   }else if (imc >= 35.5 && imc <=40){
       classificacao = "Obsidade Grau II";
       consequencia = "apneia do sono, falta de ar";
   }else if(imc > 40){
       classificacao = "Obsidade Grau III";
       consequencia = 
            "Refluxo, dificuldade para se mover, escaras, diabetes, infarte, AVC";
   }
    return{
        imc, 
        classificacao, 
        consequencia
    };
};

export default calcularIMC;
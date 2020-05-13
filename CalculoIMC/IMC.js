import calcularIMC from "./calcularIMC.js";

class IMC{
    // função chamada a cada vez que pedimos que um novo calculo seja criado

    constructor(peso, altura){
        // this_peso e this_altura são properties do objeto que esta sendo criado
        // o uderline antes do nome da propriedade simboliza
        // que ela só deve ser acessada dentro da classe
        this._peso = peso;
        this._altura = altura;

        // armazenaremos a data de criação desse calculo
        this._data = new Date();
    }

    // função para calcular
    calcular(){
        // chamada para função calcularIMC
        const {imc, classificacao, consequencia} = calcularIMC(
            this.peso,
            this.altura
        );

        // atribuimos valores a properts do objeto
        this._imc = imc;
        this._classificacao = classificacao;
        this._consequencia =  consequencia;
    }

    // como nao queremos que as properties com "_" sejam manipuladas 
    // forneceremos GETTERS somente leitura para nossas variaveis
    get peso(){
        return this._peso;
    }
    get altura() {
        return this._altura;
    }
    get imc() {
       return this._imc;
    }
    get classificacao() {
        return this._classificacao;
    }
    get consequencia() {
        return this._consequencia;
    }
    get data() {
        return this._data;
    }
}
  
export default IMC;


class IMCHistory{
    constructor(){
        // cria lista atribuindo array vazio
        this._history = [];

        // busca no localstorage o histórico
        const historyJson = localStorage.getItem("imc-history");

        // caso o histórico ainda não exista encerra construtor
        if (historyJson === null) return;

        // faz o parse do JSON para o this._hostory
        this._history = JSON.parse(historyJson);

    }

    add(imc){
        // inclui novo objeto na lista
        this._history.push(imc);

        // transformar o this._history em JSON
        const historyJson = JSON.stringify(this._history);

        // escreve a lista no localstorage
        localStorage.setItem("imc-history", historyJson);
    }

    get history(){
        return this._history;
    }
}

export default IMCHistory;
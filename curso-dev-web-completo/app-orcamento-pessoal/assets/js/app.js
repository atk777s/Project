class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    };

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false;
            }
            return true;
        }
    }
};

class Bd {

    constructor() {
        let id = localStorage.getItem('id');

        if (id === null) {
            localStorage.setItem('id', 0);
        };
    };

    getNextId() {
        let nextId = localStorage.getItem('id');
        return parseInt(nextId) + 1;
    };
    gravar(d) {

        let id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem('id', id);

    };
};

let bd = new Bd();

function cadastraDespesa() {
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value,
    );


    
    if (despesa.validarDados()) {
        bd.gravar(despesa);
        $('#modalRegistraDespesa').modal('show');
        document.getElementById('title_modal_div').classList.add('modal-header text-success')
        document.getElementById('modal_title').classList.add('text-success').innerText = `Sucesso na gravação do registro`;
        document.getElementById('modal-corpo').innerText = `Despesa inserida com sucesso`;
        document.getElementById('btn-react').classList.add('btn-success');
    } else {
        $('#modalRegistraDespesa').modal('show');
        // dialog error
        document.getElementById('title_modal_div').classList.add('modal-header text-danger');
        document.getElementById('modal_title').classList.add('text-danger').innerText = `Error ao gravar registro`;
        document.getElementById('modal-corpo').innerText = `Volte e tente re-inserir os dados, pois são obrigatórios.`;
        document.getElementById('btn-react').classList.add('btn-danger').innerText;
    }
};

function Pessoa(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
}

function PessoaFisica(nome, endereco, cpf) {
    Pessoa.call(this, nome, endereco)
    this.cpf = cpf
}

function PessoaJuridica(nome, endereco, cnpj) {
    Pessoa.call(this, nome, endereco)
    this.cnpj = cnpj
}

const p = new Pessoa("francisco", "porto alegre")
const pf = new PessoaFisica("gabriela", "canoas", 123)
const pj = new PessoaJuridica("liga engenharia", "florianopolis", 123)

console.log(p)
console.log(pf)
console.log(pj)




let lista = window.document.getElementById('lista')
let formulario = window.document.getElementById('form')

const itens = JSON.parse(localStorage.getItem("listaDeCompras")) || []

itens.forEach((elemento) => {
    criaProduto(elemento)
})

function Processamento() {    
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault()

        let produto = evento.target.elements['produto'].value
        let quantidade = evento.target.elements['quantidade'].value

        const existe = itens.find(elemento => elemento.produto === produto.value)
        
        quantidade = parseInt(quantidade)

        if(localStorage.hasOwnProperty('listaDeCompras')){
            listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras"))
        }

        var prod = {
            produto: produto,
            quantidade: quantidade,
        }

        if(existe) {
            prod.id = existe.id

            atualizaElemento(prod)

            itens[itens.findIndex(elemento => elemento.id === existe.id)] = prod
        } else{
            prod.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

            criaProduto(prod)

            itens.push(prod)
        }

        produto = ''
        quantidade = ''

        localStorage.setItem("listaCompras", JSON.stringify(itens)) 
    })


    function criaProduto(prod) {
        const novoProduto = window.document.createElement("li")
        novoProduto.classList.add("prod")
        novoProduto.dataset.id = prod.id

        novoProduto.appendChild(botaoDeletar(prod, prod.id))

        const nomeProduto = window.document.createElement("strong")
        novoProduto.appendChild(nomeProduto)

        lista.appendChild(novoProduto)

        return (
            <li>
                `${prod.produto} x${prod.quantidade}`
            </li>
        )

    }


    function atualizaElemento(item) {
        document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
    }

    function botaoDeletar(id) {
        const botao = window.document.createElement("button")
        botao.innerHTML = "X"

        botao.addEventListener("click", function() {
            deletar(this.parentNode, id)
        })

        return botao
    }

    function deletar(tag, id) {
        tag.remove()

        itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

        localStorage.setItem("listaCompras", JSON.stringify(itens))

    }
}

export default Processamento
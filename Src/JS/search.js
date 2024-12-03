
//BARRA DE BUSCA
const search = document.getElementById("search");


search.addEventListener("input", (event)=>{
    const valorInput = event.target.value.toLowerCase();
    const produtos = Array.from(document.querySelectorAll(".produto"));

    produtos.forEach((produto)=>{
        const textProduto = produto.textContent.toLowerCase();

        if(textProduto.includes(valorInput)){
            produto.style.display = "";
        }else{
            produto.style.display = "none";
        }
    })
});

//CARRINHO DE COMPRAS
const quantidadeCards = document.getElementsByClassName("botaoADD");

for(let i =0; i<quantidadeCards.length; i++){
    quantidadeCards[i].addEventListener("click", addProdutoCarrinho);
}

function addProdutoCarrinho(event){
    const button = event.target;
    const produtoInfo = button.parentElement.parentElement;
    const produtoImagem = produtoInfo.getElementsByClassName("foto")[0].src;
    const produtoTitulo = produtoInfo.getElementsByClassName("descricao")[0].innerText;
    const produtoPreco = produtoInfo.getElementsByClassName("preco")[0].innerText;
    
}


//CARRINHO DE COMPRAS
const quantidadeCards = document.getElementsByClassName("botaoADD");
const inputQuantidade = document.getElementsByClassName("numItens");
const botaoRemove = document.getElementsByClassName("botaoRemove");

const conteudo = document.getElementById("conteudoCarrinho");

if (conteudo) {
  addProdutosOnTable();
  atualizarPreco();
}

for (let i = 0; i < quantidadeCards.length; i++) {
  quantidadeCards[i].addEventListener("click", addProdutoCarrinho);
}

for (let i = 0; i < inputQuantidade.length; i++) {
  inputQuantidade[i].addEventListener("input", atualizarPreco);
}

for (let i = 0; i < botaoRemove.length; i++) {
  botaoRemove[i].addEventListener("click", () => removerProdutoCarrinho(i));
}

function addProdutoCarrinho(event) {
  let produtosImagem = JSON.parse(
    localStorage.getItem("produtosImagem") || "[]"
  );
  let produtosTitulo = JSON.parse(
    localStorage.getItem("produtosTitulo") || "[]"
  );
  let produtosPreco = JSON.parse(localStorage.getItem("produtosPreco") || "[]");
  let produtosQuantidade = JSON.parse(
    localStorage.getItem("produtosQuantidade") || "[]"
  );

  const button = event.target;
  const produtoInfo = button.parentElement.parentElement;
  const produtoImagem = produtoInfo.getElementsByClassName("foto")[0].src;
  const produtoTitulo =
    produtoInfo.getElementsByClassName("descricao")[0].innerText;
  const produtoPreco = produtoInfo.getElementsByClassName("preco")[0].innerText;

  // Verifica se o produto já existe no carrinho
  const index = produtosTitulo.indexOf(produtoTitulo);

  if (index === -1) {
    // Se o produto não está no carrinho, adiciona o novo produto
    produtosImagem.push(produtoImagem);
    produtosTitulo.push(produtoTitulo);
    produtosPreco.push(produtoPreco);
    produtosQuantidade.push(1); // Inicia a quantidade como 1
  } else {
    // Se o produto já está no carrinho, aumenta a quantidade
    produtosQuantidade[index]++;
  }

  localStorage.setItem("produtosImagem", JSON.stringify(produtosImagem));
  localStorage.setItem("produtosTitulo", JSON.stringify(produtosTitulo));
  localStorage.setItem("produtosPreco", JSON.stringify(produtosPreco));
  localStorage.setItem(
    "produtosQuantidade",
    JSON.stringify(produtosQuantidade)
  );
}

function addProdutosOnTable() {
  let produtosImagem = JSON.parse(
    localStorage.getItem("produtosImagem") || "[]"
  );
  let produtosTitulo = JSON.parse(
    localStorage.getItem("produtosTitulo") || "[]"
  );
  let produtosPreco = JSON.parse(localStorage.getItem("produtosPreco") || "[]");
  let produtosQuantidade = JSON.parse(
    localStorage.getItem("produtosQuantidade") || "[]"
  );

  for (let i = 0; i < produtosImagem.length; i++) {
    let novoProduto = document.createElement("tr");
    novoProduto.classList.add("linhaTabela");
    novoProduto.innerHTML = `
        <td class="fotoProduto"><img src="${produtosImagem[i]}" alt="Imagem do produto"><p>${produtosTitulo[i]}</p></td>
        <td class="precoProduto">${produtosPreco[i]}</td>
        <td class="quantidade">
          <input type="number" class="numItens" min="1" value="${produtosQuantidade[i]}"/>
          <button class="botaoRemove">Remover</button>
        </td>
      `;

    const corpoTabela = document.querySelector(".itens tbody");
    corpoTabela.appendChild(novoProduto);
  }
}

function atualizarPreco() {
  const produtos = document.getElementsByClassName("linhaTabela");
  const pTotal = document.querySelector("#conteudoCarrinho .total");

  let produtosPreco = JSON.parse(localStorage.getItem("produtosPreco") || "[]");

  let totalAmount = 0;

  for (let i = 0; i < produtos.length; i++) {
    const preco = produtos[i].getElementsByClassName("precoProduto")[0].innerText.replace("R$", "").replace(",", ".");
    const quantidade = produtos[i].getElementsByClassName("numItens")[0].value;

    totalAmount += preco * quantidade;
  }

  pTotal.innerText = `Total: R$ ${totalAmount.toFixed(2)}`.replace(".", ",");
}

function removerProdutoCarrinho(produtoIndex) {
    let produtosImagem = JSON.parse(localStorage.getItem("produtosImagem") || "[]");
    let produtosTitulo = JSON.parse(localStorage.getItem("produtosTitulo") || "[]");
    let produtosPreco = JSON.parse(localStorage.getItem("produtosPreco") || "[]");
    let produtosQuantidade = JSON.parse(localStorage.getItem("produtosQuantidade") || "[]");
  
    // Remove o produto dos arrays
    produtosImagem.splice(produtoIndex, 1);
    produtosTitulo.splice(produtoIndex, 1);
    produtosPreco.splice(produtoIndex, 1);
    produtosQuantidade.splice(produtoIndex, 1);
  
    // Atualiza o localStorage com os novos dados
    localStorage.setItem("produtosImagem", JSON.stringify(produtosImagem));
    localStorage.setItem("produtosTitulo", JSON.stringify(produtosTitulo));
    localStorage.setItem("produtosPreco", JSON.stringify(produtosPreco));
    localStorage.setItem("produtosQuantidade", JSON.stringify(produtosQuantidade));
  
    // Recarrega a página para atualizar a visualização
    window.location.reload();
  }

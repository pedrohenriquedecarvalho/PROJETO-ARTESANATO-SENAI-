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
})
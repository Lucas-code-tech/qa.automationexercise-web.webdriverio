import { $ } from '@wdio/globals'

class AbaProduto {
    public get ValidarAbaTodosOsProdutos () {
        return $('div[class="features_items"]');
    }
    public get BtnAbaProdutos () {
        return $('i[class="material-icons card_travel"]');
    }
    public get InputProcurarProdutos () {
        return $('input[id="search_product"]');
    }
    public get BtnProcurarProdutos (){
        return $('button[id="submit_search"]')
    }
    public get ModalProdutosPesquisados (){
        return $('div[class="features_items"]')
    }
    public get ProdutoPesquisado (){
        return $('div[class="product-image-wrapper"]')
    }
    public get VisualizarProdutoHome (){
        return $('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.choose > ul > li > a') //Vale pensar em alguma alternativa de melhorar esse seletor/componente, para que não seja tão genérico
    }
    public get BtnVerProduto (){
        return $('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.choose')
    }
    public get ValidarDetalheDoProduto (){
        return $('div[class="product-information"]')
    }
    public get AdicionarQuantidadeDoProduto (){
        return $('input[id="quantity"]')
    }
    public get BtnClicarNoCarrinho (){
        return $('button[class="btn btn-default cart"]')
    }
    public get BtnContinuarComprando (){
        return $('button[class="btn btn-success close-modal btn-block"]')
    }

    public get ValidarModalDeAdicionado (){
        return $('div[class="modal-content"]')
    }
    public get BtnEntrarNoCarrinho (){
        return $('#cartModal > div > div > div.modal-body > p:nth-child(2) > a')
    }
    public get VisualizarCarrinhoEQuantidadeDoProduto (){
        return $('#product-1 > td.cart_quantity > button > font > font')
    }
    public get BtnHouverAoCarrinhoItem1 (){
        return $('a[data-product-id="1"]')
    }
    public get BtnClickAoCarrinhoItem1 (){
        return $('a[data-product-id="1"]')
    }
    public get BtnHouverAoCarrinhoItem2 (){
        return $('a[data-product-id="2"]')
    }
    public get BtnClickAoCarrinhoItem2 (){
        return $('a[data-product-id="2"]')
    }
    public get ValidarItemAdicionadoNoCarrinho1 (){
        return $('tr[id="product-1"]')
    }
    public get ValidarItemAdicionadoNoCarrinho2 (){
        return $('tr[id="product-2"]')
    }
    public get BtnExclusãoItem1 (){
        return $('#product-1 > td.cart_delete > a')
    }
    public get BtnExclusãoItem2 (){
        return $('#product-2 > td.cart_delete > a')
    }
    public get ValidarExclusãoDeTodosItens (){
        return $('span[id="empty_cart"]')
    }
    


    public async ProcurarProduto (NomeDoProduto: string) {
        await this.BtnAbaProdutos.click();
        await expect(this.ValidarAbaTodosOsProdutos).toBeExisting();
        await this.InputProcurarProdutos.setValue(NomeDoProduto)
        await this.BtnProcurarProdutos.click();
        await expect(this.ModalProdutosPesquisados).toBeExisting();
        await expect(this.ProdutoPesquisado).toBeExisting();
       
    }
    public async ValidarItens_Preco_Quantidade_E_Preço_Total_Dos_Produtos () {
        await expect(this.ValidarItemAdicionadoNoCarrinho1).toBeExisting();
        await expect(this.ValidarItemAdicionadoNoCarrinho2).toBeExisting();
        const caminhoValorProd1 = await $('#product-1 > td.cart_price');
        await caminhoValorProd1.waitForExist({timeout:5000});
        const valorProd1 = await caminhoValorProd1.getText();
        expect(valorProd1).toBe('Rs. 500');
        const caminhoValorTotalProd1 = await $('#product-1 > td.cart_total');
        await caminhoValorTotalProd1.waitForExist({timeout:5000});
        const ValorTotalProd1 = await caminhoValorTotalProd1.getText();
        expect(ValorTotalProd1).toBe('Rs. 500');
        const caminhoQuantidadeProd1 = await $('#product-1 td.cart_quantity > button.disabled');
        await caminhoQuantidadeProd1.waitForExist({timeout:5000});
        const NumeroQuantidadeProd1 = await caminhoQuantidadeProd1.getText();
        expect(NumeroQuantidadeProd1).toBe('1');
        const caminhoValorProd2 = await $('#product-2 > td.cart_price');
        await caminhoValorProd2.waitForExist({timeout:5000});
        const valorProd2 = await caminhoValorProd2.getText();
        expect(valorProd2).toBe('Rs. 400');
        const caminhoValorTotalProd2 = await $('#product-2 > td.cart_total');
        await caminhoValorTotalProd2.waitForExist({timeout:5000});
        const ValorTotalProd2 = await caminhoValorTotalProd2.getText();
        expect(ValorTotalProd2).toBe('Rs. 400');
        const caminhoQuantidadeProd2 = await $('#product-2 td.cart_quantity > button.disabled');
        await caminhoQuantidadeProd2.waitForExist({timeout:5000});
        const NumeroQuantidadeProd2 = await caminhoQuantidadeProd2.getText();
        expect(NumeroQuantidadeProd2).toBe('1');
       
    }
}

export default new AbaProduto();
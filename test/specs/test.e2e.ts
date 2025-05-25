import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import produtosPage from '../pageobjects/produtos.page.js'

describe('Testes E2E', () => {
    beforeEach(async () => {
        await LoginPage.open()
        await expect(LoginPage.validarAberturaSite).toBeExisting()
    })
    it('Caso de teste 1: Registrar usuário', async () => {
        const email = 'webdriverIoTestLucas4@gmail.com'
        const nomeUsuario = 'Lucas Souza QA'
        const primeiroNome = 'Lucas'
        const sobrenome = 'Souza'
        await LoginPage.CadastrarUsuario(nomeUsuario, email, primeiroNome, sobrenome)
    })
    it('Caso de teste 9: Pesquisar produto', async () => {
        const ProdutoQueDesejaProcurar = 'Blue Top'
        await produtosPage.ProcurarProduto(ProdutoQueDesejaProcurar);

    })

    it('Caso de teste 13: Verificar a quantidade do produto no carrinho', async () => {
        await expect(produtosPage.VisualizarProdutoHome).toBeExisting();
        await produtosPage.BtnVerProduto.click();
        await produtosPage.ValidarDetalheDoProduto.click();
        // await expect(produtosPage.ValidarDetalheDoProduto).toBeExisting();
        await produtosPage.AdicionarQuantidadeDoProduto.setValue('4')
        await produtosPage.BtnClicarNoCarrinho.click()
        await expect(produtosPage.ValidarModalDeAdicionado).toBeExisting();
        await produtosPage.BtnEntrarNoCarrinho.click();
        const caminhoBotaoQuantidade = await $('#product-1 td.cart_quantity > button.disabled');
        await caminhoBotaoQuantidade.waitForExist({ timeout: 5000 });

        const texto = await caminhoBotaoQuantidade.getText();
        expect(texto).toBe('4');
    })
    it('Caso de teste 12: Adicionar produtos ao carrinho', async () => {
        await produtosPage.BtnAbaProdutos.click();
        await expect(produtosPage.ValidarAbaTodosOsProdutos).toBeExisting();
        await produtosPage.BtnHouverAoCarrinhoItem1.moveTo();
        await produtosPage.BtnClickAoCarrinhoItem1.click();
        await expect(produtosPage.ValidarModalDeAdicionado).toBeExisting();
        await produtosPage.BtnContinuarComprando.click();
        await produtosPage.BtnHouverAoCarrinhoItem2.moveTo();
        await produtosPage.BtnClickAoCarrinhoItem2.click();
        await expect(produtosPage.ValidarModalDeAdicionado).toBeExisting();
        await produtosPage.BtnEntrarNoCarrinho.click();
        await produtosPage.ValidarItens_Preco_Quantidade_E_Preço_Total_Dos_Produtos();
        

    })
    it.only('Caso de teste 17: Remover produtos do carrinho', async () => {
        await produtosPage.BtnAbaProdutos.click();
        await expect(produtosPage.ValidarAbaTodosOsProdutos).toBeExisting();
        await produtosPage.BtnHouverAoCarrinhoItem1.moveTo();
        await produtosPage.BtnClickAoCarrinhoItem1.click();
        await expect(produtosPage.ValidarModalDeAdicionado).toBeExisting();
        await produtosPage.BtnContinuarComprando.click();
        await produtosPage.BtnHouverAoCarrinhoItem2.moveTo();
        await produtosPage.BtnClickAoCarrinhoItem2.click();
        await expect(produtosPage.ValidarModalDeAdicionado).toBeExisting();
        await produtosPage.BtnEntrarNoCarrinho.click();
        await produtosPage.ValidarItens_Preco_Quantidade_E_Preço_Total_Dos_Produtos(); //Essa função também valida se a página do carrinho é exibida
        await produtosPage.BtnExclusãoItem1.click();
        await produtosPage.BtnExclusãoItem2.click();
        await expect(produtosPage.ValidarExclusãoDeTodosItens).toBeExisting();
        
    })


})


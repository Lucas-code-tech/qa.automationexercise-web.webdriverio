import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }
    public get validarAberturaSite (){
        return $('div[id="slider-carousel"]')
    }
    public get btnSignupLogin (){
        return $('i[class="fa fa-lock"]')
    }
    public get btnNomeUsuario (){
        return $('input[data-qa="signup-name"]')
    }
    public get btnEmailUsuario (){
        return $('input[data-qa="signup-email"]')
    }
    public get btnInscreverSe (){
        return $('button[data-qa="signup-button"]')
    }
    public get selecionarMr (){
        return $('input[id="id_gender1"]')
    }
    public get selecionarMrs (){
        return $('input[id="id_gender2"]')
    }
    public get InputSenha (){
        return $('input[data-qa="password"]')
    }
    public get InputData (){
        return $('div[id="uniform-days"]')
    }
    public get InputMarcarDia (){
        return $('#days > option:nth-child(16)')
    } 
    public get InputMes (){
        return $('select[data-qa="months"]')
    }
    public get InputMarcarMes (){
        return $('#months > option:nth-child(10)')
    }
    public get InputAno (){
        return $('div[id="uniform-years"]')
    }
    public get InputMarcarAno (){
        return $('#years > option:nth-child(24)')
    }
    public get InputPrimeiroNome (){
        return $('input[data-qa="first_name"]')
    }
    public get InputSobrenomeNome (){
        return $('input[data-qa="last_name"]')
    }
    public get InputEmpresa (){
        return $('input[data-qa="company"]')
    } 
    public get InputEndereco (){
        return $('input[data-qa="address"]')
    }
    public get InputEnderecoDois (){
        return $('input[data-qa="address2"]')
    }
    public get InputPais (){
        return $('select[data-qa="country"]')
    } 
    public get SelecionarPaisEstadosUnidos (){
        return $('#country > option:nth-child(2)')
    }
    public get InputEstado (){
        return $('input[data-qa="state"]')
    } //
    public get InputCidade (){
        return $('input[data-qa="city"]')
    }
    public get InputCEP (){
        return $('input[data-qa="zipcode"]')
    }
    public get InputNumeroDeTelefone (){
        return $('input[data-qa="mobile_number"]')
    }
    public get BtnCriarConta (){
        return $('Button[data-qa="create-account"]')
    }
    public get ExpectValidarCriaçãoUsuario (){
        return $('h2[data-qa="account-created"]')
    }

    public async CadastrarUsuario (nomeUsuario: string, email: string, primeroNome: string, sobrenome: string) {
        await this.btnSignupLogin.click()
        await this.btnNomeUsuario.setValue(nomeUsuario)
        await this.btnEmailUsuario.setValue(email)
        await this.btnInscreverSe.click()
        await expect(this.selecionarMr).toBeExisting()
        await this.selecionarMrs.click()
        await this.inputPassword.setValue('Teste@123')
        await this.InputData.click()
        await this.InputMarcarDia.click()
        await this.InputMes.click()
        await this.InputMarcarMes.click()
        await this.InputAno.click()
        await this.InputMarcarAno.click()
        await this.InputPrimeiroNome.setValue(primeroNome)
        await this.InputSobrenomeNome.setValue(sobrenome)
        await this.InputEmpresa.setValue('Empresa Teste')
        await this.InputEndereco.setValue('Rua testado , 22')
        await this.InputEnderecoDois.setValue('Rua QA , 150')
        await this.InputPais.click()
        await this.SelecionarPaisEstadosUnidos.click()
        await this.InputEstado.setValue('Texas')
        await this.InputCidade.setValue('Houston')
        await this.InputCEP.setValue('77036')
        await this.InputNumeroDeTelefone.setValue('11984329938')
        await this.BtnCriarConta.click()
        await expect(this.ExpectValidarCriaçãoUsuario).toBeExisting()
    }


    public open () {
        return super.open();
    }
}

export default new LoginPage();


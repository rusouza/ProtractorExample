describe('Logar e Validar login no Facebook', function() {
    
    var email = element(by.id('email'));
    var senha = element(by.id('pass'));
    var paginaInicial = element(by.xpath("//div[@data-click='home_icon']"));
    var goButton = element(by.xpath("//label[@id='loginbutton']/input"));

    beforeEach(function() {
        browser.get('https://www.facebook.com/');
    });

    it('Verificar Titulo', function() {
        expect(browser.getTitle()).toEqual('Facebook – entre ou cadastre-se');
    });

    it('Logar no Facebook', function() {

        // login e senha do facebook
        email.sendKeys("");
        senha.sendKeys("");

        goButton.click();
    
        expect(paginaInicial.getText()).toEqual("Página inicial");
    });

});
describe('angularjs homepage todo list', function() {
    
    var email = element(by.id('email'));
    var senha = element(by.id('pass'));
    var paginaInicial = element(by.dataclick('home_icon'));
    var goButton = element(by.xpath("//label[@id='loginbutton']/input"));

    beforeEach(function() {
        browser.get('https://www.facebook.com/');
    });

    function login(a, b) {
        email.sendKeys(a);
        senha.sendKeys(b);
        goButton.click();
    }

    it('Logar no Facebook', function() {
        browser.debugger();

        // login e senha do facebook
        login("", "");
    
        expect(paginaInicial.getText()).toEqual("Página inicial");
    });

    it('Verificar Titulo', function() {
        expect(browser.getTitle()).toEqual('Facebook – entre ou cadastre-se');
    });
    
});
describe('angularjs homepage todo list', function() {
    
    var email = element(by.id('email'));
    var senha = element(by.id('pass'));
    var goButton = element(by.xpath("//label[@id='loginbutton']/input"));

    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

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
    
        expect(history.count()).toEqual(2);
    });

    it('Verificar Titulo', function() {
        expect(browser.getTitle()).toEqual('Facebook – entre ou cadastre-se');
    });
    
});
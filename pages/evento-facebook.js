describe('angularjs homepage todo list', function() {

    var linkEventos = element(by.xpath("//div[text()='Eventos']"));
    var linkAniversario = element(by.xpath("//span[text()='Aniversários']/.."));

    it('Mandar mensagem', function() {
        linkEventos.click();
        linkAniversario.click();

    }); 

});
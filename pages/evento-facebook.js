describe('Enviar Mensagem de Aniversário', function() {

    var linkEventos = element(by.css("a[data-testid='left_nav_item_Eventos']"));
    var linkAniversario = element(by.xpath("//span[text()='Aniversários']/.."));
    var labelEventos = element(by.xpath("(//span[text()='Eventos'])[1]"));
    var divBlock = element(by.xpath("//div[@class='_3ixn']"));

    it('clicar em eventos', function() {
        browser.refresh();
        divBlock.click();
        linkEventos.click();
        browser.driver.sleep(3000);
        expect(labelEventos.getText()).toEqual("Eventos");
    }); 

    it('Mandar mensagem', function() {
        browser.driver.sleep(999000);
        linkAniversario.click();
    });

});
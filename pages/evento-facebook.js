describe('Enviar Mensagem de Aniversário', function() {

    var linkEventos = element(by.css("a[data-testid='left_nav_item_Eventos']"));
    var linkAniversario = element(by.xpath("//span[text()='Aniversários']/.."));
    var labelEventos = element(by.xpath("(//span[text()='Eventos'])[1]"));
    var divBlock = element(by.xpath("//div[@class='_3ixn']"));
    var aniversarianteDia = element(by.xpath("//span[text()='Aniversariantes do dia']"));
    var contAniversariante = element(by.xpath("//textarea[contains(text(),'Dê os parabéns na linha do tempo dele...')]"));

    it('clicar em eventos', function() {
        browser.refresh();
        divBlock.click();
        linkEventos.click();
        browser.driver.sleep(3000);
        expect(labelEventos.getText()).toEqual("Eventos");
    }); 

    it('Mandar mensagem', function() {
        linkAniversario.click();
       
        if(aniversarianteDia.isPresent()) {
            console.log("Teste");
        }
        browser.driver.sleep(999000);
    });

});
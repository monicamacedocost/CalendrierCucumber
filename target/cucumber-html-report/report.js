$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Fale_Conosco.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "Usuário vai preencher o formulário de contato da landing do Calendrier, o objetivo é enviar os dados com sucesso.",
  "id": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Enviar o formulário Fale Conosco com sucesso",
  "description": "",
  "id": ";enviar-o-formulário-fale-conosco-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@landing_faleconosco_envio_sucesso"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "que eu acesso a página da landing \"http://www.hml.calendrier.com.br/contato/\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "eu preencho o nome \"Monica Costa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "eu preencho o e-mail \"monica.costa@savoir.com.br\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "eu preencho o telefone \"(11) 96305-3582\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "eu preencho o assunto \"Teste Cucumber\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "eu preencho a mensagem \"Teste Cucumber\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "eu devo ver a mensagem de confirmação \"Seu e-mail foi enviado com sucesso!\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hml.calendrier.com.br/contato/",
      "offset": 35
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.que_eu_acesso_a_página_da_landing(String)"
});
formatter.result({
  "duration": 14043148350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica Costa",
      "offset": 20
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_nome(String)"
});
formatter.result({
  "duration": 861770049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "monica.costa@savoir.com.br",
      "offset": 22
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_e_mail(String)"
});
formatter.result({
  "duration": 932907951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(11) 96305-3582",
      "offset": 24
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_telefone(String)"
});
formatter.result({
  "duration": 188493289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Cucumber",
      "offset": 23
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_assunto(String)"
});
formatter.result({
  "duration": 209694994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Cucumber",
      "offset": 24
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_a_mensagem(String)"
});
formatter.result({
  "duration": 8747484225,
  "status": "passed"
});
formatter.match({
  "location": "Page_Landing_Fale_Conosco_Steps.clico_em_enviar()"
});
formatter.result({
  "duration": 8204003603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seu e-mail foi enviado com sucesso!",
      "offset": 39
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_devo_ver_a_mensagem_de_confirmação(String)"
});
formatter.result({
  "duration": 27624782120,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enviar o formulário Fale Conosco com erro no e-mail",
  "description": "",
  "id": ";enviar-o-formulário-fale-conosco-com-erro-no-e-mail",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 20,
      "name": "@landing_faleconosco_erro_email"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "que eu acesso a página da landing \"http://www.hml.calendrier.com.br/contato/\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "eu preencho o nome \"Monica Costa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "eu preencho o e-mail \"monica.costasavoir.com.br\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "eu preencho o telefone \"(11) 96305-3582\"",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "eu preencho o assunto \"Teste Cucumber\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "eu preencho a mensagem \"Teste Cucumber\"",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "eu devo ver a mensagem de erro \"Por favor, forneça um endereço de email válido.\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hml.calendrier.com.br/contato/",
      "offset": 35
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.que_eu_acesso_a_página_da_landing(String)"
});
formatter.result({
  "duration": 15207882677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica Costa",
      "offset": 20
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_nome(String)"
});
formatter.result({
  "duration": 839536888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "monica.costasavoir.com.br",
      "offset": 22
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_e_mail(String)"
});
formatter.result({
  "duration": 240268316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(11) 96305-3582",
      "offset": 24
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_telefone(String)"
});
formatter.result({
  "duration": 367559796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Cucumber",
      "offset": 23
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_o_assunto(String)"
});
formatter.result({
  "duration": 146105701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Cucumber",
      "offset": 24
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_preencho_a_mensagem(String)"
});
formatter.result({
  "duration": 8910008108,
  "status": "passed"
});
formatter.match({
  "location": "Page_Landing_Fale_Conosco_Steps.clico_em_enviar()"
});
formatter.result({
  "duration": 8206467634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Por favor, forneça um endereço de email válido.",
      "offset": 32
    }
  ],
  "location": "Page_Landing_Fale_Conosco_Steps.eu_devo_ver_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 9075055464,
  "status": "passed"
});
});
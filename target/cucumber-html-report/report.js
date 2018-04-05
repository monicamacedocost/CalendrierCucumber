$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calendrier.feature");
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
  "location": "CalendrierSteps.que_eu_acesso_a_página_da_landing(String)"
});
formatter.result({
  "duration": 11176680858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica Costa",
      "offset": 20
    }
  ],
  "location": "CalendrierSteps.eu_preencho_o_nome(String)"
});
formatter.result({
  "duration": 169345652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "monica.costa@savoir.com.br",
      "offset": 22
    }
  ],
  "location": "CalendrierSteps.eu_preencho_o_e_mail(String)"
});
formatter.result({
  "duration": 163015384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(11) 96305-3582",
      "offset": 24
    }
  ],
  "location": "CalendrierSteps.eu_preencho_o_telefone(String)"
});
formatter.result({
  "duration": 149430733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Cucumber",
      "offset": 23
    }
  ],
  "location": "CalendrierSteps.eu_preencho_o_assunto(String)"
});
formatter.result({
  "duration": 130463025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Cucumber",
      "offset": 24
    }
  ],
  "location": "CalendrierSteps.eu_preencho_a_mensagem(String)"
});
formatter.result({
  "duration": 121581921,
  "status": "passed"
});
formatter.match({
  "location": "CalendrierSteps.clico_em_enviar()"
});
formatter.result({
  "duration": 5110298369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seu e-mail foi enviado com sucesso!",
      "offset": 39
    }
  ],
  "location": "CalendrierSteps.eu_devo_ver_a_mensagem_de_confirmação(String)"
});
formatter.result({
  "duration": 15415362240,
  "status": "passed"
});
});
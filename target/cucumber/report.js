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
  "keyword": "Cenario",
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
  "location": "CalendrierSteps.acessar_landing_faleconosco(String)"
});
formatter.result({
  "duration": 16680891771,
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
  "duration": 148243622,
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
  "duration": 167249817,
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
  "duration": 139646039,
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
  "duration": 117183705,
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
  "duration": 117364594,
  "status": "passed"
});
formatter.match({
  "location": "CalendrierSteps.clico_em_enviar()"
});
formatter.result({
  "duration": 116967749,
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
  "duration": 11457318273,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Enviar o formulário Fale Conosco com erro no e-mail",
  "description": "",
  "id": ";enviar-o-formulário-fale-conosco-com-erro-no-e-mail",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 19,
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
  "name": "eu preencho o nome errado \u003cnome\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "eu preencho o e-mail \u003cemail\u003e",
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
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": ";enviar-o-formulário-fale-conosco-com-erro-no-e-mail;",
  "rows": [
    {
      "cells": [
        "nome",
        "email"
      ],
      "line": 32,
      "id": ";enviar-o-formulário-fale-conosco-com-erro-no-e-mail;;1"
    },
    {
      "cells": [
        "Monica Costa",
        "monica.costa.com.br"
      ],
      "line": 33,
      "id": ";enviar-o-formulário-fale-conosco-com-erro-no-e-mail;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 33,
  "name": "Enviar o formulário Fale Conosco com erro no e-mail",
  "description": "",
  "id": ";enviar-o-formulário-fale-conosco-com-erro-no-e-mail;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 19,
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
  "name": "eu preencho o nome errado Monica Costa",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "eu preencho o e-mail monica.costa.com.br",
  "matchedColumns": [
    1
  ],
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
  "location": "CalendrierSteps.acessar_landing_faleconosco(String)"
});
formatter.result({
  "duration": 12893472508,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CalendrierSteps.clico_em_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Por favor, forneça um endereço de email válido.",
      "offset": 32
    }
  ],
  "location": "CalendrierSteps.eu_devo_ver_a_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
});
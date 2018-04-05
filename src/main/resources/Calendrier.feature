#language: pt

Funcionalidade: 
  Usuário vai preencher o formulário de contato da landing do Calendrier, o objetivo é enviar os dados com sucesso.

@landing_faleconosco_envio_sucesso

  Cenário: Enviar o formulário Fale Conosco com sucesso
    Dado que eu acesso a página da landing "http://www.hml.calendrier.com.br/contato/"
    Quando eu preencho o nome "Monica Costa"
    E eu preencho o e-mail "monica.costa@savoir.com.br"
    E eu preencho o telefone "(11) 96305-3582"
    E eu preencho o assunto "Teste Cucumber"
    E eu preencho a mensagem "Teste Cucumber"
    E clico em enviar
    Então eu devo ver a mensagem de confirmação "Seu e-mail foi enviado com sucesso!"
  
        
    
@landing_faleconosco_erro_email
  Cenario: Enviar o formulário Fale Conosco com erro no e-mail
   Dado que eu acesso a página da landing "http://www.hml.calendrier.com.br/contato/"
    Quando eu preencho o nome "Monica Costa"
     E eu preencho o e-mail "monica.costasavoir.com.br"
   	 E eu preencho o telefone "(11) 96305-3582"
     E eu preencho o assunto "Teste Cucumber"
     E eu preencho a mensagem "Teste Cucumber"
     E clico em enviar
     Então eu devo ver a mensagem de erro "Por favor, forneça um endereço de email válido."
	
    
		
    
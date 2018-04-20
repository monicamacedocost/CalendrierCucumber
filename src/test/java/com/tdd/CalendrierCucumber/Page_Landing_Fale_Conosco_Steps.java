package com.tdd.CalendrierCucumber;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class Page_Landing_Fale_Conosco_Steps{

	Page_Landing_Fale_Conosco Page_Landing_Fale_Conosco = new Page_Landing_Fale_Conosco();

	//landing_faleconosco_sucesso

	@Dado("^que eu acesso a página da landing \"([^\"]*)\"$")
	public void que_eu_acesso_a_página_da_landing(String arg1)  {
		Page_Landing_Fale_Conosco.acessar_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho o nome \"([^\"]*)\"$")
	public void eu_preencho_o_nome(String arg1)  {
		Page_Landing_Fale_Conosco.preencher_nome_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho o e-mail \"([^\"]*)\"$")
	public void eu_preencho_o_e_mail(String arg1) {
		Page_Landing_Fale_Conosco.preencher_email_landing_faleconosco(arg1);

	}

	@Quando("^eu preencho o telefone \"([^\"]*)\"$")
	public void eu_preencho_o_telefone(String arg1) {
		Page_Landing_Fale_Conosco.preencher_telefone_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho o assunto \"([^\"]*)\"$")
	public void eu_preencho_o_assunto(String arg1) {
		Page_Landing_Fale_Conosco.preencher_assunto_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho a mensagem \"([^\"]*)\"$")
	public void eu_preencho_a_mensagem(String arg1) {
		Page_Landing_Fale_Conosco.preencher_mensagem_landing_faleconosco(arg1);
	}

	@Quando("^clico em enviar$")
	public void clico_em_enviar() {
		Page_Landing_Fale_Conosco.enviar_landing_faleconosco();
	}

	@Então("^eu devo ver a mensagem de confirmação \"([^\"]*)\"$")
	public void eu_devo_ver_a_mensagem_de_confirmação(String arg1) {
		Page_Landing_Fale_Conosco.eu_devo_ver_a_mensagem_de_confirmação(arg1);
	}

	//landing_faleconosco_erro_email

	@Quando("^eu preencho o e-mail <email>$")
	public void eu_preencho_o_e_mail_email() {
		Page_Landing_Fale_Conosco.eu_preencho_o_e_mail_email();
	}

	@Então("^eu devo ver a mensagem de erro \"([^\"]*)\"$")
	public void eu_devo_ver_a_mensagem_de_erro(String arg1){
		Page_Landing_Fale_Conosco.eu_devo_ver_a_mensagem_de_erro(arg1);
	}
}

package com.tdd.CalendrierCucumber;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class CalendrierSteps{

	CalendrierPage CalendrierPage = new CalendrierPage();

	//landing_faleconosco_sucesso

	@Dado("^que eu acesso a página da landing \"([^\"]*)\"$")
	public void que_eu_acesso_a_página_da_landing(String arg1)  {
		CalendrierPage.acessar_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho o nome \"([^\"]*)\"$")
	public void eu_preencho_o_nome(String arg1)  {
		CalendrierPage.preencher_nome_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho o e-mail \"([^\"]*)\"$")
	public void eu_preencho_o_e_mail(String arg1) {
		CalendrierPage.preencher_email_landing_faleconosco(arg1);

	}

	@Quando("^eu preencho o telefone \"([^\"]*)\"$")
	public void eu_preencho_o_telefone(String arg1) {
		CalendrierPage.preencher_telefone_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho o assunto \"([^\"]*)\"$")
	public void eu_preencho_o_assunto(String arg1) {
		CalendrierPage.preencher_assunto_landing_faleconosco(arg1);
	}

	@Quando("^eu preencho a mensagem \"([^\"]*)\"$")
	public void eu_preencho_a_mensagem(String arg1) {
		CalendrierPage.preencher_mensagem_landing_faleconosco(arg1);
	}

	@Quando("^clico em enviar$")
	public void clico_em_enviar() {
		CalendrierPage.enviar_landing_faleconosco();
	}

	@Então("^eu devo ver a mensagem de confirmação \"([^\"]*)\"$")
	public void eu_devo_ver_a_mensagem_de_confirmação(String arg1) {
		CalendrierPage.eu_devo_ver_a_mensagem_de_confirmação(arg1);
	}

	//landing_faleconosco_erro_email

	@Quando("^eu preencho o e-mail <email>$")
	public void eu_preencho_o_e_mail_email() {
		CalendrierPage.eu_preencho_o_e_mail_email();
	}

	@Então("^eu devo ver a mensagem de erro \"([^\"]*)\"$")
	public void eu_devo_ver_a_mensagem_de_erro(String arg1){
		CalendrierPage.eu_devo_ver_a_mensagem_de_erro(arg1);
	}
}

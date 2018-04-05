package com.tdd.CalendrierCucumber;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CalendrierPage {
	WebDriver driver;

	public void acessar_landing_faleconosco(String arg1){
		driver = new ChromeDriver();
		driver.get(arg1);	
	}
	

	public void preencher_nome_landing_faleconosco(String arg1){
		driver.findElement(By.name("name")).clear();
		driver.findElement(By.name("name")).sendKeys(arg1);
	}

	public void preencher_telefone_landing_faleconosco(String arg1){
		driver.findElement(By.name("phone")).clear();
		driver.findElement(By.name("phone")).sendKeys(arg1);
	}

	public void preencher_email_landing_faleconosco(String arg1){
		driver.findElement(By.name("email")).clear();
		driver.findElement(By.name("email")).sendKeys(arg1);
	}

	public void preencher_assunto_landing_faleconosco(String arg1){
		driver.findElement(By.name("subject")).clear();
		driver.findElement(By.name("subject")).sendKeys(arg1);

	}
	public void preencher_mensagem_landing_faleconosco(String arg1){
		driver.findElement(By.name("message")).clear();
		driver.findElement(By.name("message")).sendKeys(arg1);
	}


	public void enviar_landing_faleconosco(){
		driver.findElement(By.id("btn-contato")).click();

	}

	public void eu_devo_ver_a_mensagem_de_confirmação(String arg1) {

		try {
			Thread.sleep(9000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assertEquals(driver.findElement(By.className("jconfirm-content")).getText(), arg1);
		driver.findElement(By.cssSelector("button.btn.btn-default")).click();
		driver.close();
	}
	

	public void eu_preencho_o_e_mail_email() {
		driver.findElement(By.name("email")).sendKeys();
		}

	
	public void eu_devo_ver_a_mensagem_de_erro(String arg1) {

		try {
			Thread.sleep(9000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assertEquals(driver.findElement(By.id("email-error")).getText(), arg1);
		driver.close();
	}
}
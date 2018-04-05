package com.tdd.CalendrierCucumber;



	import org.junit.runner.RunWith;
	import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;

	@RunWith (Cucumber.class)
	
	/**
	@CucumberOptions(
			format = {"pretty", "html:target/cucumber"},
			features = "src/main/resources"
			)
*/
	
	@CucumberOptions(plugin = { "html:target/cucumber-html-report",
	        "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
	        "usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml" },
			features = "src/main/resources",
	        tags = {"@landing_faleconosco_envio_sucesso @landing_faleconosco_erro_email"})


	public class CalendrierRunner {

		
	}


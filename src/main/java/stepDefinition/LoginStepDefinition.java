package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefinition {
	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		WebDriverManager.chromedriver().setup();
		 driver = new ChromeDriver();
			
	}
	
	@When("^title of login page loaded fine$")
	public void title_of_login_page_loaded_fine() throws Throwable {
		driver.get("https://freecrm.com/");
		driver.findElement(By.xpath("//span[text() ='Log In']")).click();
	   
	}
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) throws Throwable {
	   Thread.sleep(5000);
		driver.findElement(By.name("email")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
	    
	  
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    
		
		driver.findElement(By.xpath("//div[text()='Login']")).click();
		   
	}
	
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact() throws Throwable{
	
		driver.findElement(By.xpath("//span[text()='Contacts']")).click();
		 
		
	}

	
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  driver.close();
	}

}

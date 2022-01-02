package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\anujo\\OneDrive\\Desktop\\Latest Learnings\\cucmber_new\\src\\main\\java\\feature"
		,glue={"stepDefinition"},
		plugin= {"pretty","html:test-output"}
		//dryRun check if method is missing
		//monochrome give console output in readable format
		//strict=true if any undefined steps fail test
		)


public class testRunner {

}

@RegressionTest
Feature:001_Check_Environments

	#Test if the number of cars displayed 
	@vw-wl-int
	Scenario Outline: 001_Check_Environments
		Given an access as "<brand>"
		When I do the selection on product list for "<car>"
		Then check if the recommendation carrousel is available and save the environment status
		
	Examples:

	|brand      			| car                            | 
	|Volkswagen 			| Volkswagen Polo 			 	 | 
	|Volkswagen 			| Up! 						 	 | 
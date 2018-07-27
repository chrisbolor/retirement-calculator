// JavaScript Document

// remember, know how to do the action before asking to do it

// this function runs when the user clicks on the "process" button; all other functions are contained within

function process() {
	
// DECLARE GLOBAL VARIABLES //	
// DECLARE GLOBAL VARIABLES //	
	var allInputs = document.getElementsByTagName('input');
	var textBlock = "";
	
		for (i = 0; i<(allInputs.length); i++) {
			textBlock += allInputs[i].value + " <br />";
		}
	
	// declare variables based on all 7 inputs
	var currentAge = allInputs[0].value;
	var 	inflationRate	=	allInputs[1].value;
	var 	yearsToRetirement	=	allInputs[2].value;
	var 	todaysDollars	=	allInputs[3].value;
	var 	targetRetirementAge	=	allInputs[4].value;
	var 	lengthOfRetirement	=	allInputs[5].value;
	var 	targetInterestRateToNest	=	(allInputs[6].value/100);
	var 	targetRequirementIncomePercentage	=	(allInputs[7].value/100);
	
	// declare variables based on 4 Results - A outputs
	var 	targetNestAmount	=	document.getElementById("target nest amount");
	var 	futureDollars	=	document.getElementById("future dollars");
	var 	amountToInvest	=	document.getElementById("amount to invest per year until retirement");
	var 	currentInvestmentReturn	=	document.getElementById("amount in present time for investment % return per year");
	
	// delcare variables based on tabulated Results - B output columns
	var rbAge = document.getElementsByClassName("rb-age");
	var rbIncome = document.getElementsByClassName("rb-income");
	var rbInterest = document.getElementsByClassName("rb-interest");
	var rbBalance = document.getElementsByClassName("rb-balance");
	
	// declaring/computing nestAmount
	var nestAmountP1 = todaysDollars*yearsToRetirement;
	var nestAmountP2 = (1 + (inflationRate/100));
	var nestAmountP3 = Math.pow(nestAmountP2, yearsToRetirement);
	var rawNestAmount = (nestAmountP1*nestAmountP3).toFixed(2);
	var nestAmount;
	var totalNestAmount;

// END GLOBAL VARIABLES //
// END GLOBAL VARIABLES //








	// FUNCTION 01: TARGET NEST AMOUNT //
	// FUNCTION 01: TARGET NEST AMOUNT //
	function calcNestAmount() {
		// the below method was taken from 	http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
		var nestAmount = rawNestAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		//alert("$" + nestAmount);
	
		// write nestAmount to appropriate column
		
		targetNestAmount.innerText = "$" + nestAmount;
		totalNestAmount = targetNestAmount.innerText;
		return rawNestAmount;
		return totalNestAmount;
		return nestAmount;
	}
	calcNestAmount();
	
	// END FUNCTION 01 //
	// END FUNCTION 01 //
	
	
	
	
	
	
	
	// FUNCTION 02: TARGET YEARLY INCOME (FUTURE DOLLARS)  //
	// FUNCTION 02: TARGET YEARLY INCOME (FUTURE DOLLARS)  //
	function calcFutureDollars() {
		var rawFutureIncomeStart = rawNestAmount*targetRequirementIncomePercentage;
		var futureIncomeStart = "$" + rawFutureIncomeStart.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		// write futureDollars to appropriate column
		futureDollars.innerText = futureIncomeStart;
		return futureDollars;
	}
	calcFutureDollars();
	
	// END FUNCTION 02 //
	// END FUNCTION 02 //
	
	
	
	
	
	
	
	// FUNCTION 03: AMOUNT TO INVEST PER YEAR UNTIL RETIREMENT  //
	// FUNCTION 03: AMOUNT TO INVEST PER YEAR UNTIL RETIREMENT  //
	
	
	
	// END FUNCTION 03 //
	// END FUNCTION 03 //
	
	
	
	
	
	
	
	
	
	// FUNCTION 04: AMOUNT IN PRESENT TIME FOR INVESTMENT % RETURN PER YEAR  //
	// FUNCTION 04: AMOUNT IN PRESENT TIME FOR INVESTMENT % RETURN PER YEAR  //
	
	
	
	// END FUNCTION 04 //
	// END FUNCTION 04 //
	
	
	
	
	
	
	
	
	// FUNCTION 05: TABULATED RESULTS - AGE //
	// FUNCTION 05: TABULATED RESULTS - AGE //
	
	
	
	// END FUNCTION 05 //
	// END FUNCTION 05 //
	
	
	
	
	
	
	// FUNCTION 06: TABULATED RESULTS - INCOME //
	// FUNCTION 06: TABULATED RESULTS - INCOME //
	
	
	
	// END FUNCTION 06 //
	// END FUNCTION 06 //
	
	
	
	
	
	
	// FUNCTION 07: TABULATED RESULTS - INTEREST //
	// FUNCTION 07: TABULATED RESULTS - INTEREST //
	
	
	
	// END FUNCTION 07 //
	// END FUNCTION 07 //
	
	
	
	
	
	
	// FUNCTION 08: TABULATED RESULTS - BALANCE //
	// FUNCTION 08: TABULATED RESULTS - BALANCE //
	
	
	
	// END FUNCTION 08 //
	// END FUNCTION 08 //
	

	
	
	
}















// JavaScript Document
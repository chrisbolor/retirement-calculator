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
	
	// declare variables based on all 8 INITIAL inputs
	var currentAge = allInputs[0].value;
	var 	inflationRate	=	allInputs[1].value;
	var 	yearsToRetirement	=	allInputs[2].value;
	var 	todaysDollars	=	allInputs[3].value;
	
	
	// BELOW TO BE PLACED IN SEPARATE CALCULATION X
	//var 	amountInvesting	=	allInputs[4].value;
	
	
	var 	targetRetirementAge	=	allInputs[4].value;
	var 	lengthOfRetirement	=	allInputs[5].value;
	var 	targetInterestRateToNest	=	(allInputs[6].value/100);
	var 	targetRetirementIncomePercentage	=	(allInputs[7].value/100);
	
	// declare variables based on 3 Results - A outputs
	var 	targetNestAmount	=	document.getElementById("target nest amount");
	var 	futureDollars	=	document.getElementById("future dollars");
	var 	currentInvestmentReturn	=	document.getElementById("amount in present time for investment % return per year");
	
	// delcare variables based on tabulated Results - B output columns
	var rb01 = document.getElementById("rb01");
	var rb2 = document.getElementById("rb2");
	var rbStart = document.getElementById("rbStart");
	var rbEnd = document.getElementById("rbEnd");
	var rbAge = document.getElementById("rbAge01");
	//var allRBAge = document.getElementsByClassName("rbAge");
	var rbIncome = document.getElementById("rbIncome01");
	//var allRBIncome = document.getElementsByClassName("rbIncome");
	var rbInterest = document.getElementById("rbInterest01");
	//var allRBInterest = document.getElementsByClassName("rbInterest");
	var rbBalance = document.getElementById("rbBalance01");
	//var allRBBalance = document.getElementsByClassName("rbBalance");
	
	// declaring/computing nestAmount
	var nestAmountP1 = todaysDollars*yearsToRetirement;
	var nestAmountP2 = (1 + (inflationRate/100));
	var nestAmountP3 = Math.pow(nestAmountP2, yearsToRetirement);
	var rawNestAmount = (nestAmountP1*nestAmountP3).toFixed(2);
	var nestAmount;
	var totalNestAmount;
					

// END GLOBAL VARIABLES //
// END GLOBAL VARIABLES //





	// PRE: CLEAR THE FORM //
		function cleanUp(){		
				rbStart.innerHTML ='';
		}
		cleanUp();
	

	// END PRE //


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
		var rawFutureIncomeStart = rawNestAmount*targetRetirementIncomePercentage;
		var futureIncomeStart = "$" + rawFutureIncomeStart.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		// write futureDollars to appropriate column
		futureDollars.innerText = futureIncomeStart;
		return futureDollars;
		return futureIncomeStart;
		return rawFutureIncomeStart;
	}
	calcFutureDollars();
	
	// END FUNCTION 02 //
	// END FUNCTION 02 //
	

	
	
	// FUNCTION 03: POPULATE TABULATED RESULTS (FIRST LINE) //
	// FUNCTION 03: POPULATE TABULATED RESULTS (FIRST LINE) //
	
	function calcResults() {
		rbAge.innerText = parseInt(currentAge)+parseInt(yearsToRetirement);
		rbIncome.innerText = rawNestAmount*targetRetirementIncomePercentage;
		rbInterest.innerText = (rawNestAmount-(rawNestAmount*targetRetirementIncomePercentage))*targetInterestRateToNest;
		rbBalance.innerText = (rawNestAmount-(rawNestAmount*targetRetirementIncomePercentage))+(rawNestAmount-(rawNestAmount*targetRetirementIncomePercentage))*targetInterestRateToNest;
	}
	calcResults();
	
	
	// END FUNCTION 03 //
	// END FUNCTION 03 //
	
	
	
	
	
	
	// FUNCTION 04: CREATE TABLE //
	// FUNCTION 04: CREATE TABLE //
	
	
	function createTable(i){
		//alert('Calculating the remaining...')
		
		for(i=0; i < parseInt(lengthOfRetirement); i++){
			
			var newRow = document.createElement("TR");
			
			var newAgeCol = document.createElement("TD");
			newAgeCol.className = "rbAge";
			//newAgeCol.id = "rbAge" + i;
			var newIncomeCol = document.createElement("TD");
			newIncomeCol.className = "rbIncome";
			//newIncomeCol.id = "rbIncome" + i;
			var newInterestCol = document.createElement("TD");
			newInterestCol.className = "rbInterest";
			//newInterestCol.id = "rbInterest" + i;
			var newBalanceCol = document.createElement("TD");
			newBalanceCol.className = "rbBalance";
			//newBalanceCol.id = "rbBalance" + i;
			
			newRow.appendChild(newAgeCol);
			newRow.appendChild(newIncomeCol);
			newRow.appendChild(newInterestCol);
			newRow.appendChild(newBalanceCol);
			
			
			rbStart.insertBefore(newRow, rbStart.childNodes[1]);

			
		}
		
	}
	createTable();
	
	// END FUNCTION 04 //
	// END FUNCTION 04 //
	
	
	
	
	// FUNCTION 05: POPULATE TABULATED RESULTS (THE REST) //
	// FUNCTION 05: POPULATE TABULATED RESULTS (THE REST) //
	
	
	function calcRemaining(i){
		
		for(i=0; i < 8; i++){
			
			var allAge = rbStart.querySelectorAll(".rbAge");
			var allIncome = rbStart.querySelectorAll(".rbIncome");
			var allInterest = rbStart.querySelectorAll(".rbInterest");
			var allBalance = rbStart.querySelectorAll(".rbBalance");
			
			// SET ID'S
			allAge[i].id = "rbAge0" + (i+parseInt(2));
			allIncome[i].id = "rbIncome0" + (i+parseInt(2));
			allInterest[i].id = "rbInterest0" +(i+parseInt(2));
			allBalance[i].id = "rbBalance0" + (i+parseInt(2));
			
			// CALCULATE REMAINING CELLS
			allAge[i].innerText = parseInt(rbAge.innerText)+i+parseInt(1);
			allIncome[i].innerText = parseFloat(document.getElementById("rbBalance0"+(parseInt(1)+i)).innerText*(targetRetirementIncomePercentage));
			allInterest[i].innerText = (parseFloat(document.getElementById("rbBalance0"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) * targetInterestRateToNest;
			allBalance[i].innerText = (parseFloat(document.getElementById("rbBalance0"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) + parseFloat(allInterest[i].innerText);
		
			
		}
		
		for(i=8; i < 9; i++){
			
			var allAge = rbStart.querySelectorAll(".rbAge");
			var allIncome = rbStart.querySelectorAll(".rbIncome");
			var allInterest = rbStart.querySelectorAll(".rbInterest");
			var allBalance = rbStart.querySelectorAll(".rbBalance");
					
			// SET ID'S
			allAge[i].id = "rbAge" + (i+parseInt(2));
			allIncome[i].id = "rbIncome" + (i+parseInt(2));
			allInterest[i].id = "rbInterest" +(i+parseInt(2));
			allBalance[i].id = "rbBalance" + (i+parseInt(2));
			
			// CALCULATE REMAINING CELLS
			allAge[i].innerText = parseInt(rbAge.innerText)+i+parseInt(1);
			allIncome[i].innerText = parseFloat(document.getElementById("rbBalance0"+(parseInt(1)+i)).innerText*(targetRetirementIncomePercentage));
			allInterest[i].innerText = (parseFloat(document.getElementById("rbBalance0"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) * targetInterestRateToNest;
			allBalance[i].innerText = (parseFloat(document.getElementById("rbBalance0"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) + parseFloat(allInterest[i].innerText);
		
		}
		
		for(i=9; i < 10; i++){
			
			var allAge = rbStart.querySelectorAll(".rbAge");
			var allIncome = rbStart.querySelectorAll(".rbIncome");
			var allInterest = rbStart.querySelectorAll(".rbInterest");
			var allBalance = rbStart.querySelectorAll(".rbBalance");
	
			// SET ID'S
			allAge[i].id = "rbAge" + (i+parseInt(2));
			allIncome[i].id = "rbIncome" + (i+parseInt(2));
			allInterest[i].id = "rbInterest" +(i+parseInt(2));
			allBalance[i].id = "rbBalance" + (i+parseInt(2));
			
			// CALCULATE REMAINING CELLS
			allAge[i].innerText = parseInt(rbAge.innerText)+i+parseInt(1);
			allIncome[i].innerText = parseFloat(document.getElementById("rbBalance"+(parseInt(1)+i)).innerText*(targetRetirementIncomePercentage));
			allInterest[i].innerText = (parseFloat(document.getElementById("rbBalance"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) * targetInterestRateToNest;
			allBalance[i].innerText = (parseFloat(document.getElementById("rbBalance"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) + parseFloat(allInterest[i].innerText);
			
		}
		
		for(i=10; i < parseInt(lengthOfRetirement); i++){
			
			var allAge = rbStart.querySelectorAll(".rbAge");
			var allIncome = rbStart.querySelectorAll(".rbIncome");
			var allInterest = rbStart.querySelectorAll(".rbInterest");
			var allBalance = rbStart.querySelectorAll(".rbBalance");
				
			// SET ID'S
			allAge[i].id = "rbAge" + (i+parseInt(2));
			allIncome[i].id = "rbIncome" + (i+parseInt(2));
			allInterest[i].id = "rbInterest" +(i+parseInt(2));
			allBalance[i].id = "rbBalance" + (i+parseInt(2));
			
			// CALCULATE REMAINING CELLS
			allAge[i].innerText = parseInt(rbAge.innerText)+i+parseInt(1);
			allIncome[i].innerText = parseFloat(document.getElementById("rbBalance"+(parseInt(1)+i)).innerText*(targetRetirementIncomePercentage));
			allInterest[i].innerText = (parseFloat(document.getElementById("rbBalance"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) * targetInterestRateToNest;
			allBalance[i].innerText = (parseFloat(document.getElementById("rbBalance"+(parseInt(1)+i)).innerText) - parseFloat(allIncome[i].innerText)) + parseFloat(allInterest[i].innerText);

		}
		
	}
	calcRemaining();
	
	
	
	// END FUNCTION 05 //
	// END FUNCTION 05 //
	





	// NEW GLOBAL VARIABLES BASED ON DYNAMIC RESULTS
	
		// declaring dynamic tabulated results
		var allAge = rbStart.querySelectorAll(".rbAge");
		var allIncome = rbStart.querySelectorAll(".rbIncome");
		var allInterest = rbStart.querySelectorAll(".rbInterest");
		var allBalance = rbStart.querySelectorAll(".rbBalance");
	
	// END NEW GLOBAL VARIABLES //
	
	
	
	// FUNCTION 06: FORMAT TABULATED RESULTS //
	// FUNCTION 06: FORMAT TABULATED RESULTS //
	
	function formatTable(i) {
		
		
		// FORMAT 1ST ROW RB1
		

		var rbIncomeFormatted = "$" + parseFloat(rbIncome.innerText).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		rbIncome.innerText = rbIncomeFormatted;
		var rbInterestFormatted = "$" + parseFloat(rbInterest.innerText).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		rbInterest.innerText = rbInterestFormatted;
		var rbBalanceFormatted = "$" + parseFloat(rbBalance.innerText).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		rbBalance.innerText = rbBalanceFormatted;
		
		
		// FORMAT DYNAMIC RESULTS RB2+
		for(i=0; i < parseInt(lengthOfRetirement) ; i++){
			
			allIncome[i].innerText = "$" + parseFloat(allIncome[i].innerText).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			allInterest[i].innerText = "$" + parseFloat(allInterest[i].innerText).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			allBalance[i].innerText = "$" + parseFloat(allBalance[i].innerText).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			
		}
		
	}
	formatTable();
	
	
	// END FUNCTION 06 //
	// END FUNCTION 06 //
	
	
	
	// FUNCTION 07: ADJUST TABULATED RESULTS CONTAINER HEIGHT //
	// FUNCTION 07: ADJUST TABULATED RESULTS CONTAINER HEIGHT //
	
	/*function adjustRBContainer(){
		var sec4 = document.getElementById("sec4");
		//var sec4ComputedStyle = window.getComputedStyle(sec4);
		//var sec4Height = sec4ComputedStyle.getPropertyValue("height");
		var sec1 = document.getElementById("sec1");
		var sec1ComputedStyle = window.getComputedStyle(sec1);
		var sec1Height = sec1ComputedStyle.getPropertyValue("height");
		
		var rb = document.getElementById("rbStart");
		var rbComputedStyle = window.getComputedStyle(rb);
		var rbHeight = rbComputedStyle.getPropertyValue("height");
		
		
		//ADJUST SIZE FOR LESS RESULTS THAN INITIAL
		/*if(Number(rbHeight.replace("px", "")) < Number(sec1Height.replace("px", ""))){
			sec4.style.height = Number(screen.height*(65/100)) + "px";
		}*/
		
		
		//Number(sec1Height.replace("px", "")) + "px";
		
		//RESIZE FOR MORE RESULT THAN INITIAL
	/*	if(Number(rbHeight.replace("px", "")) > Number(sec1Height.replace("px", "")*(65/100))){
			//sec4.style.height = Number(rbHeight.replace("px", "")/(13)) + "em";
			sec4.style.height = Number(rbHeight.replace("px", "")) + Number(sec1Height.replace("px", "")*(50/100)) + "px";
		}
		if(Number(rbHeight.replace("px", "")) < Number(sec1Height.replace("px", "")*(65/100))){
			sec4.style.height = sec1Height;	
		}
		
		
	}
	adjustRBContainer();*/
	
	// END FUNCTION 07 //
	// END FUNCTION 07 //
	
	
}
// ENDS PROCESS() //
// ENDS PROCESS() //








function arrowPress(i) {
	
	
	
	
}




















// JavaScript Document
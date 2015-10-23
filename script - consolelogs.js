

$(document).ready(function() {
	
	var calcOutput = $('#calculatorOutput');
	var buttonC = $('#buttonC');
	var buttonCE = $('#buttonCE');
	var buttonEquals = $('#buttonEquals');
	var buttonDecimal = $('#buttonDecimal'); 
	var buttonAdd = $('#buttonAdd'); 
	var buttonSubtract = $('#buttonSubtract'); 
	var buttonDivide = $('#buttonDivide'); 
	var buttonMultiply = $('#buttonMultiply'); 
	var buttonZero = $('#buttonZero'); 
	var buttonOne = $('#buttonOne'); 
	var buttonTwo = $('#buttonTwo'); 
	var buttonThree = $('#buttonThree'); 
	var buttonFour = $('#buttonFour'); 
	var buttonFive = $('#buttonFive'); 
	var buttonSix = $('#buttonSix'); 
	var buttonSeven = $('#buttonSeven');
	var buttonEight = $('#buttonEight'); 
	var buttonNine = $('#buttonNine');
	
	var numbers = [0,1,2,3,4,5,6,7,8,9,'.'];//number and numberButtons share same order in array. numbers[10] referes to decimal	
	var numberButtons = ['buttonZero', 'buttonOne', 'buttonTwo', 'buttonThree', 'buttonFour', 'buttonFive', 'buttonSix', 'buttonSeven', 'buttonEight', 'buttonNine', 'buttonDecimal'];
	var operators = ['+', '-', '*', '/'];// operators and operatorButtons share the same order in array.
	var operatorButtons = ['buttonAdd', 'buttonSubtract', 'buttonMultiply', 'buttonDivide'];	
	
	var numOne = 0;
	var numTwo = 0;
	var operator = null;
		
	var equalsPressed = false; //if user clicks equals the behaviour is different than if they were chaining operators and numbers together		
	var state = 0;
	
	$('button').click(function(){
		buttonID=this.id;
	
	console.log("you clicked a button:  " + buttonID);
	
	if(state=== 0 ){
		state = 1 ;
		console.log("changed state from 0 to 1");
	}
	
	if(buttonID === 'buttonEquals'){
		console.log("equals button pressed");
		equalsPressed = true;	
	
		calculateResult();
		numTwo = 0;
		operator = null;
		console.log("setting numTwo back to 0");
		state = 2;
		
		console.log("state: " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);		
			console.log("button event handle complete");
			console.log(" ");
		
		
	}
	
	else if(buttonID === 'buttonC'){
		console.log("clear button pressed");
		
		numOne = 0;
		numTwo = 0;
		operator = null;
		calcOutput.html("");
		console.log("setting numOne and numTwo back to 0, and operator to null, state to 0");
		state = 0;
		
		console.log("state: " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);		
			console.log("button event handle complete");
			console.log(" ");
		
		
	}
	
	else if(buttonID === 'buttonCE'){
			console.log("clear entry button pressed");
		
		if (state < 3){
	
		console.log("if state 1 or 2....  The state currently is: " + state);
		numOne = 0;
		numTwo = 0;
		operator = null;
		calcOutput.html("");
		console.log("setting numOne and numTwo back to 0, and operator to null, state to 0");
		state = 0;
		
		console.log("state: " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);		
			console.log("button event handle complete");
			console.log(" ");
			
		}
		
		else{
			
			console.log("if state 3 or 4....  The state currently is: " + state);
		
		
		numTwo = '';
		
		calcOutput.html(numOne + " " + operator);
		console.log("setting numTwo  to 0" );
		
		state = 3;
		console.log("state: " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);		
			console.log("button event handle complete");
			console.log(" ");
			
			
		}
		
		
	}
	
	
	
	

	else if(state === 1){
		console.log("State(1) is currently: " + state);		
		buttonID = this.id;		
		
		if(numberButtons.indexOf(buttonID) !== -1){
			
			if (numberButtons.indexOf(buttonID) === 10){
				numOne = '.';
			}
			
			else{
				numOne = numbers[numberButtons.indexOf(buttonID)];
			}
					
		
		calcOutput.html(numOne);
		console.log("set and display numOne");	
		state = 2;
		console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);	
		console.log("changed state from 1 to 2");
		console.log("button event handle complete");
		console.log(" ");		
		}
		
	}
	
	
	else if(state === 2){
		console.log("State(2) is currently: " + state);	
		buttonID=this.id;
		if(numberButtons.indexOf(buttonID) !== -1){			
		console.log("state 2 button was a number");
		
		if(equalsPressed == true){
			
			console.log("coming from a equals button result so reset number 1");
		
		
		if (numberButtons.indexOf(buttonID) === 10){
				numOne = '.';
			}
			
			else{
				numOne = numbers[numberButtons.indexOf(buttonID)];
			}
		
	
		calcOutput.html(numOne);			
			equalsPressed = false;
			console.log("equals pressed set to false");
			console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			console.log("no state change");
		console.log("button event handle complete");
		console.log(" ");
		}
		
		else{
			
				if (numberButtons.indexOf(buttonID) === 10){
				numOne = numOne + "" + '.';
			}
			
			else{
				numOne = numOne + "" + numberButtons.indexOf(buttonID);
			}
		
		
		
		
		calcOutput.html(numOne);
		console.log("no state change");
		console.log("button event handle complete");
		console.log(" ");
		}
		
		}
		
		else if (operatorButtons.indexOf(buttonID !== -1)){
			console.log("state 2 button was an operator");
			operator = operators[operatorButtons.indexOf(buttonID)];
			console.log("operator is:  " + operator);
			calcOutput.html(numOne + " " + operator);
			state = 3;
			console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			console.log("changed state from 2 to 3");
			console.log("button event handle complete");
			console.log(" ");
		}
		
		
	}
		
		
	
	
	else if(state === 3){
		console.log("State(3) is currently: " + state);	
		
			buttonID=this.id;
			
			if(numberButtons.indexOf(buttonID) !== -1){
		console.log("state 3 button was a number");
		numTwo = numbers[numberButtons.indexOf(buttonID)];
		calcOutput.html(numOne + " " + operator + " " + numTwo);
		state = 4;
		console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
		console.log("changed state from 3 to 4");
		console.log("button event handle complete");
		console.log(" ");		
		}
		
			else if (operatorButtons.indexOf(buttonID !== -1)){
			console.log("state 3 button was an operator");
			operator = operators[operatorButtons.indexOf(buttonID)];
			console.log("operator is:  " + operator);
			calcOutput.html(numOne + " " + operator);
			console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			console.log("no state change");
			console.log("button event handle complete");
			console.log(" ");
			
		}
		
		
		
	}
	
	else if(state === 4){
		
				console.log("State(4) is currently: " + state);
				
				
		buttonID=this.id;
		
			if(numberButtons.indexOf(buttonID) !== -1){
		console.log("state 4 button was a number");
		numTwo = numTwo + "" + numbers[numberButtons.indexOf(buttonID)];
		calcOutput.html(numOne + " " + operator + " " + numTwo);
		console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			console.log("no state change");
			console.log("button event handle complete");
			console.log(" ");
			
		}
		
			else if (operatorButtons.indexOf(buttonID !== -1)){
				
				
				
				
				
			console.log("state 4 button was an operator");
			calculateResult();			
			operator = operators[operatorButtons.indexOf(buttonID)];
			console.log("operator is:  " + operator);
			calcOutput.html(numOne + " " + operator);
			state = 3;
			console.log("num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
		console.log("changed state from 4 to 3");
		console.log("button event handle complete");
		console.log(" ");	
			
		}
		

	
	}
		
	
	 	});	
	 	
	 	
	 	function calculateResult(){		
		console.log("calculating the result function has been called");
		console.log("numOne:  " + numOne + "  numTwo:  " + numTwo + "  operator:  " + operator);
		
		var result = 0;		
		if(operator !== null){
			
		console.log("Lets switch it up");
			
		switch (operator) {
			
			
			
			case '+': 
			console.log("case of addition");			
			result = parseFloat(numOne) + parseFloat(numTwo);	
			console.log("result is:  " + result);		
			calcOutput.html(result);
			numOne = result;
			console.log("Current Status: State " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);	
			break;
			
			case '-': 
			console.log("case of subtraction");
			result = parseFloat(numOne) - parseFloat(numTwo);
			console.log("result is:  " + result);	
			calcOutput.html(result);
			numOne = result;
			console.log("Current Status: State " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			break;
			
			case '*': 
			console.log("case of multiply");
			result = parseFloat(numOne) * parseFloat(numTwo);
			calcOutput.html(result);
			console.log("result is:  " + result);
			numOne = result;
			console.log("Current Status: State " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			break;
			
			case '/':
			console.log("case of divide"); 
			result = parseFloat(numOne) / parseFloat(numTwo);
			console.log("result is:  " + result);	
			calcOutput.html(result);
			numOne = result;
			console.log("Current Status: State " + state + ", num1: " + numOne + " , operator: " + operator + ", num2: " + numTwo);
			break;
			
		
		
			
		}
		
		}
		
		

		
	}
	 	
	 
	 

	
	
	
	
});
	



	
	
	
   

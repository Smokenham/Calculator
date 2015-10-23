

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
	
			//state 0 represents a fresh calculator
			//state 1 represents the calculator after a single button press
			if(state=== 0 ){
				state = 1 ;
				console.log("changed state from 0 to 1");
			}
			
			//Here begins the massive if else statement which decides what to do depending on what button has been pressed
			if (buttonID === 'buttonEquals'){				
				equalsPressed = true;			
				calculateResult();
				numTwo = 0;
				operator = null;				
				state = 2;
			}
	
			else if(buttonID === 'buttonC'){
				numOne = 0;
				numTwo = 0;
				operator = null;
				calcOutput.html("");	
				state = 0;
			}
	
			else if(buttonID === 'buttonCE'){
				// In states 1 and 2 the CE button resets the calculator back to state 0 and clears the memory.		
				// In states 3 and 4 the CE button resets the calculator to state 3 and only resets numTwo
				if (state < 3){				
					numOne = 0;
					numTwo = 0;
					operator = null;
					calcOutput.html("");
					state = 0;
				}
				else {
					numTwo = '';
					calcOutput.html(numOne + " " + operator);
					state = 3;
				}
			}
	

			else if (state === 1) {					
				
					//check if the user pressed a number button				
					if(numberButtons.indexOf(buttonID) !== -1){
						// check if the user pressed the decimal button
						if (numberButtons.indexOf(buttonID) === 10){
							numOne = '.';
						}						
						else{						
							numOne = numbers[numberButtons.indexOf(buttonID)];
						}
						calcOutput.html(numOne);
						state = 2;
					}
			}
	
			else if (state === 2) {				
								
					if(numberButtons.indexOf(buttonID) !== -1){	
						//if we are coming from a result diplayed after pressing the equals button we want to reset numOne rather than appending extra digits
						if(equalsPressed == true){
							if (numberButtons.indexOf(buttonID) === 10){
									numOne = '.';
								}
							else{
								numOne = numbers[numberButtons.indexOf(buttonID)];
							}
							calcOutput.html(numOne);			
							equalsPressed = false;					
						}				
					else {
						if (numberButtons.indexOf(buttonID) === 10){
							numOne = numOne + "" + '.';
						}
						else{
							numOne = numOne + "" + numberButtons.indexOf(buttonID);
						}
						calcOutput.html(numOne);
					}
				}
				//check if the user pressed an operator button
				else if (operatorButtons.indexOf(buttonID !== -1)) {
					operator = operators[operatorButtons.indexOf(buttonID)];
					calcOutput.html(numOne + " " + operator);
					state = 3;
				}
			}
			
			else if (state === 3) {
				if(numberButtons.indexOf(buttonID) !== -1){
					numTwo = numbers[numberButtons.indexOf(buttonID)];
					calcOutput.html(numOne + " " + operator + " " + numTwo);
					state = 4;
				}
				else if (operatorButtons.indexOf(buttonID !== -1)){
					operator = operators[operatorButtons.indexOf(buttonID)];
					calcOutput.html(numOne + " " + operator);
				}
			}
	
			else if(state === 4){
				if(numberButtons.indexOf(buttonID) !== -1){
					numTwo = numTwo + "" + numbers[numberButtons.indexOf(buttonID)];
					calcOutput.html(numOne + " " + operator + " " + numTwo);
				}
				else if (operatorButtons.indexOf(buttonID !== -1)){
					calculateResult();			
					operator = operators[operatorButtons.indexOf(buttonID)];
					calcOutput.html(numOne + " " + operator);
					state = 3;
				}
			}
	
	 	});	
	 	
	 	
	 function calculateResult(){
		var result = 0;		
			if(operator !== null){
				switch (operator) {
					
					case '+': 	
					result = parseFloat(numOne) + parseFloat(numTwo);
					calcOutput.html(result);
					numOne = result;
					break;
					
					case '-':
					result = parseFloat(numOne) - parseFloat(numTwo);
					calcOutput.html(result);
					numOne = result;
					break;
					
					case '*': 
					result = parseFloat(numOne) * parseFloat(numTwo);
					calcOutput.html(result);
					numOne = result;
					break;
					
					case '/':
					result = parseFloat(numOne) / parseFloat(numTwo);
					calcOutput.html(result);
					numOne = result;
					break;
				}
			}
	}
	
	
});
	



	
	
	
   

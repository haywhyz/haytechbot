function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "um... hi?, what can i do for you";
		
		if(this.match('what[^ ]* up') || this.match('pizza') || this.match('i want to order'))
			// return "which size of pizza do you want?";
		return ["1500 for medium" ,"1200 for small", "2500 for large "];
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('medium')|| this.match('small') || this.match('large') )
			return "order taken , send address ?";
		
		if(this.match('^no+(\\s|,|\\.|0-9)') || this.match('(street)+(h|$)') || this.match('no')|| this.match('estate') || this.match('crescent') || this.match('number')|| this.match('street'))
			return "adrress taken, it will be deliver in the next 15minutes";
		
		if(this.match('(ok|bye|see ya|alright|talk to you later)')|| this.match('(waiting)+(h|$)') || this.match('thanks')|| this.match('good'))
			return ["thanks for patronizing us", "take care!"];
		
		// if(this.match('(dumb|stupid|is that all)'))
		// 	return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
		
		if(this.input == 'noop')
			return;
		
		return input + " i dont undertand , kindly rephrase the sentence?";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}

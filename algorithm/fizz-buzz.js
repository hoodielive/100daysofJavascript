


function fizzBuzz(num) {

	for (var i = 1; i <= nu; i++) {
		if ( i % 3 == 0 ) {
			console.log('fizz'); 
		} 
		else if ( i % 5 == 0 ) {
				console.log('buzz')
			}
		else {
			if ( i % 3 === 0 && i % 5 === 0 ) {
				console.log('fizzBuzz') 
			}
		}
	}
}

fizzBuzz(20); 

/*string1 = "42 is the answer to life."

function answerToLife (it) {
	if (it === 42){
		return string1;
	}
	return 0;
}

console.log(answerToLife(42));
*/
/*****************************************************
function answerToLife (it) {
	if (it === 42){
		return "42 is the answer to life!";
	}
	return "0";
}

console.log(answerToLife(41));
******************************************************/
/*****************************************************
function answerToLife (it) {
	if(it === 42){
		document.write ("42 is the answer to life!");
	}
	else{document.write ("The answer to life is still unknown.");
	}
}

console.log(answerToLife(41));

*****************************************************/
// George's solution
// We return so that function doesn't affect any outside functions
/**
 *
 * @param question
 * @returns {string}
 */
function hitchHikersAnswerToLife(question) {
	if(question === 42) {
		return "42 is the answer to life";
	} else {
		return "false try again";
	}
}

answer = hitchHikersAnswerToLife(42);

console.log(answer);
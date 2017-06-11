$(document).ready(function(){

	var abbreviator = {
			content: {
				original: {
					string: {},
					array: {}
				},
				abbreviated: {},
				abbrevations: {}
			},
			flag: {
				insideQuote: false,
				newSentence: false
			},
			options: {

			},
			_start: function(input) {
				var self = this

				self.content.original.string = input;
				self.content.original.array = input.split(' ');

				insideQuote = false;
				newSentence = false;

				$.each(self.content.original.array, function(index, currentWord) {

					if (currentWord.slice(-1) === ".") {

						// console.log(word + " is the last word in this sentence.");
						newSentence = true;
						return true;
					}
					// DONT ABBREVIATE WORDS AT THE BEGINNING OF A SENTENCE
					if (index === 0 || newSentence === true) {
						// console.log(word + " is the first word in this sentence.");
						newSentence = false;
						return true;

					}

					if (insideQuote === false && currentWord.slice(0,1) === '"') {
						// console.log("starting qoute ");
						if (currentWord.slice(-1) != '"') {
							insideQuote = true;
						} else {
							// console.log("single word qouted ");
							insideQuote = false;
						}
						return true;
					}
					if (insideQuote === true && currentWord.slice(-1) === '"') {
						insideQuote = true;
						return true;
					}




					if (currentWord.length <= 2) {

						// console.log(word + " is too short.");
						return true;

					}

					// CHECK IF THIS WORD ALREADY HAS AN ABBREV.
					if (wordList[currentWord] != undefined) {

						sentence[i] = wordList[currentWord];

						return true;

					}

					// OTHERWISE CALL ABBREVIATION FUNCTION FOR THE CURRENT WORD
					abbreviation = self._abbreviateWord(currentWord, 1, 0)

					if (abbreviation != false) {

						self.sentence[i] = abbreviation;

						return true;

					} else {

						sentence[index] = currentWord
						return false;

					}

				});
			},
			_abbreviateWord: function() {}

	}

	console.log(abbreviator);
	var wordList = {} ;
	var abbreviationList = {};
	var sortedAbbreviations = [];

	$('.hiddenOnLoad').hide();
	$('#input').focus();
	$('#input').keyup(function() {

		//abbreviator._start($(this).val());

		wordList = {} ;
		abbreviationList = {};
		sortedAbbreviations = [];

		$('.hiddenOnLoad').show();

		processedText = process($(this).val());

		$('#output').html(processedText);
		if ($(this).val() === '') {
			$('.hiddenOnLoad').hide();
		}


		$('#abbreviationList').empty();

		$.each(abbreviationList, function (word) {
			sortedAbbreviations.push(word);
		});
		sortedAbbreviations.sort(function (a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});

		// console.log(sortedAbbreviations);
		// console.log(abbreviationList);
		$.each(sortedAbbreviations, function (i, abbreviation) {

			$('#abbreviationList').append('<tr><td>' + abbreviation + '</td><td>' + abbreviationList[abbreviation] + '</td></tr>');

		});



	});




function process(originalText){

	var sentence = originalText.split(' ');
	var insideQuote = false;
	var newSentence = false;

	//  LOOP THROUGH ALL WORDS
	$.each(sentence, function(i, word) {
		// console.log("checking " + word);

		// DONT ABBREVIATE WORDS AT THE END OF A SENTENCE
		if (word.slice(-1) === ".") {

			// console.log(word + " is the last word in this sentence.");
			newSentence = true;
			return true;
		}
		// DONT ABBREVIATE WORDS AT THE BEGINNING OF A SENTENCE
		if (i === 0 || newSentence === true) {
			// console.log(word + " is the first word in this sentence.");
			newSentence = false;
			return true;

		}

		if (insideQuote === false && word.slice(0,1) === '"') {
			// console.log("starting qoute ");
			if (word.slice(-1) != '"') {
				insideQuote = true;
			} else {
				// console.log("single word qouted ");
				insideQuote = false;
			}
			return true;
		}
		if (insideQuote === true && word.slice(-1) === '"') {
			insideQuote = true;
			return true;
		}




		if (word.length <= 2) {

			// console.log(word + " is too short.");
			return true;

		}

		// CHECK IF THIS WORD ALREADY HAS AN ABBREV.
		if (wordList[word] != undefined) {

			sentence[i] = wordList[word];

			return true;

		}

		// OTHERWISE CALL ABBREVIATION FUNCTION FOR THE CURRENT WORD
		abbreviation = abbreviate(word, 1, 0)

		if (abbreviation != false) {

			sentence[i] = abbreviation;

			return true;

		} else {

			sentence[i] = word
			return false;

		}

	})

	processedText = sentence.join(" ");
	return processedText;

	function abbreviate(word, charsFromLeft, charsFromRight) {

		// THE ABBREVIATION SHOULD SAVE AT LEAST TWO CHARS
		// EXAMPLE: HOUSE HAS 5 CHARS
		// SO 2 CHARS FROM THE LEFT AND 2 FROM THE RIGHT SIDE PLUS THE DOT
		// MEANS 5 CHARS AND THEREFORE ITS NOT WORTH AN ABBREV.

		if ($.trim(word).length === 0){

			// console.log("Word ist empty");
			return word;

		}

		if (word.length - 1 <= charsFromLeft  + charsFromRight) {

			if (charsFromRight === 0) {

				charsFromRight = 1;
				charsFromLeft = 1;

			}

			if (word.length - 1 <= charsFromLeft  + charsFromRight) {

				// console.log("abbreviation for "+word+" is not saving space.");
				return word;

			}

		}


		if (charsFromRight === 0) {

			abbreviation = word.slice(0, charsFromLeft) + ".";

		} else {

			abbreviation = word.slice(0, charsFromLeft) + word.slice((-1 * charsFromRight)) + ".";
		}

		if (abbreviationList[abbreviation] === undefined) {

			abbreviationList[abbreviation] = word;

			wordList[word] = abbreviation;

			return abbreviation;

		} else {

			if (charsFromLeft < word.length - 1 && charsFromRight === 0) {

				abbreviation = abbreviate(word, charsFromLeft + 1, 0);

			} else if (charsFromLeft >= word.length - 1 && charsFromRight === 0) {

				charsFromLeft = 1;
				abbreviation = abbreviate(word, charsFromLeft, 1);

			} else if (charsFromRight === 0) {

				abbreviation = abbreviate(word, 1, 1);

			}
			if (abbreviation != false) {

				abbreviationList[abbreviation] = word;

				wordList[word] = abbreviation;

				return abbreviation;

			} else {

				return false;
			}

		}


	}


}

});

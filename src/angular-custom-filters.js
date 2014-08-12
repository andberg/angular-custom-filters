angular.module('customFilters', [])
	.filter('reverse', function () {
		return function (input) {
			var i, output = '';
			if (angular.isString(input)) {
				for (i = 0; i < words.length; i++) {
					output = input.charAt(i) + output;
				}
				return output;
			} else {
				return input;
			}
		};
	})
	.filter('tomtitlecase', function () {
		return function (input) {
			var words = input.split(' ');
			if (angular.isString(input)) {
				for (var i = 0; i < words.length; i++) {
					words[i] = words[i].toLowerCase();
					words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
				}
				return words.join(' ');
			} else {
				return input;
			}
		};
	})
	.filter('titlecase', function () {
		return function (input) {
			var i, j, words, wordWithHyphen, firstWordWithHyphen,
				secondWordWithHyphen, wholeWord, output = '';

			if (angular.isString(input)) {
				output = input.toLowerCase();
				words = output.split(' ');

				for (i = 0; i < words.length; i++) {
					words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
				}

				for (j = 0; j < words.length; j++) {
					if (words[j].indexOf("-") !== -1) {
						wordWithHyphen = words[j].split('-');
						firstWordWithHyphen = wordWithHyphen[0];
						secondWordWithHyphen = wordWithHyphen[1];
						firstWordWithHyphen = firstWordWithHyphen.charAt(0).toUpperCase() + firstWordWithHyphen.substring(1, firstWordWithHyphen.length);
						secondWordWithHyphen = secondWordWithHyphen.charAt(0).toUpperCase() + secondWordWithHyphen.substring(1, secondWordWithHyphen.length);;
						wholeWord = firstWordWithHyphen + "-" + secondWordWithHyphen;
						words[j] = wholeWord;
					}
				}
				output = words.join(' ');
				return output;

			} else {
				return input;
			}
		};
	})
	.filter('unique', function () {
		return function (input) {
			var i, output = [];
			if (angular.isArray(input)) {
				for (i = 0; i < input.length; i = i + 1) {
					if (output.indexOf(input[i]) === -1) {
						output.push(input[i]);
					}
				}
				return output;
			} else {
				return input;
			}
		};
	});
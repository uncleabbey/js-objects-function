// 1

function printDay (num) {
	switch (num) {
		case 1:
			return 'Sunday';
			break;
		case 2:
			return 'Monday';
			break;
		case 3:
			return 'Tuesday';
			break;
		case 4:
			return 'Wednesday';
			break;
		case 5:
			return 'Thursday';
			break;
		case 6:
			return 'Friday';
			break;
		case 7:
			return 'Saturday';
			break;
		default:
			return undefined
			break;
	}



// 2

function lastElement (arr) {
	if (!arr) {
		return undefined
	} else {
		return arr.pop()
	}
}

// 3

function numberCompare (x, y) {
	if (x > y) {
		return 'First is greater'
	} else if (x < y) {
		return 'Second is greater'
	} else {
		return 'Numbers are equal'
	}
}


// 4

function singleLetterCount (word, x) {
	var name = word.toLowerCase()
	var nameArr = name.split('');
	var count = 0;
	var letter = x.toLowerCase()

	for(var i = 0; i < nameArr.length; i++){
		if (nameArr[i] === letter) {
			count += 1;
		}
	}
	return count
}

// 5

function multipleLetterCount (str) {
	var sst = str.toLowerCase().split('')
	var counter = {}
	for(var i = 0, length1 = sst.length; i < length1; i++){
		if (!Object.keys(counter).includes(sst[i])) {
			counter[sst[i]] = 1
		} else {
			counter[sst[i]] += 1
		}
	}
	return counter;
}

// 6

function arrayManipulation (arr, cmd, location, value) {
	if (cmd === 'remove' && location === 'end') {
		return arr.pop()
	} else if(cmd === 'remove' && location === 'beginning') {
		return arr.shift()
	}
	else if(cmd === 'add' && location === 'beginning') {
		arr.unshift(value)
		return arr
	}
	else if(cmd === 'add' && location === 'end') {
		arr.push(value)
		return arr
	}
	return 'error'
}


// 7

function isPalindrome (word) {
	word = word.trim().toLowerCase().split('')

	for (var i = 0; i < word.length / 2; i++) {
		if(word[i] !== word[word.length - 1 - i]) {
			return false;
		}
	}
	return true
}
const reverseWords = function (s) {
	const arr = s.trim().split(/ +/);

	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
		start++;
		end--;
	}

	return arr.join(" ");
};

console.log(reverseWords("the sky is blue")); //"blue is sky the"
console.log(reverseWords("  hello world  ")); //"world hello"
console.log(reverseWords("a good   example")); //"example good a"

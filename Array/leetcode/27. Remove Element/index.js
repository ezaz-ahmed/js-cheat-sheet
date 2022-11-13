const removeElement = (nums, val) => {
	let k = 0;
	let i = 0;
	for (i; i < nums.length; i++) {
		if (nums[i] === val) {
			for (let j = i; j < nums.length; j++) {
				nums[j] = nums[j + 1];
			}
			i--;
			k++;
		}
	}

	return i - k;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5

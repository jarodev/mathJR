/**
 * returns all permutation of the given items
 * @param items to build the permutation of
 * @returns {*[]} the array of permutations
 */
export function permutations(items) {
	const tuples = [];
	for (let i = 0; i < items.length; i++) {
		for (let j = 0; j < items.length; j++) {
			const item = {};
			item.item1 = items[i];
			item.item2 = items[j];
			tuples.push(item);
		}
	}
	return tuples;
}

/**
 * returns a defined number of tuples in a random order
 * @param tuples array of elements to return
 * @param noOfItemsToReturn number of items to return
 * @returns {*[]} the returned array with the length of noOfItemsToReturn
 */
export function scrumbleTuples(tuples, noOfItemsToReturn) {
	const returnTuples = [];
	const items =
		noOfItemsToReturn && noOfItemsToReturn <= tuples.length
			? noOfItemsToReturn
			: tuples.length;
	for (let i = 0; i < items; i++) {
		const index = Math.floor(Math.random() * tuples.length);
		returnTuples.push(tuples[index]);
		tuples.splice(index, 1);
	}
	return returnTuples;
}

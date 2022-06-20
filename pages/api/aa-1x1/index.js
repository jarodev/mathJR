import { permutations, scrumbleTuples } from '../../../common/scrumbler';

/**
 * POST call for 1x1. Body contains json with following attributes:
 * numberOfTasks: how many tasks should be created
 * itemsToScrumble: array of objects containing two items
 * @param req server request
 * @param res server response contains an array of elements
 */
export default function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const numberOfTasks = parseInt(req.body.numberOfTasks);
			const itemsToScrumble = [];

			req.body.itemsToScrumble.forEach((element) => {
				itemsToScrumble.push(element);
			});

			if (numberOfTasks > Math.pow(itemsToScrumble.length, 2)) {
				res.status(400).send(
					`numberOfTasks: ${numberOfTasks} to big for amount of single items.`
				);
			} else {
				const tuples = permutations(itemsToScrumble);
				const tasks = scrumbleTuples(tuples, numberOfTasks);
				const resJSON = {
					tasks: tasks,
				};

				res.status(200).send(resJSON);
			}
		} catch (error) {
			res.status(400).send(JSON.stringify(error));
		}
	} else res.status(400).send('Only POST allowed');
}

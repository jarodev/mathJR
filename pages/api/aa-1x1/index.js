import { permutations, scrumbleTuples } from '../../../common/scrumbler';

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
			res.status(400).send(error);
		}
	} else res.status(400).send('Only POST allowed');
}

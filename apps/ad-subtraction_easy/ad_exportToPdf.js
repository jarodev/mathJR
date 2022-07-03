import { jsPDF } from 'jspdf';
import {
	COLUMN_WIDTH,
	FIELD_SIZE,
	LINE_HEIGHT,
	simpleGrid,
	writeStringIntoSquares,
} from '../../components/export/export_helper';

export function ad_exportToPdf(props) {
	const doc = jsPDF();
	doc.setFontSize(24);
	doc.text(55, 25, 'Subtrahieren ohne Übertrag');

	doc.setFontSize(12);

	const START_POS = {
		x: 25,
		y: 40,
	};

	for (let i = 0; i < props.length; i++) {
		const j = i % 18;
		if (j === 0 && i > 0) {
			doc.addPage();
		}

		switch (i % 3) {
			case 0:
				simpleGrid(
					doc,
					START_POS.x,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT,
					5,
					8
				);

				writeStringIntoSquares(
					doc,
					START_POS.x,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT,
					8,
					props[i].summand1.toString()
				);
				writeStringIntoSquares(
					doc,
					START_POS.x,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT + 2 * FIELD_SIZE,
					8,
					props[i].summand2.toString()
				);

				doc.text(
					START_POS.x + 1,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT + 4 * FIELD_SIZE - 1,
					'-'
				);

				break;

			case 1:
				simpleGrid(
					doc,
					START_POS.x + COLUMN_WIDTH,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT,
					5,
					8
				);
				writeStringIntoSquares(
					doc,
					START_POS.x + COLUMN_WIDTH,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT,
					8,
					props[i].summand1.toString()
				);
				writeStringIntoSquares(
					doc,
					START_POS.x + COLUMN_WIDTH,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT + 2 * FIELD_SIZE,
					8,
					props[i].summand2.toString()
				);

				doc.text(
					START_POS.x + COLUMN_WIDTH + 1,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT + 4 * FIELD_SIZE - 1,
					'-'
				);
				break;

			case 2:
				simpleGrid(
					doc,
					START_POS.x + 2 * COLUMN_WIDTH,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT,
					5,
					8
				);
				writeStringIntoSquares(
					doc,
					START_POS.x + 2 * COLUMN_WIDTH,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT,
					8,
					props[i].summand1.toString()
				);
				writeStringIntoSquares(
					doc,
					START_POS.x + 2 * COLUMN_WIDTH,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT + 2 * FIELD_SIZE,
					8,
					props[i].summand2.toString()
				);

				doc.text(
					START_POS.x + 2 * COLUMN_WIDTH + 1,
					START_POS.y + Math.floor(j / 3) * LINE_HEIGHT + 4 * FIELD_SIZE - 1,
					'-'
				);
				break;

			default:
				break;
		}
	}

	doc.save('EasyAddition.pdf');
	return <iframe src={doc} />;
}

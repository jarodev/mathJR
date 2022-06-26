import { jsPDF } from 'jspdf';

export default function exportToPdf(props) {
	const doc = jsPDF();
	doc.setFontSize(24);
	doc.text(75, 25, '1x1 Übungen');

	doc.setFontSize(12);

	const startPos = {
		x: 40,
		y: 40,
	};

	try {
		for (let i = 0; i < props.length; i++) {
			const offset = {
				x: 80 * (i % 2),
				y: 6 * Math.floor(i / 2) + 8 * Math.floor(i / 10),
			};
			const summand1 = parseInt(props[i].item1) + 1;
			doc.text(
				startPos.x + offset.x,
				startPos.y + offset.y,
				summand1.toString()
			);
			doc.text(startPos.x + 5 + offset.x, startPos.y + offset.y, ' * ');

			const summand2 = parseInt(props[i].item2) + 1;
			doc.text(
				startPos.x + 11 + offset.x,
				startPos.y + offset.y,
				summand2.toString()
			);
			doc.text(startPos.x + 16 + offset.x, startPos.y + offset.y, ' = ');

			doc.line(
				startPos.x + 25 + offset.x,
				startPos.y + 1 + offset.y,
				startPos.x + 45 + offset.x,
				startPos.y + 1 + offset.y
			);
		}
	} catch (e) {
		console.log(e);
	}

	doc.save('1x1Raetsel.pdf');
	return <iframe src={doc} />;
}

import { jsPDF } from 'jspdf';

export function ab_exportToPdf(props) {
	const doc = jsPDF();
	doc.setFontSize(24);
	doc.text(75, 25, 'Addieren ohne Übertrag');

	doc.setFontSize(12);

	function createBackground(doc, startPosX, startPosY) {
		doc.line(startPosX, startPosY, startPosX + 40, startPosY);
		doc.line(startPosX, startPosY + 5, startPosX + 40, startPosY + 5);
	}

	createBackground(doc, 100, 100);

	doc.save('EasyAddition.pdf');
	return <iframe src={doc} />;
}

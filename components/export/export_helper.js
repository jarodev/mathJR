export const COLUMN_WIDTH = 50;
export const LINE_HEIGHT = 40;
export const FIELD_SIZE = 5;

export function simpleGrid(doc, posX, posY, lines, columns) {
	doc.setDrawColor('#c2bcbc');
	//horizontal lines => y is constant
	for (let i = 1; i < lines; i++) {
		doc.line(
			posX,
			posY + i * FIELD_SIZE,
			posX + columns * FIELD_SIZE,
			posY + i * FIELD_SIZE
		);
	}
	//vertical lines => x is constant
	for (let i = 1; i < columns; i++) {
		doc.line(
			posX + i * FIELD_SIZE,
			posY,
			posX + i * FIELD_SIZE,
			posY + lines * FIELD_SIZE
		);
	}
	doc.setDrawColor('#000000');
	doc.setLineWidth(0.5);
	doc.line(
		posX,
		posY + 4 * FIELD_SIZE,
		posX + columns * FIELD_SIZE,
		posY + 4 * FIELD_SIZE
	);
	doc.setLineWidth(0.200025);
}

export function writeStringIntoSquares(doc, startx, starty, columns, string) {
	let startColumn = columns - 1 - string.length;
	for (let char in string) {
		doc.text(
			startx + startColumn * FIELD_SIZE + 1,
			starty + 2 * FIELD_SIZE - 1,
			string[char]
		);
		startColumn += 1;
	}
}

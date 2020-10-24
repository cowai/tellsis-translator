function doGet(e) {
	let src = e.parameter.text;
	let result = {
		message: src,
	};

	let out = ContentService.createTextOutput();
	out.setMimeType(ContentService.MimeType.JSON);
	out.setContent(JSON.stringify(result));
	return out;
}

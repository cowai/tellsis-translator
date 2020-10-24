function doGet(e) {
	const src = e.parameter.src;
	const lang = e.parameter.lang;

	let translation = '';
	if (src && lang) {
		translation = LanguageApp.translate(src, 'en', lang);
	}

	let response = {
		translation: translation,
	};

	let body;
	let out = ContentService.createTextOutput();

	const callback = e.parameter.callback;
	if (callback) {
		body = callback + '(' + JSON.stringify(response) + ')';
		out.setMimeType(ContentService.MimeType.JAVASCRIPT);
	} else {
		body = JSON.stringify(response);
		out.setMimeType(ContentService.MimeType.JSON);
	}

	out.setContent(body);
	return out;
}

function debug(text) {
	let out = ContentService.createTextOutput();
	out.setMimeType(ContentService.MimeType.JSON);

	let response = {
		debug: text,
	};

	body = JSON.stringify(response);
	return out.setContent(body);
}

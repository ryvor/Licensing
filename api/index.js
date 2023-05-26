
const query = new URLSearchParams(window.location.search);

if (query.has('$')) {
	const functionName = query.get('$');
	if (window[functionName] && typeof window[functionName] === 'function') {
		window[functionName]();
	}
}

// VALIDATE KEYS
var Validate = () => {
	var PROJ, KEY, UA;
	if((PROJ=query.get('project')) !== 0 && (KEY=query.get('key')) !== 0 && (UA=query.get('agent')) !== 0 ) {
		console.log(PROJ);
		console.log(KEY);
		console.log(UA);
	}
}
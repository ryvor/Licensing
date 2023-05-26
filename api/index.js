
const query = new URLSearchParams(window.location.search);

// VALIDATE KEYS
var Validate = () => {
	if((PROJ=query.get('project')) !== 0 && (KEY=query.get('key')) !== 0 && (UA=query.get('userAgent')) !== 0 ) {
		console.log(PROJ);
		console.log(KEY);
		console.log(UA);
	}
}
//
//
//
//
//

// VALIDATE KEYS
function Validate() {
	var PROJ, KEY, UA;
	if((PROJ=query.get('project')) !== 0 && (KEY=query.get('key')) !== 0 && (UA=query.get('agent')) !== 0 ) {
		// VALIDATE THE CODE AND UPLOAD TO THE ACCESS LOG
		if(KEY == '000000-000000-000000-000000-000000') {
			var res = {
				status: 'Valid',
				info: query,
			}
		} else {
			var res = {
				status: 'Invalid',
				info: query,
			}
		}
		document.write(JSON.stringify(res));
	}
}
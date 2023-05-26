//
//
//
//
//

// VALIDATE KEYS
function Validate() {
	var PROJ, KEY, UA;
	if((PROJ=params['project']) !== 0 && (KEY=params['key']) !== 0 && (UA=params['agent']) !== 0 ) {
		// VALIDATE THE CODE AND UPLOAD TO THE ACCESS LOG
		if(KEY == '000000-000000-000000-000000-000000') {
			var res = {
				status: 'Valid',
				info: params,
			}
		} else {
			var res = {
				status: 'Invalid',
				info: params,
			}
		}
		document.write(JSON.stringify(res));
	}
}
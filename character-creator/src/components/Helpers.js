import axios from "axios";

const BASEURL = 'http://dnd5eapi.co/api/spells/';
/**
 *
 * @param selectNum {int}
 * @returns foundClass {JSON}
 */
function queryFiveDB(selectNum)
{
	let foundJSON = null;
	axios.get( BASEURL + 'http://dnd5eapi.co/api/spells/1/')
		 .then(res =>
		 {
			 foundJSON = res.data;
		 });

	return foundJSON;
}

export default queryFiveDB;

//TODO, not sure why but the CORS workaround that I found doesn't seem to be working anymore, need to fix
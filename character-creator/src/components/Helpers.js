import axios from "axios";

const BASEURL = 'https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/';
/**
 *
 * @param selectNum {int}
 * @param string {string}
 * @returns foundClass {JSON}
 */
function queryFiveDB(selectNum, string)
{
	let foundJSON = null;
	axios.get( BASEURL + string + '/' + selectNum)
		 .then(res =>
		 {
			 foundJSON = res.data;
		 });

	return foundJSON;
}

export default queryFiveDB;
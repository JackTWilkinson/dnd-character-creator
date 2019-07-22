import axios from "axios";

/**
 *
 * @param selectNum {int}
 * @returns foundRace {JSON}
 */
function fetchRace(selectNum)
{
	let raceJSON = null;
	axios.get("http://www.dnd5eapi.co/api/races/" + selectNum + "/")
		 .then(res => {
		raceJSON = res.data;
		console.log(raceJSON);
	});

	return raceJSON;
}

/**
 * @param selectNum {int}
 * @returns foundClass {JSON}
 */
function fetchClass(selectNum){
	let classJSON = null;

	return classJSON;
}

export default fetchRace;

//TODO need to find a CORS workaround
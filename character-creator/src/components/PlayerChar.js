import React from "react";

class PlayerChar
{
	/**
	 * @param name {string}
	 * @param skills {array}
	 */
	constructor(name, skills)
	{
		this._name = name;
		this._skills = skills;
	}

	get name()
	{
		return this._name;
	}

	get skills()
	{
		return this._skills;
	}

	set name(value)
	{
		this._name = value;
	}

	set skills(value)
	{
		this._skills = value;
	}
}

export default PlayerChar;
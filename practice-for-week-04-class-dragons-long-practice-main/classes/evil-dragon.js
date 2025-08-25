const Dragon = require("./dragon");

class EvilDragon extends Dragon {
	constructor(name, color, evilDoings = [], nemesis = null) {
		super(name, color);
		this.evilDoings = evilDoings;
		this.nemesis = nemesis;
	}

	dontInviteThemOverForDinner() {
		this.evilDoings.forEach((doThing) => {
			console.log(`${this.name} will ${doThing}`);
		});
	}

	burnsNemesis() {
		return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
	}
}

try {
	module.exports = EvilDragon;
} catch {
	module.exports = null;
}
export const ISO = {
	now() { 
		const today = new Date();
		return today.toISOString();
	},
}, 
UTC = {
	now() {
		const today = new Date();
		return today.toUTCString();
	},
}, 
year = {
	now() {
		return new Date().getFullYear();
	},
}, 
YMD = {
	now() {
		const today = new Date();
		return today.toISOString().slice(0, 10);
	},
};
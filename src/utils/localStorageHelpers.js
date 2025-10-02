// LocalStorage helpers: get, set, remove

export function getItem(key, defaultValue = null) {
	try {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : defaultValue;
	} catch {
		return defaultValue;
	}
}

export function setItem(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
}

export function removeItem(key) {
	try {
		localStorage.removeItem(key);
		return true;
	} catch {
		return false;
	}
}

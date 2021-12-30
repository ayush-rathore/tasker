import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache_";

const store = async (key, value) => {
	try {
		await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
	}
};

const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.parse(value);

		if (!item) return null;

		return item.value;
	} catch (error) {
		console.log(error);
	}
};

export default { store, get };

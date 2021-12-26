// Listing all the items

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
// import { useEffect } from "react";
import AppText from "../components/AppText";
import Button from "../components/Button";
// import ActivityIndicator from "../components/ActivityIndicator";
// import useApi from "../hooks/useApi";
// import listings from "../components/listingData.js";

function TaskScreen({ navigation }) {
	// const {
	// 	data: listings,
	// 	error,
	// 	loading,
	// 	request: loadListing,
	// } = useApi(listingAPI.getListings);

	// useEffect(() => {
	// 	loadListing();
	// }, []);

	return (
		<Screen style={styles.screen}>
			{/* {error && (
				<>
					<AppText>Couldn't fetch the items.</AppText>
					<Button
						title="Retry"
						onPress={loadListing}
						color="primary"
					/>
				</>
			)}
			<ActivityIndicator visible={loading} /> */}
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing._id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						price={item.price}
						image={item.image}
						onPress={() =>
							// navigation.navigate("ListingsDetails", item)
							console.log("Card tapped")
						}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
});

export default TaskScreen;

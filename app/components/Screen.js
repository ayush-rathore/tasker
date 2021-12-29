// Basic screen component for displaying other components

import React from "react";
import { View } from "react-native";

function Screen({ children, style }) {
	return <View style={[{ paddingTop: 10, flex: 1 }, style]}>{children}</View>;
}

export default Screen;

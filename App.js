import React, { useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";

const getFonts = () => {
	return Font.loadAsync({
		"nanito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"nanito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (fontsLoaded) {
		return <Home />;
	} else {
		return (
			<AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
		);
	}
}

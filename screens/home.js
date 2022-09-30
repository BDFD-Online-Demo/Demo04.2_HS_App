/*
 * @Date         : 2022-09-30 13:45:35
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-30 13:52:46
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \screens\home.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */

import React, { useState } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
} from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{
			title: "Home Page",
			rating: 5,
			body: "This is Home Page",
			key: "1",
		},
		{
			title: "About Us Page",
			rating: 4,
			body: "This is About Us Page",
			key: "2",
		},
		{
			title: "Contact Us Page",
			rating: 3,
			body: "This is About Us Page",
			key: "3",
		},
	]);

	return (
		<View style={globalStyles.container}>
			<View style={styles.container}>
				<Text style={styles.dummyText}>Heart Sushi App</Text>
				<Image style={styles.logo} source={require("../assets/hslogo.jpg")} />
			</View>
			<View style={styles.empty}></View>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("ReviewDetails", item)}>
						<Text style={globalStyles.titleText}>Click to {item.title}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	empty: {
		margin: 32,
	},
	dummyText: {
		margin: 16,
		padding: 16,
		borderWidth: 2,
		borderColor: "red",
	},
	logo: {
		width: 66,
		height: 58,
	},
});

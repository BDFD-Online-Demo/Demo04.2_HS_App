/*
 * @Date         : 2022-09-30 13:45:35
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-30 14:55:30
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
			// rating: 4,
			body: "What we do Our little story",
			key: "2",
			content1:
				"Welcome to Heart Sushi we have been recognized as the most popular Japanese restaurant and “All You Can Eat” (AYCE) sushi buffet in Mississauga. A la carte menu also available at any time. We never closed and open 365 days a year.",
			content2:
				"We are located right at the major shopping centre “Heartland Town Centre” Which seating near by Highway 401.",
			content3:
				'Heart sushi has been recognized from within the community with awards such as Top 5 "all you can eat sushi" in Mississauga 2014, winner of "Yelpie" award for "most favorite sushi in Mississauga 2014" and "the best Asian food in Canada" from Asian Star TV Top 2',
		},
		{
			title: "Menu & Discount Page",
			rating: 4,
			body: "This is About Us Page",
			key: "3",
		},
		{
			title: "Contact Us Page",
			rating: 3,
			body: "This is About Us Page",
			key: "4",
		},
		{
			title: "Online Order Page",
			rating: 3,
			body: "This is About Us Page",
			key: "5",
		},
		{
			title: "Online Reservation Page",
			rating: 3,
			body: "This is About Us Page",
			key: "6",
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

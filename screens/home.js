/* @Date         : 2022-09-16 16:02:15
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 11:02:55
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \screens\home.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
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
			{/* <Text style={globalStyles.titleText}>Home Screens</Text> */}
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("ReviewDetails", item)}>
						<Text style={globalStyles.titleText}>{item.title}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

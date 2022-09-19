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
			title: "Zelda, Breath of Fresh Air",
			rating: 5,
			body: "Iorem Ipsum",
			key: "1",
		},
		{
			title: "Gotta Catch Them All(again)",
			rating: 4,
			body: "Iorem Ipsum",
			key: "2",
		},
		{
			title: "Not so 'Final' Fantasy",
			rating: 3,
			body: "Iorem Ipsum",
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

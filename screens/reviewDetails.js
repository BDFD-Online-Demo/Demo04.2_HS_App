/*
 * @Date         : 2022-09-16 16:02:28
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-30 14:55:52
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \screens\reviewDetails.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function ReviewDetails({ navigation }) {
	return (
		<View style={globalStyles.container}>
			{/* <Text>Review Detail Screens</Text> */}
			<Text>{navigation.getParam("title")}</Text>
			<Text>{navigation.getParam("body")}</Text>
			<Text>{navigation.getParam("rating")}</Text>
			<Text>{navigation.getParam("content1")}</Text>
			<Text>{navigation.getParam("content2")}</Text>
			<Text>{navigation.getParam("content3")}</Text>
		</View>
	);
}

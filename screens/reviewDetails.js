/*
 * @Date         : 2022-09-16 16:02:28
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 17:13:57
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \screens\reviewDetails.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function ReviewDetails({ navigation }) {
	const pressHandler = () => {
		navigation.goBack();
	};

	return (
		<View style={globalStyles.container}>
			<Text>Review Detail Screens</Text>
			<Button title="Back to Home Page" onPress={pressHandler} />
		</View>
	);
}

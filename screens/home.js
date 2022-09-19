/* @Date         : 2022-09-16 16:02:15
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 11:02:55
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \screens\home.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function Home() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screens</Text>
		</View>
	);
}

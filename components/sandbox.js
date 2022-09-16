/*
 * @Date         : 2022-09-16 15:04:47
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-16 15:25:34
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \components\sandbox.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>One</Text>
			<Text style={styles.boxTwo}>Two</Text>
			<Text style={styles.boxThree}>Three</Text>
			<Text style={styles.boxFour}>Four</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "flex-end",
		paddingTop: 40,
		backgroundColor: "#ddd",
	},
	boxOne: {
		flex: 2,
		backgroundColor: "violet",
		padding: 10,
	},
	boxTwo: {
		flex: 1,
		backgroundColor: "gold",
		padding: 20,
	},
	boxThree: {
		flex: 1,
		backgroundColor: "coral",
		padding: 30,
	},
	boxFour: {
		flex: 1,
		backgroundColor: "skyblue",
		padding: 40,
	},
});

/*
 * @Date         : 2022-09-13 17:13:24
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-14 14:43:48
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \App.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.boldText}>Hello World</Text>
			</View>
			<View style={styles.body}>
				<Text>Lorem ipsum dolor sit amet.</Text>
				<Text>Lorem ipsum dolor sit amet.</Text>
				<Text>Lorem ipsum dolor sit amet.</Text>
				<Text>Lorem ipsum dolor sit amet.</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "pink",
		padding: 20,
	},
	boldText: {
		fontWeight: "bold",
	},
	body: {
		backgroundColor: "yellow",
		padding: 20,
	},
});

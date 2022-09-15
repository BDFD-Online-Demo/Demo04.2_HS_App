/*
 * @Date         : 2022-09-15 13:29:40
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-15 13:45:55
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \components\header.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>My Todos</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 38,
		backgroundColor: "coral",
	},
	title: {
		textAlign: "center",
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
	},
});

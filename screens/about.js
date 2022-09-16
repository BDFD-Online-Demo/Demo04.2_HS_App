/*
 * @Date         : 2022-09-16 16:02:10
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-16 16:41:29
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \screens\about.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function About() {
	return (
		<View style={styles.container}>
			<Text>About Screens</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
});

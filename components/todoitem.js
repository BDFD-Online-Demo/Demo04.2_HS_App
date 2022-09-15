/*
 * @Date         : 2022-09-15 13:49:01
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-15 14:03:53
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \components\todoitem.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Todoitem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<Text style={styles.item}>{item.text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 10,
	},
});

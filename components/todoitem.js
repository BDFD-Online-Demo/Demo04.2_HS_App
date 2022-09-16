/*
 * @Date         : 2022-09-15 13:49:01
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-16 15:53:26
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \components\todoitem.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function Todoitem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<View style={styles.item}>
				<MaterialIcons name="delete" size={24} color="black" />
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 10,
	},
	itemText: {
		marginLeft: 10,
	},
});

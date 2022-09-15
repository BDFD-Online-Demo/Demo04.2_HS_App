/*
 * @Date         : 2022-09-15 14:12:25
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-15 14:22:58
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \components\addtodo.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo() {
	const [text, setText] = useState("");

	const changeHandler = (val) => {
		setText(val);
	};

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="new todo ..."
				onChangeText={changeHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		paddind: 40,
	},
});

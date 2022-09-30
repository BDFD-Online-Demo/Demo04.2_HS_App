/*
 * @Date         : 2022-09-30 13:45:35
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-30 14:10:51
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \assets\styles\global.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
	},
	titleText: {
		marginTop: 16,
		textAlign: "center",
		padding: 10,
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 2,
		fontFamily: "nunito-bold",
		fontSize: 18,
		color: "#333",
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
	},
});

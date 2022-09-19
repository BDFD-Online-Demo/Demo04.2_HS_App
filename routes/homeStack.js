/*
 * @Date         : 2022-09-19 12:41:20
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 18:04:29
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \routes\homeStack.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: "GameZone",
			headerStyle: { backgroundColor: "lightblue" },
		},
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: "Review The Details",
		},
	},
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
	headerTintColor: "#444",
	headerStyle: { backgroundColor: "#eee", height: 60 },
});

export default createAppContainer(HomeStack);

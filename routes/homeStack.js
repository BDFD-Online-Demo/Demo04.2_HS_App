/*
 * @Date         : 2022-09-19 12:41:20
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 12:56:38
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \routes\homeStack.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";

const screens = {
	Home: { screen: Home },
	ReviewDetail: { screen: ReviewDetail },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

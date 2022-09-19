/*
 * @Date         : 2022-09-16 15:01:36
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-09-19 13:07:21
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \babel.config.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: ["react-native-reanimated/plugin"],
	};
};

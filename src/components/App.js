import React, { Component } from 'react';

// AJAX api
import Ajax from "../api/Api"

let Api = Ajax("GET","https://api.github.com/gists").then( res => {
	// console.log(res,"请求成功了！")
	console.log("res")
}).catch( error => {
	console.log(error)
})

/**
 * 1、组件通信
 * 2、生命周期
 * 3、路由
 * 4、redux
 */

 
// 、简单的评论
import Comments from "./Comments.jsx"

// 4 import沒有指定文件只是指定文件夾名字的話，默認會找文件夾下面的inex.js
import {add,resetPhone} from "@/utils"

let str = resetPhone(13585691264)

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3 className = "index-title">二、简单的评论</h3>
				<Comments />
			</div>
		);
	}
}

export default App

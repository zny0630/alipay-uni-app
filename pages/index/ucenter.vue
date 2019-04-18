<template>
	<view class="content">
		<view class="top-t"></view>
		<view class="top">
			<view class="title">
				<text>{{title}}</text>
			</view>
			<view class="set">
				<text>{{setting}}</text>
			</view>
		</view>

		<view class="infor">
			<image src="../../static/avatar.jpg"></image>
			<text class="username">{{username}}</text><br>
			<text class="mobile">{{mobile}}</text>
		</view>

		<view class="item" v-for="(user,index) in users" :key="index">
			<image :src="user.avatar" mode=""></image>
			<view class="right">{{user.name}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我的',
				setting: '设置',
				username: '洋酱',
				mobile: '18761672058',
				avatar: 'avatar.jpg',
				users: [{
						name: '支付宝会员',
						avatar: '../../static/huiyuan.png'
					},
					{
						name: '商家服务',
						avatar: '../../static/service.png'
					},
					{
						name: '账单',
						avatar: '../../static/zhangdan.png'
					},
					{
						name: '公益',
						avatar: '../../static/gongyi.png'
					},
					{
						name: '余额',
						avatar: 'static/yue.png'
					},
					{
						name: '余额宝',
						avatar: 'static/yuebao.png'
					},
					{
						name: '银行卡',
						avatar: 'static/yinhangka.png'
					},
					{
						name: '芝麻信用',
						avatar: 'static/zhimaxinyong.png'
					},
					{
						name: '蚂蚁借呗',
						avatar: 'static/mayijiebei.png'
					}
				]


			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
<style>
	.top-t {
		width: 100%;
		height: 60upx;
		background-color: #16629e;
	}

	.top {
		display: flex;
		height: 50upx;
		background: #1a81d0;
		justify-content: space-between;
		color: #FFFFFF;
	}

	.infor {
		border-top: 1upx solid #1a81d0;
		display: flex;
		height: 180upx;
		width: 100%;
		background: #1a81d0;
		color: #FFFFFF;
		padding-top: 40upx;
	}

	.infor image {
		margin-left: 30upx;
		width: 120upx;
		height: 120upx;
		border-radius: 5px;
	}

	.username {
		margin-top: 10upx;
		margin-left: 50upx;
	}

	.mobile {
		margin-top: 50upx;
		margin-left: -80upx;
	}

	.item {
		width: 93%;
		display: flex;
		height: 90upx;
		border: 1upx solid #eee;
		border-left: 0px;
		border-top:0px;
		border-right: 0px;
		background-color: #fff;
		margin-left: 20px;
		padding-bottom: 30upx;
	}

	.item image {
		height: 50upx;
		width: 50upx;
		margin-top: 40upx;
	}

	.right {
		margin-left: 20upx;
		margin-top: 50upx;
	}
	.title {
		margin-left: 30upx;
		margin-top: 20upx;
	}
	.set {
		margin-right: 30upx;
		margin-top: 20upx;
	}
</style>

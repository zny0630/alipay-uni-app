<template>
	<view class="containner">
		<view class="topper"></view>
		<view class="top">
			<text class="top-title">朋友</text>
			<image class="tianjia" src="../../static/add.png"></image>
			<image class="caifua" src="../../static/caifua.png"></image>
			<image class="sousuo" src="../../static/sousuo.png"></image>
		</view>
		<view class="sec-top"><image src="../../static/top2.JPG"></image></view>
		<view class="divide"></view>
		<view class="bigcard">
			<view class="card" v-for="(book, index) in books" :key="index">
				<view class=" txcard"><img class="touxiang" :src="book.cover" /></view>
				<view class=" fontcard">
					<span class="ko titfont">{{ book.title }}</span>
					<span class="ko tea">{{ book.time }}</span>
					<br />
					<span class="ko word">{{ book.word }}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			books: [
				{
					title: '毛玥玥',
					word: '你有1个现金红包待领取',
					time: '10:55',
					cover: 'static/1.jpg'
				},
				{
					title: '毛玥',
					word: '[转账]转账4.00元',
					time: '9:20',
					cover: 'static/2.jpg'
				},
				{
					title: '洋baby',
					word: '[转账]转账25.00元',
					time: '9:00',
					cover: 'static/3.jpg'
				},
				{
					title: '曾航航',
					word: '[转账]转账38.00元',
					time: '07:30',
					cover: 'static/4.jpg'
				},
				{
					title: '公共出行',
					word: '踏春红包，承包你的出行！',
					time: '昨天',
					cover: 'static/5.png'
				},
				{
					title: '芝麻信用',
					word: '聚创商业新价值，支付宝开放日报名启动！',
					time: '星期一',
					cover: 'static/6.png'
				},
				{
					title: '九年的承诺',
					word: '[转账]转账52.00元',
					time: '3月17日',
					cover: 'static/6.jpg'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.divide {
	width: 100%;
	height: 20upx;
	background-color: #f5f5f5;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}

.sec-top {
	width: 100%;
	height: 230upx;
}
.sec-top image {
	width: 100%;
	height: 100%;
}

.touxiang {
	width: 52px;
	height: 52px;
	border-radius: 5px;
	margin: 0 auto;
}
.fontcard {
	width: 270px;
	height: 52px;
	border-top: 0px;
	border-right: 0px;
	border-left: 0px;
	border-bottom: #e6e6e6 0.2px solid;
	margin-left: 150upx;
	margin-top: 10px;
}
.txcard {
	width: 52px;
	height: 55px;
	float: left;
	margin-top: 10px;
}
.sousuo {
	width: 50upx;
	height: 50upx;
	float: right;
	margin-right: 20px;
}
.caifua {
	width: 50upx;
	height: 50upx;
	float: right;
	margin-right: 13px;
}
.tianjia {
	width: 58upx;
	height: 58upx;
	float: right;
	margin-right: 5px;
}
.word {
	font-size: 14px;
	color: darkgray;
}
.titfont {
	font-size: 17px;
}

.tea {
	font-size: 12px;
	float: right;
	color: #bfbfbf;
	margin-right: 20upx;
}

.bigcard {
	width: 100%;
	height: 450px;
	border-color: #a9a9a9;
}

.card {
	text-align: left;
	padding-top: 5px;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 14px;
	line-height: 25px;
}

.top {
	background-color: #1b82cf;
	height: 80upx;
	width: 100%;
	padding-top: 11px;
}
.top-title {
	margin-left: 30upx;
	font-size: 18px;
	color: #ffffff;
}
.topper {
	width: 100%;
	height: 60upx;
	background-color: #16629e;
}
</style>

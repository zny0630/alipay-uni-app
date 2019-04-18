<template>
	<view class="content">
		<view class="top"></view>
		<view class="top_card">
			<view class="firstline">
				<input class="top_search" type="text" placeholder="搜索" />
				<image class="addressbook" src="../../static/addressbook.png" />
				<image class="add" src="../../static/add.png" />
				<br />
			</view>
			<view class="top-t-card">
				<view class="card">
					<image class="saoyisao" src="../../static/saoyisao.png" />
					<br />
					<text class="top-text-sao">扫一扫</text>
				</view>
				<view class="card_c">
					<image class="fukuan" src="../../static/fukuan.png" />
					<br />
					<text class="top-text-fu">付钱</text>
				</view>
				<view class="card_c">
					<image class="shouqian" src="../../static/shouqian.png" />
					<br />
					<text class="top-text-shou">收钱</text>
				</view>
				<view class="card_c">
					<image class="kabao" src="../../static/kabao.png" />
					<br />
					<text class="top-text-ka">卡包</text>
				</view>
			</view>
		</view>
		<view class="second-card">
			<view class="second-t-card first">
				<view class="card1">
					<image src="../../static/zhuanzhang.png" />
					<br />
					<text class="top-text-sao">转账</text>
				</view>
				<view class="card2">
					<image src="../../static/xinyong.png" />
					<br />
					<text class="top-text-sao">信用卡还款</text>
				</view>
				<view class="card2">
					<image src="../../static/phone.png" />
					<br />
					<text class="top-text-sao">手机充值</text>
				</view>
				<view class="card2">
					<image src="../../static/yuebao.png" />
					<br />
					<text class="top-text-sao">余额宝</text>
				</view>
			</view>
			<view class="second-t-card second">
				<view class="card1">
					<image src="../../static/game.png" />
					<br />
					<text class="top-text-sao">游戏中心</text>
				</view>
				<view class="card2">
					<image src="../../static/didi.png" />
					<br />
					<text class="top-text-sao">滴滴出行</text>
				</view>
				<view class="card2">
					<image src="../../static/lifepay.png" />
					<br />
					<text class="top-text-sao">生活缴费</text>
				</view>
				<view class="card2">
					<image src="../../static/school.png" />
					<br />
					<text class="top-text-sao">大学生活</text>
				</view>
			</view>
			<view class="second-t-card second">
				<view class="card1">
					<image src="../../static/love.png" />
					<br />
					<text class="top-text-sao">爱心捐赠</text>
				</view>
				<view class="card2">
					<image src="../../static/car.png" />
					<br />
					<text class="top-text-sao">车主服务</text>
				</view>
				<view class="card2">
					<image src="../../static/city.png" />
					<br />
					<text class="top-text-sao">城市服务</text>
				</view>
				<view class="card2">
					<image src="../../static/more.png" />
					<br />
					<text class="top-text-sao">更多</text>
				</view>
			</view>
		</view>
		<view class="divide"></view>
		<view class="third-card">
			<image class="tcard" src="../../static/ant.png" />
			<image class="trcard" src="../../static/right.png" />
			<text class="leftfont matop">· &nbsp;&nbsp;完成饲料任务获得新饲料</text>
			<text class="rightfont">2天前</text>
			<br />
			<text class="leftfont">· &nbsp;&nbsp;你本次付款获得的优惠</text>
			<text class="rightfont">2天前</text>
			<br />
		</view>
		<view class="divide"></view>
		<view class="forth-card"><image src="../../static/checkin.jpg" /></view>
		<view class="divide"></view>
		<view class="bottom-card">
			<text class="f_font">惠支付</text>
			<view class="f_card"><image src="../../static/f_card1.png" /></view>
			<text class="f_font">生活服务</text>
			<view class="f_card"><image src="../../static/f_card2.png" /></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.top {
	width: 100%;
	height: 60upx;
	background-color: #16629e;
}
.top_card {
	height: 220upx;
	width: 100%;
	background-color: #1a81d0;
	border: #1a81d0 1px solid;
	padding-top: 20upx;
}
.second-card {
	width: 100%;
	height: 400upx;
	margin-bottom: 20upx;
}

.second-t-card {
	width: 100%;
	display: flex;
	font-size: 12px;
}
.first {
	margin-top: 20upx;
}
.second {
	margin-top: 40upx;
}

.second-t-card image {
	width: 65upx;
	height: 65upx;
}
.divide {
	width: 100%;
	height: 20upx;
	background-color: #f5f5f5;
}
.top-t-card {
	width: 100%;
	display: flex;
	color: #ffffff;
	font-size: 12px;
	margin-top: 17upx;
}
.firstline {
	margin-left: 20upx;
}
.top_search {
	border: #1a81d0 1px solid;
	background-color: #ffffff;
	width: 72%;
	height: 60upx;
	float: left;
	text-indent: 55upx;
	outline: none;
	border-radius: 7upx;
	font-size: 13px;
	background-image: url(../../static/search.png);
	background-repeat: no-repeat;
	background-position-y: center;
	background-position-x: 15upx;
}
.addressbook {
	width: 60upx;
	height: 60upx;
	margin-left: 32upx;
}
.add {
	width: 62upx;
	height: 62upx;
	margin-left: 26upx;
}
.saoyisao {
	width: 65upx;
	height: 65upx;
}
.fukuan {
	width: 53upx;
	height: 53upx;
	margin-top: 8upx;
	margin-bottom: 8upx;
}
.shouqian {
	width: 60upx;
	height: 53upx;
	margin-top: 8upx;
	margin-bottom: 8upx;
}
.kabao {
	width: 65upx;
	height: 65upx;
}
.card {
	width: 25%;
	text-align: center;
}
.card_c {
	width: 25%;
	text-align: center;
}
.card1 {
	width: 25%;
	text-align: center;
}
.card2 {
	width: 25%;
	text-align: center;
}
.third-card {
	width: 100%;
	height: 124upx;
	padding-top: 17upx;
}
.tcard {
	width: 80upx;
	height: 80upx;
	margin-top: 13upx;
	margin-left: 50upx;
	float: left;
}
.trcard {
	width: 28upx;
	height: 28upx;
	margin-top: 40upx;
	margin-right: 40upx;
	float: right;
}
.leftfont {
	margin-left: 20upx;
	font-size: 13px;
}
.rightfont {
	font-size: 13px;
	color: #868686;
	margin-left: 50upx;
}
.forth-card {
	width: 100%;
	height: 180upx;
}
.forth-card image {
	width: 100%;
	height: 100%;
}

.bottom-card {
	padding-top: 23upx;
	font-weight: 500;
	font-size: 17px;
}
.f_font {
	margin-left: 40upx;
	
}
.f_card {
	width: 90%;
	height: 140upx;
	margin: 0 auto;
	outline: none;
	border: 1upx #f5f5f5 solid;
	margin-top: 23upx;
	margin-bottom: 40upx;
}
.f_card image {
	width: 100%;
	height: 100%;
}
</style>

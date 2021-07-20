<template>
	<div class="screen">
		<!-- 从这开始大屏代码 -->
		<div class="sjhj border">
			<div class="title">
				<span>数据汇聚</span>
				<img src="./assets/sjhj/biaotibeijing.png" alt="">
			</div>
			<div class="c">
				<div class="a-t">接入数据统计</div>
				<div class="c-c">
					<div class="c-c-t">数据总量</div>
					<div class="c-c-c">
						<img src="./assets/sjhj/graphchart1.png" alt="">
						<div class="f">
							<span v-for="(item,index) in 7" v-text="Math.floor(Math.random()*10)"></span>
						</div>
						条
					</div>
				</div>
				<div class="c-b">
					<div class="c-b-t">
						<div class="f">应用总数</div>
						<div class="s">
							<span>46564</span>
							<span>万条</span>
						</div>
					</div>
					<div class="c-b-t">
						<div class="f">数据资源种类</div>
						<div class="s">
							<span>10304</span>
							<span>种</span>
						</div>
					</div>
					<div class="c-b-t">
						<div class="f">数据日增量</div>
						<div class="s">
							<span>46564</span>
							<span>万条</span>
						</div>
					</div>
				</div>
			</div>
			<div class="b">
				<div class="a-t">应用系统TOP5</div>
				<div class="b-c">
					<div class="b-c-l">
						<div class="f">
							<span>数据量</span>
							<span>万条</span>
						</div>
						<div v-for="(item,index) in 5" class="s">
							<div class="s-t"
								:style="'background-image: url('+require('@/assets/sjhj/react'+(index+1)+'.png')+')'">
								<span :style="{'background-color': colorArr2[index],'color':colorArr1[index]}"
									class="s-t-f" v-text="'0'+(index+1)"></span>
								<span :style="{'color':colorArr2[index]}" class="s-t-s"
									v-text="'数据可视化'+sjhjArr[index]"></span>
							</div>
							<div class="s-c" v-text="fillNum(index)"></div>
						</div>
					</div>
					<div class="b-c-r">
						<div class="f">
							<span>数据种类</span>
							<span>万条</span>
						</div>
						<div v-for="(item,index) in 5" class="s">
							<div class="s-f">
								<div class="s-t">
									<span :style="{'background-color': colorArr1[index]}" class="s-t-f"
										v-text="'0'+(index+1)"></span>
									<span :style="{'color':colorArr2[index]}" class="s-t-s"
										v-text="'数据可视化'+sjhjArr[index]"></span>
								</div>
								<div class="s-c" v-text="fillNum(index)"></div>
							</div>
							<div class="s-s" :style="{'border-top': '4px solid '+ colorArr2[index]}"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sjzc">
			<div class="border">
				<div class="title">
					<span>数据资产</span>
					<img src="./assets/sjhj/biaotibeijing.png" alt="">
				</div>
				<div class="c a-c">
					<div class="c-t f">
						<img src="./assets/sjzc/icon1.png" alt="">
						<div class="c-c">
							<div class="c-c-t">数据资源种类</div>
							<div class="c-c-c"><span
									v-text="Math.floor(Math.random()*100000+100000)"></span><span>条</span></div>
						</div>
					</div>
					<div class="c-t s" style="margin-left: 20px;">
						<img src="./assets/sjzc/icon2.png" alt="">
						<div class="c-c">
							<div class="c-c-t">数据总量</div>
							<div class="c-c-c"><span
									v-text="Math.floor(Math.random()*100000+100000)"></span><span>条</span></div>
						</div>
					</div>
				</div>
				<img class="b" src="./assets/sjzc/bg.png" alt="">
			</div>
			<div class="c m a-c">
				<div class="f">
					<div class="c-t">
						<div class="c-c">
							<div class="c-c-t">总量：</div>
							<div class="c-c-c"><span v-text="Math.floor(Math.random()*1000+1000)"></span><span>万条</span>
							</div>
						</div>
						<div class="c-c">
							<div class="c-c-t">种类：</div>
							<div class="c-c-c"><span v-text="Math.floor(Math.random()*1000+1000)"></span><span>条</span>
							</div>
						</div>
					</div>
					<div class="border c-icon">
						<img src="./assets/sjzc/bc1.png" alt="">
						<div class="f">图片库</div>
					</div>
				</div>
				<div class="s">
					<div class="c-t">
						<div class="c-c">
							<div class="c-c-t">总量：</div>
							<div class="c-c-c"><span v-text="Math.floor(Math.random()*1000+1000)"></span><span>万条</span>
							</div>
						</div>
						<div class="c-c">
							<div class="c-c-t">种类：</div>
							<div class="c-c-c"><span v-text="Math.floor(Math.random()*1000+1000)"></span><span>条</span>
							</div>
						</div>
					</div>
					<div class="border c-icon">
						<img src="./assets/sjzc/bc2.png" alt="">
						<div class="f">文件库</div>
					</div>
				</div>
				<div class="r">
					<div class="c-t">
						<div class="c-c">
							<div class="c-c-t">总量：</div>
							<div class="c-c-c"><span v-text="Math.floor(Math.random()*1000+1000)"></span><span>万条</span>
							</div>
						</div>
						<div class="c-c">
							<div class="c-c-t">种类：</div>
							<div class="c-c-c"><span v-text="Math.floor(Math.random()*1000+1000)"></span><span>条</span>
							</div>
						</div>
					</div>
					<div class="border c-icon">
						<img src="./assets/sjzc/bc3.png" alt="">
						<div class="f">日志库</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sjgx border">
			<div class="title">
				<span>数据共享</span>
				<img src="./assets/sjhj/biaotibeijing.png" alt="">
			</div>
			<div class="b">
				<div class="b-a">
					<div class="b-t">
						<div class="c-t-t">数据资源总数</div>
						<div class="c-t-c f" v-text="Math.floor(Math.random()*10000+10000)"></div>
					</div>
					<div class="b-t">
						<div class="c-t-t">数据总量</div>
						<div class="c-t-c f" v-text="Math.floor(Math.random()*10000+10000)"></div>
					</div>
					<div class="b-t">
						<div class="c-t-t">交换数据总量</div>
						<div class="c-t-c f" v-text="Math.floor(Math.random()*10000+10000)"></div>
					</div>
				</div>
				<div class="b-a">
					<div class="b-t">
						<div class="c-t-t">访问接口用户数</div>
						<div class="c-t-c m" v-text="Math.floor(Math.random()*10000+10000)"></div>
					</div>
					<div class="b-t">
						<div class="c-t-t">访问接口总数</div>
						<div class="c-t-c m" v-text="Math.floor(Math.random()*10000+10000)"></div>
					</div>
				</div>
			</div>
			<div class="a-c">
				<div class="c-t f">
					<div class="c-c">
						<div class="c-c-t">数据资源种类</div>
						<div class="c-c-c"><span v-text="Math.floor(Math.random()*100000+100000)"></span><span>条</span>
						</div>
					</div>
				</div>
				<div class="c-t s" style="margin-left: 20px;">
					<div class="c-c">
						<div class="c-c-t">数据总量</div>
						<div class="c-c-c"><span v-text="Math.floor(Math.random()*100000+100000)"></span><span>条</span>
						</div>
					</div>
				</div>
				<div class="c-t r" style="margin-left: 20px;">
					<div class="c-c">
						<div class="c-c-t">数据总量</div>
						<div class="c-c-c"><span v-text="Math.floor(Math.random()*100000+100000)"></span><span>条</span>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="sjzz border">
			<div class="a-t">数据增长情况</div>
			<div id="sjzzChart" :style="{height: '300px'}"></div>
		</div>
		<div class="sjrd border">
			<div class="a-t">热点数据TOP7</div>
			<div id="sjrdChart" :style="{width: '100%', height: '300px'}"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				sjhjArr: ['一', '二', '三', '四', '五'],
				colorArr1: ["#ab2d5d", "#c47f3b", "#2d76cc", '#31a6c4', '#31a6c4'],
				colorArr2: ["#fbcbde", "#ffe1c3", "#bddbff", '#D2F6FF', '#D2F6FF'],
			}
		},
		created() {
			var s = `
		width: 100%;
		height: 100%;
		padding: rem(20);
		box-sizing: border-box;
		display: grid;
		// grid-template-rows: 680px 340px;
		// grid-template-columns: 540px 760px 540px;
		// 作为响应式,大屏适配所有屏幕尺寸
		// grid-template-rows: 2fr 1fr;
		// grid-template-columns: 1fr 1.4fr 1fr;
		grid-template-rows: rem(680) rem(340);
		grid-template-columns: rem(540) rem(760) rem(540);
		grid-row-gap: rem(20);
		grid-column-gap: rem(20);
		background-color: #171842;
		font-family: $fontFamily;
		font-size: rem(16);
		// overflow: scroll;

		.border {
			border: rem(1) solid #3048ae;

			.title {
				display: grid;
				font-size: rem(20);
				color: $fontColor;
				margin-top: rem(5);

				span {
					text-align: center;
				}

				img {
					width: 100%;
				}
			}
		}

		.a-t {
			font-size: rem(16);
			color: $fontColor;
		}

		@mixin a-c {
			.c-t {
				display: flex;
				align-items: center;
				background-image: url(assets/sjzc/icon-bg.png);
				background-size: 100% 100%;
				padding: rem(10) rem(20);

				img {
					margin-right: rem(10);
				}

				.c-c {
					display: flex;
					flex-direction: column;
					align-items: flex-start;

					.c-c-t {
						color: $fontColorgray;
						font-size: rem(16);
						margin-left: rem(4);
					}

					.c-c-c {
						white-space: nowrap;

						span:first-child {
							font-size: 30px;
							margin-right: 4px;
						}
					}
				}
			}

			.f {
				.c-c-c {
					span:first-child {
						color: $orange;
					}

					span:nth-child(2) {
						color: $dorange;
					}
				}

				.f {
					color: $orange;
				}
			}

			.s {
				margin-left: 20px;

				.c-c-c {
					span:first-child {
						color: $green;
					}

					span:nth-child(2) {
						color: $dgreen;
					}
				}

				.f {
					color: $green;
				}
			}

			.r {
				margin-left: 20px;

				.c-c-c {
					span:first-child {
						color: $purple;
					}

					span:nth-child(2) {
						color: $purple;
					}
				}

				.f {
					color: $purple;
				}
			}
		}


		.sjhj {
			.c {
				margin: 20px;
				padding: 20px;
				background-image: url(assets/sjhj/reg-1.png);
				background-size: 100% 100%;

				.c-c {
					display: flex;
					flex-direction: column;

					.c-c-t {
						font-size: 14px;
						color: #9ab4ff;
						margin: rem(10) 0px;
					}

					.c-c-c {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						color: #FFFFFF;
						white-space: nowrap;

						img {
							margin-right: 10px;
						}

						.f {
							flex: 1;
							background-size: 100% 100%;
							display: flex;
							justify-content: space-around;

							span {
								display: flex;
								justify-content: center;
								font-size: 48px;
								background-image: url(assets/sjhj/icon-bg2.png);
								width: 10%;
							}
						}
					}
				}

				.c-b {
					display: flex;
					justify-content: space-between;
					margin-top: 20px;

					.c-b-t {
						display: flex;
						flex-direction: column;
						background-image: url(assets/sjhj/reg.png);
						background-size: 100% 100%;
						padding: rem(10) rem(16);
						white-space: nowrap;
						box-sizing: border-box;
						width: 30%;

						.f {
							font-size: rem(14);
							color: #c4d3ff;
							margin-bottom: rem(6);
						}

						.s {
							span:first-child {
								font-size: rem(26);
								margin-right: rem(4);
							}
						}

					}

					:first-child .s {
						color: $orange;
					}

					:nth-child(2) .s {
						color: $green;
					}

					:nth-child(3) .s {
						color: $purple;
					}
				}
			}

			.b {
				background-image: url(assets/sjhj/reg-2.png);
				background-size: 100% 100%;
				margin: 20px;
				overflow: hidden;

				.a-t {
					margin: 20px 0px 0px 20px;
				}

				.b-c {
					display: flex;
					justify-content: space-between;

					.f {
						display: flex;
						justify-content: space-between;
						font-size: 14px;
						color: #9ab4ff;
						// margin: 20px 10px 20px 20px;
						margin: rem(10);
					}

					.b-c-l,
					.b-c-r {
						// width: 50%;

						// padding: 10px;
						.s {
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-bottom: 10px;
							padding-right: 10px;
							color: white;

							.s-t {
								display: flex;
								align-items: center;
								background-size: 100% 100%;
								padding: 5px 30px 5px 10px;
								white-space: nowrap;

								.s-t-f {
									margin-right: 10px;
									padding: 2px 3px;
									border-radius: 3px;
								}

								.s-t-s {
									font-size: 14px;
								}
							}

							.s-c {
								margin-left: 20px;
							}
						}
					}

					.b-c-l {
						.s {
							background-color: #34416C;
							margin-bottom: 15px;
						}
					}

					.b-c-r {
						// margin-left: 20px;

						.f {
							margin-left: 2px;
						}

						.s {
							flex-direction: column;

							.s-f {
								display: flex;
								align-items: center;
								justify-content: space-between;
								width: 100%;

								.s-t-f {
									color: white;
								}
							}

							.s-s {
								height: 0px;
								width: 100%;
								border-radius: 10px;
							}
						}
					}

				}
			}
		}

		.sjzz {
			.a-t {
				margin: 20px 0px 0px 20px;
			}
		}

		.sjzc {
			grid-row-start: 1;
			grid-row-end: 3;
			grid-column-start: 2;
			grid-column-end: 3;

			.c {
				display: flex;
				justify-content: space-around;
				margin-top: 20px;
				@include a-c
			}

			.b {
				background-size: 100% 100%;
				padding: 20px;
			}

			.m {
				justify-content: space-between;

				.c-t {
					display: flex;
					justify-content: space-between;

					.c-c:nth-child(2) {
						margin-left: 30px;
					}
				}

				.c-icon {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 40px 40px 20px 40px;
					flex-direction: column;
					height: 140px;

					.f {
						margin-top: 20px;
					}
				}
			}
		}

		.sjgx {
			@include a-c .b {
				background-image: url(./assets/sjgx/bg.png);
				background-size: 100% 100%;
				display: flex;
				flex-direction: column;
				height: 680px;

				.b-a {
					display: flex;
					justify-content: space-around;
					margin-top: 20px;

					.b-t {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						border: 3px solid $bule;
						border-radius: 999999px;
						width: 140px;
						height: 140px;

						.c-t-t {
							color: $fontColorgray;
							font-size: 14px;
							margin-bottom: 15px;
						}

						.c-t-c {
							font-size: 30px;
						}

						.c-t-c.f {
							color: #fff000;
						}

						.c-t-c.m {
							color: $green;
						}
					}
				}
			}

			.a-c {
				display: flex;
				margin: 20px;

				.c-t {
					display: flex;
					justify-content: space-between;

					.c-c:nth-child(2) {
						margin-left: 30px;
					}
				}
			}
		}

		.sjrd {
			.a-t {
				margin: 20px 0px 0px 20px;
			}
		}
	`
			console.log(s.replace(/ .*?px/g, function(str) {
				return "rem(" + str.trim().split("px")[0] + ")";
			}));
		},
		mounted() {
			document.getElementById("sjzzChart").style.width = Math.ceil(540 / 1920 * innerWidth) + "px";
			this.sjzzChart();
			this.sjrdChart();
		},
		methods: {
			fillNum(num) {
				var r = "1";
				for (var x = 0; x < (5 - num); x++) {
					r += "0";
				}
				return Math.ceil((Math.random() + 1) * r);
			},
			sjzzChart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('sjzzChart'))
				// 绘制图表
				myChart.setOption({
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#28394e'],
								width: 1,
								type: 'solid'
							}
						}
					},
					yAxis: {
						name: '万条',
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#28394e'],
								width: 1,
								type: 'solid',
							}
						},
						// minorSplitLine:{
						//  show: true,
						// }
					},

					textStyle: {
						color: '#9ab4ff',
					},
					axisLabel: {
						color: '#9ab4ff',
					},
					grid: {
						top: 45,
						right: 20
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320, 1290, 820, 932, 901, 934],
						type: 'line',
						smooth: true,
						areaStyle: {
							opacity: 0.7,
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(31, 79, 165)'
							}, {
								offset: 1,
								color: '#171842'
							}])
						}
					}]
				});
			},
			sjrdChart() {
				let xAxisData = []
				for (var x = 0; x < 7; x++) {
					xAxisData.push("数据可视化")
				}
				var that = this;
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('sjrdChart'))
				// 绘制图表
				myChart.setOption({
					xAxis: {
						type: 'category',
						data: xAxisData,
						axisTick: {
							show: false
						},
					},
					yAxis: {
						type: 'value',
						splitLine: {
							show: false,

						},
					},
					grid: {
						top: 45,
						right: 20
					},
					axisLabel: {
						color: '#9ab4ff',
					},
					series: [{
						label: {
							show: true,
							position: 'top',
							color: 'white'
						},
						itemStyle: {
							color: function(params) {
								// build a color map as your need.
								var arr = [...that.colorArr1, ...["#31a6c4", "#31a6c4"]]
								return arr[params.dataIndex]
							},
						},
						data: [200, 150, 120, 80, 70, 50, 30],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(29, 32, 74, 0.6)'
						}
					}]
				});
			}
		},

	}
</script>

<style lang="scss">
	$fontSize:16px;
	$fontColor:#34abff;
	$fontColorgray:#9ab4ff;
	$fontFamily:MicrosoftYaHei;
	$red:#ab2d5d;
	$lred:#fbcbde;
	$orange:#ff9634;
	$lorange:#ffe1c3;
	$dorange:#c47f3b;
	$bule:#2d76cc;
	$lbule:#bddbff;
	$green:#34e0ff;
	$lgreen:#D2F6FF;
	$dgreen:#31a6c4;
	$purple:#c148f5;

	// 1920 字体 19.2px 即  1rem === 192px


	@function rem($px) {
		@return $px / 19.2 * 1rem;
	}

	// 1vw=19.2px  1920
	// x vw=680px

	// 1 vw=25.6px  2560
	// x vw=?px
	html {
		font-size: 1vw;

		@media screen and (max-width: 1200px) {
			font-size: 120px;
		}

		width: 100%;
		height: 100%;
		min-width: 1200px;
		min-height: 768px;
	}

	.screen {
		width: 100%;
		height: 100%;
		padding: rem(20);
		box-sizing: border-box;
		display: grid;
		//rem(grid-template-rows: 680)rem(340);
		//rem(grid-template-columns: 540)rem(760)rem(540);
		// 作为响应式,大屏适配所有屏幕尺寸
		// grid-template-rows: 2fr 1fr;
		// grid-template-columns: 1fr 1.4fr 1fr;
		grid-template-rows: rem(680) rem(340);
		grid-template-columns: rem(540) rem(760) rem(540);
		grid-row-gap: rem(20);
		grid-column-gap: rem(20);
		background-color: #171842;
		font-family: $fontFamily;
		font-size: rem(16);
		// overflow: scroll;

		.border {
			border: rem(1) solid #3048ae;

			.title {
				display: grid;
				font-size: rem(20);
				color: $fontColor;
				margin-top: rem(5);

				span {
					text-align: center;
				}

				img {
					width: 100%;
				}
			}
		}

		.a-t {
			font-size: rem(16);
			color: $fontColor;
		}

		@mixin a-c {
			.c-t {
				display: flex;
				align-items: center;
				background-image: url(assets/sjzc/icon-bg.png);
				background-size: 100% 100%;
				padding: rem(10) rem(20);

				img {
					margin-right: rem(10);
				}

				.c-c {
					display: flex;
					flex-direction: column;
					align-items: flex-start;

					.c-c-t {
						color: $fontColorgray;
						font-size: rem(16);
						margin-left: rem(4);
					}

					.c-c-c {
						white-space: nowrap;

						span:first-child {
							font-size: rem(30);
							margin-right: rem(4);
						}
					}
				}
			}

			.f {
				.c-c-c {
					span:first-child {
						color: $orange;
					}

					span:nth-child(2) {
						color: $dorange;
					}
				}

				.f {
					color: $orange;
				}
			}

			.s {
				margin-left: rem(20);

				.c-c-c {
					span:first-child {
						color: $green;
					}

					span:nth-child(2) {
						color: $dgreen;
					}
				}

				.f {
					color: $green;
				}
			}

			.r {
				margin-left: rem(20);

				.c-c-c {
					span:first-child {
						color: $purple;
					}

					span:nth-child(2) {
						color: $purple;
					}
				}

				.f {
					color: $purple;
				}
			}
		}


		.sjhj {
			.c {
				margin: rem(20);
				padding: rem(20);
				background-image: url(assets/sjhj/reg-1.png);
				background-size: 100% 100%;

				.c-c {
					display: flex;
					flex-direction: column;

					.c-c-t {
						font-size: rem(14);
						color: #9ab4ff;
						margin: rem(10) rem(0);
					}

					.c-c-c {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						color: #FFFFFF;
						white-space: nowrap;

						img {
							margin-right: rem(10);
						}

						.f {
							flex: 1;
							background-size: 100% 100%;
							display: flex;
							justify-content: space-around;

							span {
								display: flex;
								justify-content: center;
								font-size: rem(48);
								background-image: url(assets/sjhj/icon-bg2.png);
								width: 10%;
							}
						}
					}
				}

				.c-b {
					display: flex;
					justify-content: space-between;
					margin-top: rem(20);

					.c-b-t {
						display: flex;
						flex-direction: column;
						background-image: url(assets/sjhj/reg.png);
						background-size: 100% 100%;
						padding: rem(10) rem(16);
						white-space: nowrap;
						box-sizing: border-box;
						width: 30%;

						.f {
							font-size: rem(14);
							color: #c4d3ff;
							margin-bottom: rem(6);
						}

						.s {
							span:first-child {
								font-size: rem(26);
								margin-right: rem(4);
							}
						}

					}

					:first-child .s {
						color: $orange;
					}

					:nth-child(2) .s {
						color: $green;
					}

					:nth-child(3) .s {
						color: $purple;
					}
				}
			}

			.b {
				background-image: url(assets/sjhj/reg-2.png);
				background-size: 100% 100%;
				margin: rem(20);
				overflow: hidden;

				.a-t {
					margin: rem(20)rem(0)rem(0)rem(20);
				}

				.b-c {
					display: flex;
					justify-content: space-between;

					.f {
						display: flex;
						justify-content: space-between;
						font-size: rem(14);
						color: #9ab4ff;
						//rem(margin: 20)rem(10)rem(20)rem(20);
						margin: rem(10);
					}

					.b-c-l,
					.b-c-r {
						// width: 50%;

						//rem(padding: 10);
						.s {
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-bottom: rem(10);
							padding-right: rem(10);
							color: white;

							.s-t {
								display: flex;
								align-items: center;
								background-size: 100% 100%;
								padding: rem(5)rem(30)rem(5)rem(10);
								white-space: nowrap;

								.s-t-f {
									margin-right: rem(10);
									padding: rem(2)rem(3);
									border-radius: rem(3);
								}

								.s-t-s {
									font-size: rem(14);
								}
							}

							.s-c {
								margin-left: rem(20);
							}
						}
					}

					.b-c-l {
						.s {
							background-color: #34416C;
							margin-bottom: rem(15);
						}
					}

					.b-c-r {
						//rem(margin-left: 20);

						.f {
							margin-left: rem(2);
						}

						.s {
							flex-direction: column;

							.s-f {
								display: flex;
								align-items: center;
								justify-content: space-between;
								width: 100%;

								.s-t-f {
									color: white;
								}
							}

							.s-s {
								height: rem(0);
								width: 100%;
								border-radius: rem(10);
							}
						}
					}

				}
			}
		}

		.sjzz {
			.a-t {
				margin: rem(20)rem(0)rem(0)rem(20);
			}
		}

		.sjzc {
			grid-row-start: 1;
			grid-row-end: 3;
			grid-column-start: 2;
			grid-column-end: 3;

			.c {
				display: flex;
				justify-content: space-around;
				margin-top: rem(20);
				@include a-c
			}

			.b {
				background-size: 100% 100%;
				padding: rem(20);
			}

			.m {
				justify-content: space-between;

				.c-t {
					display: flex;
					justify-content: space-between;

					.c-c:nth-child(2) {
						margin-left: rem(30);
					}
				}

				.c-icon {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: rem(40)rem(40)rem(20)rem(40);
					flex-direction: column;
					height: rem(140);

					.f {
						margin-top: rem(20);
					}
				}
			}
		}

		.sjgx {
			@include a-c .b {
				background-image: url(./assets/sjgx/bg.png);
				background-size: 100% 100%;
				display: flex;
				flex-direction: column;
				height: rem(680);

				.b-a {
					display: flex;
					justify-content: space-around;
					margin-top: rem(20);

					.b-t {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						border: rem(3) solid $bule;
						border-radius: rem(999999);
						width: rem(140);
						height: rem(140);

						.c-t-t {
							color: $fontColorgray;
							font-size: rem(14);
							margin-bottom: rem(15);
						}

						.c-t-c {
							font-size: rem(30);
						}

						.c-t-c.f {
							color: #fff000;
						}

						.c-t-c.m {
							color: $green;
						}
					}
				}
			}

			.a-c {
				display: flex;
				margin: rem(20);

				.c-t {
					display: flex;
					justify-content: space-between;

					.c-c:nth-child(2) {
						margin-left: rem(30);
					}
				}
			}
		}

		.sjrd {
			.a-t {
				margin: rem(20)rem(0)rem(0)rem(20);
			}
		}
	}

	// .screen {
	// 	width: 100%;
	// 	height: 100%;
	// 	padding: rem(20);
	// 	box-sizing: border-box;
	// 	display: grid;
	// 	// grid-template-rows: 680px 340px;
	// 	// grid-template-columns: 540px 760px 540px;
	// 	// 作为响应式,大屏适配所有屏幕尺寸
	// 	// grid-template-rows: 2fr 1fr;
	// 	// grid-template-columns: 1fr 1.4fr 1fr;
	// 	grid-template-rows: rem(680) rem(340);
	// 	grid-template-columns: rem(540) rem(760) rem(540);
	// 	grid-row-gap: rem(20);
	// 	grid-column-gap: rem(20);
	// 	background-color: #171842;
	// 	font-family: $fontFamily;
	// 	font-size: rem(16);
	// 	// overflow: scroll;

	// 	.border {
	// 		border: rem(1) solid #3048ae;

	// 		.title {
	// 			display: grid;
	// 			font-size: rem(20);
	// 			color: $fontColor;
	// 			margin-top: rem(5);

	// 			span {
	// 				text-align: center;
	// 			}

	// 			img {
	// 				width: 100%;
	// 			}
	// 		}
	// 	}

	// 	.a-t {
	// 		font-size: rem(16);
	// 		color: $fontColor;
	// 	}

	// 	@mixin a-c {
	// 		.c-t {
	// 			display: flex;
	// 			align-items: center;
	// 			background-image: url(assets/sjzc/icon-bg.png);
	// 			background-size: 100% 100%;
	// 			padding: rem(10) rem(20);

	// 			img {
	// 				margin-right: rem(10);
	// 			}

	// 			.c-c {
	// 				display: flex;
	// 				flex-direction: column;
	// 				align-items: flex-start;

	// 				.c-c-t {
	// 					color: $fontColorgray;
	// 					font-size: rem(16);
	// 					margin-left: rem(4);
	// 				}

	// 				.c-c-c {
	// 					white-space: nowrap;

	// 					span:first-child {
	// 						font-size: 30px;
	// 						margin-right: 4px;
	// 					}
	// 				}
	// 			}
	// 		}

	// 		.f {
	// 			.c-c-c {
	// 				span:first-child {
	// 					color: $orange;
	// 				}

	// 				span:nth-child(2) {
	// 					color: $dorange;
	// 				}
	// 			}

	// 			.f {
	// 				color: $orange;
	// 			}
	// 		}

	// 		.s {
	// 			margin-left: 20px;

	// 			.c-c-c {
	// 				span:first-child {
	// 					color: $green;
	// 				}

	// 				span:nth-child(2) {
	// 					color: $dgreen;
	// 				}
	// 			}

	// 			.f {
	// 				color: $green;
	// 			}
	// 		}

	// 		.r {
	// 			margin-left: 20px;

	// 			.c-c-c {
	// 				span:first-child {
	// 					color: $purple;
	// 				}

	// 				span:nth-child(2) {
	// 					color: $purple;
	// 				}
	// 			}

	// 			.f {
	// 				color: $purple;
	// 			}
	// 		}
	// 	}


	// 	.sjhj {
	// 		.c {
	// 			margin: 20px;
	// 			padding: 20px;
	// 			background-image: url(assets/sjhj/reg-1.png);
	// 			background-size: 100% 100%;

	// 			.c-c {
	// 				display: flex;
	// 				flex-direction: column;

	// 				.c-c-t {
	// 					font-size: 14px;
	// 					color: #9ab4ff;
	// 					margin: rem(10) 0px;
	// 				}

	// 				.c-c-c {
	// 					display: flex;
	// 					justify-content: space-between;
	// 					align-items: flex-end;
	// 					color: #FFFFFF;
	// 					white-space: nowrap;

	// 					img {
	// 						margin-right: 10px;
	// 					}

	// 					.f {
	// 						flex: 1;
	// 						background-size: 100% 100%;
	// 						display: flex;
	// 						justify-content: space-around;

	// 						span {
	// 							display: flex;
	// 							justify-content: center;
	// 							font-size: 48px;
	// 							background-image: url(assets/sjhj/icon-bg2.png);
	// 							width: 10%;
	// 						}
	// 					}
	// 				}
	// 			}

	// 			.c-b {
	// 				display: flex;
	// 				justify-content: space-between;
	// 				margin-top: 20px;

	// 				.c-b-t {
	// 					display: flex;
	// 					flex-direction: column;
	// 					background-image: url(assets/sjhj/reg.png);
	// 					background-size: 100% 100%;
	// 					padding: rem(10) rem(16);
	// 					white-space: nowrap;
	// 					box-sizing: border-box;
	// 					width: 30%;

	// 					.f {
	// 						font-size: rem(14);
	// 						color: #c4d3ff;
	// 						margin-bottom: rem(6);
	// 					}

	// 					.s {
	// 						span:first-child {
	// 							font-size: rem(26);
	// 							margin-right: rem(4);
	// 						}
	// 					}

	// 				}

	// 				:first-child .s {
	// 					color: $orange;
	// 				}

	// 				:nth-child(2) .s {
	// 					color: $green;
	// 				}

	// 				:nth-child(3) .s {
	// 					color: $purple;
	// 				}
	// 			}
	// 		}

	// 		.b {
	// 			background-image: url(assets/sjhj/reg-2.png);
	// 			background-size: 100% 100%;
	// 			margin: 20px;
	// 			overflow: hidden;

	// 			.a-t {
	// 				margin: 20px 0px 0px 20px;
	// 			}

	// 			.b-c {
	// 				display: flex;
	// 				justify-content: space-between;

	// 				.f {
	// 					display: flex;
	// 					justify-content: space-between;
	// 					font-size: 14px;
	// 					color: #9ab4ff;
	// 					// margin: 20px 10px 20px 20px;
	// 					margin: rem(10);
	// 				}

	// 				.b-c-l,
	// 				.b-c-r {
	// 					// width: 50%;

	// 					// padding: 10px;
	// 					.s {
	// 						display: flex;
	// 						align-items: center;
	// 						justify-content: space-between;
	// 						margin-bottom: 10px;
	// 						padding-right: 10px;
	// 						color: white;

	// 						.s-t {
	// 							display: flex;
	// 							align-items: center;
	// 							background-size: 100% 100%;
	// 							padding: 5px 30px 5px 10px;
	// 							white-space: nowrap;

	// 							.s-t-f {
	// 								margin-right: 10px;
	// 								padding: 2px 3px;
	// 								border-radius: 3px;
	// 							}

	// 							.s-t-s {
	// 								font-size: 14px;
	// 							}
	// 						}

	// 						.s-c {
	// 							margin-left: 20px;
	// 						}
	// 					}
	// 				}

	// 				.b-c-l {
	// 					.s {
	// 						background-color: #34416C;
	// 						margin-bottom: 15px;
	// 					}
	// 				}

	// 				.b-c-r {
	// 					// margin-left: 20px;

	// 					.f {
	// 						margin-left: 2px;
	// 					}

	// 					.s {
	// 						flex-direction: column;

	// 						.s-f {
	// 							display: flex;
	// 							align-items: center;
	// 							justify-content: space-between;
	// 							width: 100%;

	// 							.s-t-f {
	// 								color: white;
	// 							}
	// 						}

	// 						.s-s {
	// 							height: 0px;
	// 							width: 100%;
	// 							border-radius: 10px;
	// 						}
	// 					}
	// 				}

	// 			}
	// 		}
	// 	}

	// 	.sjzz {
	// 		.a-t {
	// 			margin: 20px 0px 0px 20px;
	// 		}
	// 	}

	// 	.sjzc {
	// 		grid-row-start: 1;
	// 		grid-row-end: 3;
	// 		grid-column-start: 2;
	// 		grid-column-end: 3;

	// 		.c {
	// 			display: flex;
	// 			justify-content: space-around;
	// 			margin-top: 20px;
	// 			@include a-c
	// 		}

	// 		.b {
	// 			background-size: 100% 100%;
	// 			padding: 20px;
	// 		}

	// 		.m {
	// 			justify-content: space-between;

	// 			.c-t {
	// 				display: flex;
	// 				justify-content: space-between;

	// 				.c-c:nth-child(2) {
	// 					margin-left: 30px;
	// 				}
	// 			}

	// 			.c-icon {
	// 				display: flex;
	// 				justify-content: center;
	// 				align-items: center;
	// 				padding: 40px 40px 20px 40px;
	// 				flex-direction: column;
	// 				height: 140px;

	// 				.f {
	// 					margin-top: 20px;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	.sjgx {
	// 		@include a-c .b {
	// 			background-image: url(./assets/sjgx/bg.png);
	// 			background-size: 100% 100%;
	// 			display: flex;
	// 			flex-direction: column;
	// 			height: 680px;

	// 			.b-a {
	// 				display: flex;
	// 				justify-content: space-around;
	// 				margin-top: 20px;

	// 				.b-t {
	// 					display: flex;
	// 					flex-direction: column;
	// 					align-items: center;
	// 					justify-content: center;
	// 					border: 3px solid $bule;
	// 					border-radius: 999999px;
	// 					width: 140px;
	// 					height: 140px;

	// 					.c-t-t {
	// 						color: $fontColorgray;
	// 						font-size: 14px;
	// 						margin-bottom: 15px;
	// 					}

	// 					.c-t-c {
	// 						font-size: 30px;
	// 					}

	// 					.c-t-c.f {
	// 						color: #fff000;
	// 					}

	// 					.c-t-c.m {
	// 						color: $green;
	// 					}
	// 				}
	// 			}
	// 		}

	// 		.a-c {
	// 			display: flex;
	// 			margin: 20px;

	// 			.c-t {
	// 				display: flex;
	// 				justify-content: space-between;

	// 				.c-c:nth-child(2) {
	// 					margin-left: 30px;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	.sjrd {
	// 		.a-t {
	// 			margin: 20px 0px 0px 20px;
	// 		}
	// 	}
	// }
</style>

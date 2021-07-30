<template>
	<div class="screen">
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
							<!-- <span v-for="(item,index) in 7" v-text="Math.floor(Math.random()*10)"></span> -->
							<span v-for="(item,index) in sjhj.sjzl" v-text="item"></span>
						</div>
						条
					</div>
				</div>
				<div class="c-b">
					<div class="c-b-t">
						<div class="f">应用总数</div>
						<div class="s">
							<span v-text="sjhj.yyzs">46564</span>
							<span>万条</span>
						</div>
					</div>
					<div class="c-b-t">
						<div class="f">数据资源种类</div>
						<div class="s">
							<span v-text="sjhj.sjzyzl">10304</span>
							<span>种</span>
						</div>
					</div>
					<div class="c-b-t">
						<div class="f">数据日增量</div>
						<div class="s">
							<span v-text="sjhj.sjrzl">46564</span>
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
						<div v-for="(item,index) in sjhj.yyxtl" class="s">
							<div class="s-t"
								:style="'background-image: url('+require('@/assets/sjhj/react'+(index+1)+'.png')+')'">
								<span :style="{'background-color': colorArr2[index],'color':colorArr1[index]}"
									class="s-t-f" v-text="'0'+(index+1)"></span>
								<span :style="{'color':colorArr2[index]}" class="s-t-s" v-text="item.name"></span>
							</div>
							<div class="s-c" v-text="item.value"></div>
						</div>
					</div>
					<div class="b-c-r">
						<div class="f">
							<span>数据种类</span>
							<span>万条</span>
						</div>
						<div v-for="(item,index) in sjhj.yyxtr" class="s">
							<div class="s-f">
								<div class="s-t">
									<span :style="{'background-color': colorArr1[index]}" class="s-t-f"
										v-text="'0'+(index+1)"></span>
									<span :style="{'color':colorArr2[index]}" class="s-t-s" v-text="item.name"></span>
								</div>
								<div class="s-c" v-text="item.value"></div>
							</div>
							<div class="s-s" :style="{'border-top': '4px solid '+ colorArr1[index]}"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sjzc">
			<div class="border n">
				<div class="title">
					<span>数据资产</span>
					<img src="./assets/sjhj/biaotibeijing.png" alt="">
				</div>
				<div class="c a-c">
					<div class="c-t f">
						<img src="./assets/sjzc/icon1.png" alt="">
						<div class="c-c">
							<div class="c-c-t">数据资源种类</div>
							<div class="c-c-c"><span v-text="sjzc.zl"></span><span>条</span></div>
						</div>
					</div>
					<div class="c-t s">
						<img src="./assets/sjzc/icon2.png" alt="">
						<div class="c-c">
							<div class="c-c-t">数据总量</div>
							<div class="c-c-c"><span v-text="sjzc.sl"></span><span>条</span></div>
						</div>
					</div>
				</div>
				<div class="p p1">
					<span>主题库</span>
					<div><span v-text="sjzc.zhutizl"></span><span>种</span></div>
					<div><span v-text="sjzc.zhutisl"></span><span>条</span></div>
				</div>
				<div class="p p2">
					<span>专题库</span>
					<div><span v-text="sjzc.zhuantizl"></span><span>种</span></div>
					<div><span v-text="sjzc.zhuantisl"></span><span>条</span></div>
				</div>
				<div class="p p3">
					<span>标签库</span>
					<div><span v-text="sjzc.biaoqianzl"></span><span>种</span></div>
					<div><span v-text="sjzc.biaoqiansl"></span><span>条</span></div>
				</div>
				<div class="p p4">
					<span>标准库</span>
					<div><span v-text="sjzc.biaozhunzl"></span><span>种</span></div>
					<div><span v-text="sjzc.biaozhunsl"></span><span>条</span></div>
				</div>
				<div class="p p5">
					<span>汇聚库</span>
					<div><span v-text="sjzc.huijuzl"></span><span>种</span></div>
					<div><span v-text="sjzc.huijusl"></span><span>条</span></div>
				</div>
				<img claszqs="b" src="./assets/sjzc/bg.png" alt="">
			</div>
			<div class="c m a-c">
				<div class="f">
					<div class="c-t">
						<div class="c-c">
							<div class="c-c-t">总量：</div>
							<div class="c-c-c"><span v-text="sjzc.tupiansl"></span><span>万条</span>
							</div>
						</div>
						<div class="c-c">
							<div class="c-c-t">种类：</div>
							<div class="c-c-c"><span v-text="sjzc.tupianzl"></span><span>条</span>
							</div>
						</div>
					</div>
					<div class="border c-icon">
						<img src="./assets/sjzc/bc1.png" alt="">
						<div class="c-c-b">图片库</div>
					</div>
				</div>
				<div class="s">
					<div class="c-t">
						<div class="c-c">
							<div class="c-c-t">总量：</div>
							<div class="c-c-c"><span v-text="sjzc.wenjiansl"></span><span>万条</span>
							</div>
						</div>
						<div class="c-c">
							<div class="c-c-t">种类：</div>
							<div class="c-c-c"><span v-text="sjzc.wenjianzl"></span><span>条</span>
							</div>
						</div>
					</div>
					<div class="border c-icon">
						<img src="./assets/sjzc/bc2.png" alt="">
						<div class="c-c-b">文件库</div>
					</div>
				</div>
				<div class="r">
					<div class="c-t">
						<div class="c-c">
							<div class="c-c-t">总量：</div>
							<div class="c-c-c"><span v-text="sjzc.rizhisl"></span><span>万条</span>
							</div>
						</div>
						<div class="c-c">
							<div class="c-c-t">种类：</div>
							<div class="c-c-c"><span v-text="sjzc.rizhizl"></span><span>条</span>
							</div>
						</div>
					</div>
					<div class="border c-icon">
						<img src="./assets/sjzc/bc3.png" alt="">
						<div class="c-c-b">日志库</div>
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
						<div class="c-t-c f" v-text="sjgx.sjzyzs"></div>
					</div>
					<div class="b-t">
						<div class="c-t-t">数据总量</div>
						<div class="c-t-c f" v-text="sjgx.sjzl"></div>
					</div>
					<div class="b-t">
						<div class="c-t-t">交换数据总量</div>
						<div class="c-t-c f" v-text="sjgx.jhsjzl"></div>
					</div>
				</div>
				<div class="b-a">
					<div class="b-t x">
						<div class="c-t-t">访问接口用户数</div>
						<div class="c-t-c m" v-text="sjgx.fwjkyhs"></div>
					</div>
					<div class="b-t y">
						<div class="c-t-t">访问接口总数</div>
						<div class="c-t-c m" v-text="sjgx.fwjkzs"></div>
					</div>
				</div>
			</div>
			<div class="d">今日数据</div>
			<div class="a-c">
				<div class="c-t f">
					<div class="c-c">
						<div class="c-c-t">接口访问次数</div>
						<div class="c-c-c"><span v-text="sjgx.jrsj.todayInterfaceCount"></span><span>次</span>
						</div>
					</div>
				</div>
				<div class="c-t s">
					<div class="c-c">
						<div class="c-c-t">接口访问用户数</div>
						<div class="c-c-c"><span v-text="sjgx.jrsj.userSize"></span><span>个</span>
						</div>
					</div>
				</div>
				<div class="c-t r">
					<div class="c-c">
						<div class="c-c-t">接口访问数据量</div>
						<div class="c-c-c"><span v-text="sjgx.jrsj.todayInterfaceDataCount"></span><span>万条</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sjzz border">
			<div class="a-t">数据增长情况</div>
			<div id="sjzzChart" :style="style"></div>
		</div>
		<div class="sjrd border">
			<div class="a-t">热点数据TOP7</div>
			<div id="sjrdChart" :style="style"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import axios from 'axios';
	export default {
		data() {
			return {
				sjhj: {
					sjzl: [],
					yyzs: this.randomData(10000),
					sjzyzl: this.randomData(10000),
					sjrzl: this.randomData(10000),
					yyxtl: [],
					yyxtr: [],
					sjzz: {}
				},
				sjzc: {
					zl:this.randomData(10000),
					sl:this.randomData(10000),
					zhutizl:this.randomData(10000),
					zhutisl:this.randomData(10000),
					zhuantizl:this.randomData(10000),
					zhuantisl:this.randomData(10000),
					biaoqianzl:this.randomData(10000),
					biaoqiansl:this.randomData(10000),
					biaozhunzl:this.randomData(10000),
					biaozhunsl:this.randomData(10000),
					huijuzl:this.randomData(10000),
					huijusl:this.randomData(10000),
					tupiansl:this.randomData(1000),
					tupianzl:this.randomData(1000),
					wenjiansl:this.randomData(1000),
					wenjianzl:this.randomData(1000),
					rizhisl:this.randomData(1000),
					rizhizl:this.randomData(1000),
				},
				sjgx: {
					sjzyzs: this.randomData(10000),
					sjzl: this.randomData(10000),
					fwjkzs: this.randomData(10000),
					fwjkyhs: this.randomData(10000),
					jhsjzl: this.randomData(10000),
					jrsj: {},
					rdsj: {}
				},
				sjhjArr: ['一', '二', '三', '四', '五'],
				colorArr1: ["#ab2d5d", "#c47f3b", "#2d76cc", '#31a6c4', '#31a6c4'],
				colorArr2: ["#fbcbde", "#ffe1c3", "#bddbff", '#D2F6FF', '#D2F6FF'],
				style: {
					width: this.resize(540) + "px",
					height: this.resize(280) + "px"
				},
				sjrdChart: null,
				sjzzChart: null,
			}
		},
		created() {
			if (location.search.includes("randomdata")) {
				this.getrandomData();
				return;
			}
			// 数据汇聚
			this.getSjhjData();
			// 数据资产
			this.getSjzcData();
			//数据共享
			this.getSjgxData();
		},
		mounted() {
			if (location.search.includes("randomdata")) {
				this.sjzzChartFun();
				this.sjrdChartFun();
			}

			this.addOverflow();
			// 响应式。添加防抖，每半秒重渲染
			window.addEventListener("resize", this.resizeFun());
		},
		methods: {
			resizeFun() {
				var debounce = (fun, num) => {
					var timer = null;
					return function() {
						if (timer) {
							clearTimeout(timer)
						}
						timer = setTimeout(function() {
							fun();
						}, num)
					}
				}
				return debounce(() => {

					this.addOverflow();

					this.style = {
						width: this.resize(540) + "px",
						height: this.resize(280) + "px"
					}
					// console.log(this.style);
					setTimeout(() => {
						if (this.sjzzChart) {
							this.sjzzChart.resize();
						}
						if (this.sjrdChart) {
							this.sjrdChart.resize();
						}
					})
				}, 500)
			},
			addOverflow() {
				if (innerWidth == screen.width && innerHeight == screen.height) {
					document.getElementsByTagName("html")[0].style['overflow'] = "hidden";
				} else {
					document.getElementsByTagName("html")[0].style['overflow'] = "";
				}
			},
			resize(px) {
				return Math.ceil(px * (innerWidth < 1200 ? 1200 : innerWidth) / 1920);
			},
			getData(url, params) {
				return axios.post(url, params ? params : {})
			},
			getrandomData() {
				for (var x = 0; x < 7; x++) {
					this.sjhj.sjzl.push(Math.floor(Math.random() * (x + 3)))
				}
				for (var x = 0; x < 5; x++) {
					this.sjhj.yyxtl.push({
						name: '数据可视化' + this.sjhjArr[x],
						value: this.fillNum(x)
					})
					this.sjhj.yyxtr.push({
						name: '数据可视化' + this.sjhjArr[x],
						value: this.fillNum(x)
					})
				}
			},
			getSjhjData() {
				this.getData("/dataOrganization/view/queryCount").then(data => {
					var data = data.data.data
					this.sjhj.sjzl = [];
					var num = (data + "").split("");
					for (var x = 0; x < 7; x++) {
						if (x >= num.length) {
							this.sjhj.sjzl.unshift(0)
						} else {
							this.sjhj.sjzl.push(num[x])
						}
					}
				})
				this.getData("dataOrganization/view/applicationCount").then(data => {
					var data = data.data.data
					this.sjhj.yyzs = data;
				})
				this.getData("dataOrganization/view/dataResourceType").then(data => {
					var data = data.data.data
					this.sjhj.sjzyzl = data;
				})
				this.getData("dataOrganization/view/dataResourceDayCount").then(data => {
					var data = data.data.data
					this.sjhj.sjrzl = data;
				})
				this.getData("dataOrganization/view/applicationCountTop").then(data => {
					var data = data.data.data
					this.sjhj.yyxtl=[];
					for (var x in data) {
						this.sjhj.yyxtl.push({
							name: x,
							value: data[x]
						})
					}
				})
				this.getData("dataOrganization/view/dataResourceTypeTop").then(data => {
					var data = data.data.data
					this.sjhj.yyxtr=[];
					for (var x in data) {
						this.sjhj.yyxtr.push({
							name: x,
							value: data[x]
						})
					}
				})
				this.getData("dataOrganization/view/dataGrowth", {
					data: 'year'
				}).then(data => {
					var data = data.data.data
					this.sjhj.sjzz = data;
					this.sjzzChartFun();
				})
			},
			getSjzcData() {
				this.getData("dataOrganization/view/dataAsset").then(data => {
					var data = data.data.data
					this.sjzc = data;
				})
			},
			getSjgxData() {
				this.getData("contentProvider/selectDatasourceTotal").then(data => {
					var data = data.data.data
					this.sjgx.sjzyzs = data;
				})
				this.getData("contentProvider/selectTotalData").then(data => {
					var data = data.data.data
					this.sjgx.sjzl = data;
				})
				this.getData("contentProvider/selectInterfaceTotal").then(data => {
					var data = data.data.data
					this.sjgx.fwjkzs = data;
				})
				this.getData("contentProvider/selectInterfaceUserCount", {
					fw: "1y"
				}).then(data => {
					var data = data.data.data
					this.sjgx.fwjkyhs = data;
				})
				this.getData("contentProvider/exchangeDataCount", {
					fw: "1y"
				}).then(data => {
					var data = data.data.data
					this.sjgx.jhsjzl = data;
				})
				this.getData("contentProvider/todayInterfaceCount").then(data => {
					var data = data.data.data
					this.sjgx.jrsj = data;
				})
				this.getData("contentProvider/hotData").then(data => {
					var data = data.data.data
					this.sjgx.rdsj = data;
					this.sjrdChartFun();
				})
			},
			randomData(num) {
				return Math.floor(Math.random() * num + num)
			},
			fillNum(num) {
				var r = "1";
				for (var x = 0; x < (5 - num); x++) {
					r += "0";
				}
				return Math.ceil((Math.random() + 1) * r);
			},
			sjzzChartFun() {
				let seriesData = [];
				let arr = Object.keys(this.sjhj.sjzz)
				if (arr.length != 0) {
					for (var x of arr) {
						seriesData.push(this.sjhj.sjzz[x])
					}
				} else {
					seriesData = [820, 932, 901, 934, 1290, 1330, 1320, 1290, 820, 932, 901, 934]
				}

				// 基于准备好的dom，初始化echarts实例
				this.sjzzChart = echarts.init(document.getElementById('sjzzChart'))
				// 绘制图表
				this.sjzzChart.setOption({
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
						// name: '万条',
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#28394e'],
								width: 1,
								type: 'solid',
							}
						},
					},
					graphic: [{
						type: 'text',
						z: 100,
						left: this.resize(55),
						top: '12',
						style: {
							fill: '#9ab4ff',
							textAlign: 'right',
							text: '万条',
							font: this.resize(14) + 'px Microsoft YaHei'
						}
					}, {
						type: 'text',
						z: 100,
						right: this.resize(20),
						top: '12',
						style: {
							fill: '#34abff',
							textAlign: 'right',
							text: '周\t\t\t\t\t月\t\t\t\t\t年',
							font: this.resize(14) + 'px Microsoft YaHei'
						}
					}],
					axisLabel: {
						color: '#9ab4ff',
					},
					// grid: {
					// 	left:this.resize(50),
					// 	top: this.resize(45),
					// 	right: this.resize(20),
					// 	bottom: this.resize(20)
					// },
					grid: {
						top: 45,
						right: 20,
						bottom: 20
					},
					series: [{
						data: seriesData,
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
			sjrdChartFun() {
				let xAxisData = [],seriesData=[];
				let arr = Object.keys(this.sjgx.rdsj)
				if (arr.length != 0) {
					for (var x of arr) {
						seriesData.push(this.sjgx.rdsj[x].dataSize)
						xAxisData.push(this.sjgx.rdsj[x].interfaceName);
					}
				} else {
					for (var x = 0; x < 7; x++) {
						xAxisData.push("数据可视化")
					}
					seriesData=[200, 150, 120, 80, 70, 50, 30];
				}
				
				var that = this;
				// 基于准备好的dom，初始化echarts实例
				this.sjrdChart = echarts.init(document.getElementById('sjrdChart'))
				// 绘制图表
				this.sjrdChart.setOption({
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
						right: 20,
						bottom: 20
					},
					graphic: [{
						type: 'text',
						z: 100,
						right: this.resize(30),
						top: '12',
						style: {
							fill: '#9ab4ff',
							textAlign: 'right',
							text: '万条',
							font: this.resize(14) + 'px Microsoft YaHei'
						}
					}],
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
						data: seriesData,
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
	html,
	body {
		padding: 0px;
		margin: 0px;
		width: rem(1920);
		// height: 100%;
		height: rem(1080);
		font-size: 1vw;
		// overflow: hidden;

		@media screen and (max-width: 1200px) {
			font-size: 12px;
		}

		min-width: 1200px;
		min-height: 768px;
	}

	.screen {
		width: rem(1920);
		height: rem(1080);
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
					width: rem(54);
					height: rem(54);
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

				.c-c-b {
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

				.c-c-b {
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

				.c-c-b {
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
							width: rem(70);
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
						justify-content: space-between;
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
						width: 50%;
						box-sizing: border-box;

						//rem(padding: 10);
						.s {
							display: flex;
							align-items: center;
							margin-bottom: rem(10);
							padding-right: rem(10);
							color: white;
							height: rem(36);

							.s-t {
								display: flex;
								align-items: center;
								background-size: 100% 100%;
								white-space: nowrap;
								width: rem(153);

								.s-t-f {
									margin: 0 rem(10);
									padding: rem(2)rem(3);
									border-radius: rem(3);
								}

								.s-t-s {
									font-size: rem(14);
									// width: rem(84);
									overflow: hidden;
									text-overflow: ellipsis;
								}
							}
						}
					}

					.b-c-l {
						padding-right: rem(10);

						.f {
							margin-left: rem(20);
						}

						.s {
							background-color: #34416C;
							justify-content: space-between;

							.s-t {
								height: rem(36);

								.s-t-s {
									width: rem(84);
								}
							}
						}
					}

					.b-c-r {
						padding-left: rem(10);

						.f {
							margin-left: rem(2);
						}

						.s {
							flex-direction: column;
							justify-content: center;
							margin-top: rem(6);

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

							.s-t .s-t-s {
								width: rem(104);
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
				justify-content: center;
				margin-top: rem(20);

				@include a-c .c-t .c-c .c-c-c span:first-child {
					font-size: rem(24);
				}

				.s {
					margin-left: rem(20);
				}
			}

			.b {
				background-size: 100% 100%;
				padding: rem(20);
			}

			.n {
				height: rem(778);
				text-align: center;
				position: relative;

				>img {
					margin-top: rem(50);
					width: rem(689);
				}

				.p {
					position: absolute;
					color: $green;
					text-align: left;

					>span {
						font-size: rem(18);
					}

					div {
						span:first-child {
							font-size: rem(24);
							margin-right: rem(4);
						}

						span:nth-child(2) {
							color: $fontColorgray
						}
					}
				}

				.p1 {
					right: rem(170);
					top: rem(160);
				}

				.p2 {
					right: rem(50);
					top: rem(330);
				}

				.p3 {
					right: rem(170);
					bottom: rem(210);
				}

				.p4 {
					color: $purple;
					left: rem(280);
					top: rem(205);
				}

				.p5 {
					color: $orange;
					bottom: rem(130);
					left: rem(70);
				}
			}

			.m {
				// height: calc(100%-rem(242));
				justify-content: space-between;
				height: rem(242);

				.f,
				.s,
				.r {
					display: flex;
					flex-direction: column;

					.c-t {
						display: flex;
						justify-content: space-between;

						.c-c:nth-child(2) {
							margin-left: rem(30);
						}
					}

					.c-icon {
						flex: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;

						img {
							width: rem(90);
							height: rem(90);
						}

						.c-c-b {
							margin-top: rem(20);
						}
					}
				}

				.f .c-icon {
					background-color: rgba(255, 150, 52, 0.1);
				}

				.s .c-icon {
					background-color: rgba(52, 224, 255, 0.1);
				}

				.r .c-icon {
					background-color: rgba(193, 72, 245, 0.1);
				}


				>div {
					width: rem(240);
				}
			}
		}

		.sjgx {
			@include a-c display: flex;
			flex-direction: column;

			.b {
				background-image: url(./assets/sjgx/bg.png);
				background-size: 100% 100%;
				display: flex;
				flex-direction: column;
				flex: 1;

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
						width: rem(120);
						height: rem(120);
						background-color: #25265a;

						.c-t-t {
							color: $fontColorgray;
							font-size: rem(14);
							margin-bottom: rem(5);
							margin-top: rem(10);
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

					.b-t.x {
						margin-left: rem(70);
					}

					.b-t.y {
						margin-right: rem(70);
					}
				}
			}

			.d {
				color: $fontColor;
				text-align: center;
			}

			.a-c {
				display: flex;
				justify-content: space-between;
				margin: rem(20);

				.c-t {
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					width: 30%;
					padding: rem(10) rem(14);

					.c-c {
						.c-c-t {
							font-size: rem(14);
						}
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
</style>

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
		<div class="sjzc border">
			<div class="t"></div>
			<div class="c"></div>
			<div class="b"></div>
		</div>
		<div class="sjzz border"></div>
		<div class="sjtb border"></div>
		<div class="sjrd border"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sjhjArr: ['一', '二', '三', '四', '五'],
				colorArr1: ["#ab2d5d", "#c47f3b", "#2d76cc", '#31a6c4', '#31a6c4'],
				colorArr2: ["#fbcbde", "#ffe1c3", "#bddbff", '#D2F6FF', '#D2F6FF'],
			}
		},
		methods: {
			fillNum(num) {
				var r = "1";
				for (var x = 0; x < (5 - num); x++) {
					r += "0";
				}
				return Math.ceil((Math.random()+1)*r);
			}
		},


	}
</script>

<style scoped lang="scss">
	$fontSize:16px;
	$fontColor:#34abff;
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

	.screen {
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		display: grid;
		// grid-template-rows: 680px 340px;
		// grid-template-columns: 540px 760px 540px;
		// 作为响应式,大屏适配所有屏幕尺寸
		grid-template-rows: 2fr 1fr;
		grid-template-columns: 1fr 1.4fr 1fr;
		grid-row-gap: 20px;
		grid-column-gap: 20px;
		background-color: #171842;
		font-family: $fontFamily;

		.border {
			border: 1px solid #3048ae;

			.title {
				display: grid;
				font-size: 20px;
				color: $fontColor;
				margin-top: 5px;

				span {
					text-align: center;
				}

				img {
					width: 100%;
				}
			}
		}

		.a-t {
			font-size: 16px;
			color: $fontColor;
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
						margin: 20px 0px;
					}

					.c-c-c {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						color: #FFFFFF;

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

							// span:nth-child(1){
							// 	position: absolute;
							// 	left: 4%;
							// }
							// span:nth-child(2){
							// 	position: absolute;
							// 	left: 19.5%;
							// }
							// span:nth-child(3){
							// 	position: absolute;
							// 	left: 32.5%;
							// }
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
						padding: 20px;
						width: 20%;

						.f {
							font-size: 14px;
							color: #c4d3ff;
							margin-bottom: 6px;
						}

						.s {
							span:first-child {
								font-size: 26px;
								margin-right: 6px;
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
						margin: 20px 10px 20px 20px;
					}

					.b-c-l,
					.b-c-r {
						width: 50%;

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
								white-space:nowrap;

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
						margin-left: 20px;

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

		.sjzc {
			grid-row-start: 1;
			grid-row-end: 3;
			grid-column-start: 2;
			grid-column-end: 3;
		}
	}
</style>

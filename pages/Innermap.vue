<template>
  <div class="container">
    <img src="/src/assets/static/image/bg-img.png" alt="" class="bg-img" />
    <!-- 主要内容区域 -->
    <div class="main">
      <!-- 左边区域 -->
      <div class="left-con">
        <div class="tabs">
          <div
            class="tab-item"
            v-for="(item, index) in tabsList"
            :key="item.id"
            :class="current == index ? 'move' : ''"
            @click="changetab(index)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="content-con">
          <div class="content" v-show="current == 0">
            <!-- 项目总揽 -->
            <div class="project-cable">
              <div class="project-cable-title">项目总揽</div>
              <!-- 3D饼图 -->
              <div id="pie-chart"></div>
              <div class="chart-value">2623</div>
              <div class="chart-title">业务数量</div>
              <div class="piedata-con">
                <div
                  class="piedata-item"
                  v-for="(item, index) in piedata"
                  :key="item.id"
                >
                  <div class="piedata-item-main">
                    <div
                      class="piedata-item-bar"
                      :style="{ 'background-color': item.Col }"
                    ></div>
                    <div>
                      <div class="piedata-item-title">{{ item.name }}</div>
                      <div class="piedata-item-value">{{ item.progress }}%</div>
                    </div>
                  </div>
                  <Cirque
                    :target-value="item.progress"
                    :bgCol="item.bgCol"
                    :color="item.Col"
                    :showtext="item.value"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <!-- 运营指标 -->
            <div class="operational-metrics">
              <div class="operational-metrics-title">运营指标</div>
              <div class="operational-metrics-con">
                <!-- 指标项 -->
                <div
                  class="operational-metrics-items"
                  v-for="(item, index) in metrics"
                  :key="item.id"
                >
                  <div class="operational-metrics-items-title">
                    {{ item.name }}
                  </div>
                  <div class="operational-metrics-items-value">
                    {{ item.value }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content" v-show="current == 1">1</div>
        </div>
      </div>
      <!-- 中间区域 -->
      <div class="center-con">
        <div class="address-title">{{ title }}</div>
        <div class="search">
          <Search></Search>
        </div>
        <!-- 地图 -->
        <NanShaMap v-if="title == '南沙区'"></NanShaMap>
        <PanYuMap v-if="title == '番禺区'"></PanYuMap>
        <HaiZhuMap v-if="title == '海珠区'"></HaiZhuMap>
        <LiWanMap v-if="title == '荔湾区'"></LiWanMap>
        <YueXiuMap v-if="title == '越秀区'"></YueXiuMap>
        <TianHeMap v-if="title == '天河区'"></TianHeMap>
        <BaiYunMap v-if="title == '白云区'"></BaiYunMap>
        <HuangPuMap v-if="title == '黄埔区'"></HuangPuMap>
        <ZengChengMap v-if="title == '增城区'"></ZengChengMap>
        <HuaDuMap v-if="title == '花都区'"></HuaDuMap>
        <CongHuaMap v-if="title == '从化区'"></CongHuaMap>
      </div>
      <!-- 右边区域 -->
      <div class="right-con">
        <!-- 保洁概览 -->
        <div class="clean-data">
          <!-- 保洁概览头部 -->
          <div class="clean-data-head">
            <div class="clean-data-title">保洁概览</div>
            <div class="clean-data-time">截止至: 2021/09/10 14:21</div>
          </div>
          <div class="clean-con">
            <!-- 保洁内容区域 -->
            <div class="clean-main">
              <div class="border">
                <img
                  src="/src/assets/static/image/decoration-left.png"
                  alt=""
                />
              </div>
              <!-- 清洁项 -->
              <div class="clean-item">
                <div class="status-img">
                  <img src="/src/assets/static/image/routine-img.png" alt="" />
                </div>
                <div class="clean-item-name">项目名称:白云区XX公交站清洁</div>
                <div class="clean-item-info">
                  <div class="clean-item-people">项目负责人:张三</div>
                  <div class="clean-item-status">打卡状态:正常</div>
                </div>
                <div class="clean-item-time">打卡时间:2024-01-22 12:22:22</div>
                <div class="clean-item-address">
                  打卡地点:广州市白云区江夏街道XXXX公交站点A2333
                </div>
                <div class="clean-item-images">
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                </div>
              </div>
              <div class="clean-item">
                <div class="status-img">
                  <img src="/src/assets/static/image/routine-img.png" alt="" />
                </div>
                <div class="clean-item-name">项目名称:白云区XX公交站清洁</div>
                <div class="clean-item-info">
                  <div class="clean-item-people">项目负责人:张三</div>
                  <div class="clean-item-status">打卡状态:正常</div>
                </div>
                <div class="clean-item-time">打卡时间:2024-01-22 12:22:22</div>
                <div class="clean-item-address">
                  打卡地点:广州市白云区江夏街道XXXX公交站点A2333
                </div>
                <div class="clean-item-images">
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                </div>
              </div>
              <div class="clean-item">
                <div class="status-img">
                  <img src="/src/assets/static/image/routine-img.png" alt="" />
                </div>
                <div class="clean-item-name">项目名称:白云区XX公交站清洁</div>
                <div class="clean-item-info">
                  <div class="clean-item-people">项目负责人:张三</div>
                  <div class="clean-item-status">打卡状态:正常</div>
                </div>
                <div class="clean-item-time">打卡时间:2024-01-22 12:22:22</div>
                <div class="clean-item-address">
                  打卡地点:广州市白云区江夏街道XXXX公交站点A2333
                </div>
                <div class="clean-item-images">
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                </div>
              </div>
              <div class="clean-item">
                <div class="status-img">
                  <img src="/src/assets/static/image/routine-img.png" alt="" />
                </div>
                <div class="clean-item-name">项目名称:白云区XX公交站清洁</div>
                <div class="clean-item-info">
                  <div class="clean-item-people">项目负责人:张三</div>
                  <div class="clean-item-status">打卡状态:正常</div>
                </div>
                <div class="clean-item-time">打卡时间:2024-01-22 12:22:22</div>
                <div class="clean-item-address">
                  打卡地点:广州市白云区江夏街道XXXX公交站点A2333
                </div>
                <div class="clean-item-images">
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                  <img src="/src/assets/static/image/demo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cirque from "../src/components/Cirque.vue";
import NanShaMap from "../src/components/NanShaMap.vue";
import PanYuMap from "../src/components/PanYuMap.vue";
import HaiZhuMap from "../src/components/HaiZhuMap.vue";
import LiWanMap from "../src/components/LiWanMap.vue";
import YueXiuMap from "../src/components/YueXiuMap.vue";
import TianHeMap from "../src/components/TianHeMap.vue";
import BaiYunMap from "../src/components/BaiYunMap.vue";
import HuangPuMap from "../src/components/BaiYunMap.vue";
import ZengChengMap from "../src/components/ZengChengMap.vue";
import HuaDuMap from "../src/components/HuaDuMap.vue";
import CongHuaMap from "../src/components/CongHuaMap.vue";

import Search from "../src/components/Search.vue";

import { useRouter, useRoute } from "vue-router";

import * as echarts from "echarts";
import * as echartsGL from "echarts-gl";
onMounted(() => {
  initChart();
});
const route = useRoute();
let title = route.query.title;

const tabsList = ref([
  {
    id: 1,
    title: "保洁数据",
  },
  {
    id: 2,
    title: "物业数据",
  },
]);
const current = ref(0);
const piedata = ref([
  {
    id: 1,
    name: "荔湾区项目",
    value: 1075,
    progress: 41,
    bgCol: "#0e6861",
    Col: "#1ef0d7",
  },
  {
    id: 2,
    name: "越秀区项目",
    value: 665,
    progress: 25,
    bgCol: "#0f2647",
    Col: "#3d67ff",
  },
  {
    id: 3,
    name: "海珠区项目",
    value: 665,
    progress: 25,
    bgCol: "#13392c",
    Col: "#47bc79",
  },
  {
    id: 4,
    name: "天河区项目",
    value: 236,
    progress: 9,
    bgCol: "#414423",
    Col: "#ebc039",
  },
]);
const metrics = ref([
  {
    id: 1,
    name: "历年项目总数量",
    value: 124107,
  },
  {
    id: 2,
    name: "现年运营项目总数",
    value: 5766,
  },
  {
    id: 3,
    name: "管理岗人员总数量",
    value: 2623,
  },
  {
    id: 4,
    name: "保洁岗人员总数量",
    value: 124107,
  },
  {
    id: 5,
    name: "历年营收总额(万元)",
    value: 5766,
  },
  {
    id: 6,
    name: "本年年签约金额(万元)",
    value: 2623,
  },
  {
    id: 7,
    name: "本年度差额(万元)",
    value: 124107,
  },
  {
    id: 8,
    name: "本年度营收完成率",
    value: 70,
  },
]);

const changetab = (index) => {
  current.value = index;
};
function initChart() {
  var myEcharts = echarts.init(
    document.getElementById("pie-chart"),
    "purple-passion"
  );
  const optionsData = [
    {
      name: "荔湾区项目",
      value: 1075,
      itemStyle: {
        color: "#1ef0d7",
      },
    },
    {
      name: "越秀区项目",
      value: 665,
      itemStyle: {
        color: "#3d67ff",
      },
    },
    {
      name: "海珠区项目",
      value: 665,
      itemStyle: {
        color: "#47bc79",
      },
    },
    {
      name: "天河区项目",
      value: 236,
      itemStyle: {
        color: "#ebc039",
      },
    },
  ];

  // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
  function getParametricEquation(
    startRatio,
    endRatio,
    isSelected,
    isHovered,
    k,
    h
  ) {
    // 计算
    let midRatio = (startRatio + endRatio) / 2;

    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;

    // 如果只有一个扇形，则不实现选中效果。
    // if (startRatio === 0 && endRatio === 1) {
    //     isSelected = false;
    // }
    isSelected = false;
    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    k = typeof k !== "undefined" ? k : 1 / 3;

    // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
    let offsetX = isSelected ? Math.sin(midRadian) * 0.1 : 0;
    let offsetY = isSelected ? Math.cos(midRadian) * 0.1 : 0;

    // 计算高亮效果的放大比例（未高亮，则比例为 1）
    let hoverRate = isHovered ? 1.05 : 1;

    // 返回曲面参数方程
    return {
      u: {
        min: -Math.PI,
        max: Math.PI * 3,
        step: Math.PI / 32,
      },

      v: {
        min: 0,
        max: Math.PI * 2,
        step: Math.PI / 20,
      },

      x: function (u, v) {
        if (u < startRadian) {
          return (
            offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
          );
        }
        if (u > endRadian) {
          return (
            offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
          );
        }
        return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
      },

      y: function (u, v) {
        if (u < startRadian) {
          return (
            offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
          );
        }
        if (u > endRadian) {
          return (
            offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
          );
        }
        return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
      },

      z: function (u, v) {
        if (u < -Math.PI * 0.5) {
          return Math.sin(u);
        }
        if (u > Math.PI * 2.5) {
          return Math.sin(u) * h * 0.1;
        }
        return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
      },
    };
  }

  // 生成模拟 3D 饼图的配置项
  function getPie3D(pieData, internalDiameterRatio) {
    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let legendData = [];
    let k =
      typeof internalDiameterRatio !== "undefined"
        ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
        : 1 / 3;

    // 为每一个饼图数据，生成一个 series-surface 配置
    for (let i = 0; i < pieData.length; i++) {
      sumValue += pieData[i].value;

      let seriesItem = {
        name:
          typeof pieData[i].name === "undefined"
            ? `series${i}`
            : pieData[i].name,
        type: "surface",
        parametric: true,
        wireframe: {
          show: false,
        },
        pieData: pieData[i],
        pieStatus: {
          selected: false,
          hovered: false,
          k: 1 / 10,
        },
      };

      if (typeof pieData[i].itemStyle != "undefined") {
        let itemStyle = {};

        typeof pieData[i].itemStyle.color != "undefined"
          ? (itemStyle.color = pieData[i].itemStyle.color)
          : null;
        typeof pieData[i].itemStyle.opacity != "undefined"
          ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
          : null;

        seriesItem.itemStyle = itemStyle;
      }
      series.push(seriesItem);
    }

    // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
    // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
    for (let i = 0; i < series.length; i++) {
      endValue = startValue + series[i].pieData.value;

      series[i].pieData.startRatio = startValue / sumValue;
      series[i].pieData.endRatio = endValue / sumValue;
      series[i].parametricEquation = getParametricEquation(
        series[i].pieData.startRatio,
        series[i].pieData.endRatio,
        false,
        false,
        k,
        series[i].pieData.value
      );

      startValue = endValue;

      legendData.push(series[i].name);
    }
    return series;
  }

  const series = getPie3D(optionsData, 0.6);
  series.push({
    name: "pie2d",
    type: "pie",
    label: {
      opacity: 1,
      fontSize: 14,
      lineHeight: 20,
      textStyle: {
        fontSize: 14,
        color: "#fff",
      },
    },
    labelLine: {
      length: 10,
      length2: 10,
    },
    startAngle: 2, //起始角度，支持范围[0, 360]。
    clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    radius: ["50%", "60%"],
    center: ["50%", "50%"],
    data: optionsData,
    itemStyle: {
      opacity: 0,
    },
    labelLine: {
      show: false,
    },
    label: {
      show: false,
      position: "center",
    },
  });
  // 准备待返回的配置项，把准备好的 legendData、series 传入。
  const option = {
    animation: true,
    tooltip: {
      backgroundColor: "rgba(82, 90, 92, 0.5)",
      borderColor: "rgba(82, 90, 92, 0.5)",
      textStyle: {
        color: "#fff",
        fontSize: 24,
      },
      formatter: (params) => {
        if (
          params.seriesName !== "mouseoutSeries" &&
          params.seriesName !== "pie2d"
        ) {
          return `${
            params.seriesName
          }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
            params.color
          };"></span>${option.series[params.seriesIndex].pieData.value}`;
        }
      },
    },
    backgroundColor: "transparent",
    labelLine: {
      show: true,
      lineStyle: {
        color: "#7BC0CB",
      },
      normal: {
        show: true,
        length: 10,
        length2: 10,
      },
    },
    label: {
      show: true,
      position: "outside",
      formatter: "{b} \n{c}\n{d}%",
      textStyle: {
        color: "rgba(176, 216, 223, 1)",
        fontSize: 24,
      },
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },
    grid3D: {
      show: false,
      boxHeight: 0.5,
      //top: '30%',
      left: "25%",
      top: -10,
      width: "50%",
      // environment: "rgba(255,255,255,0)",
      viewControl: {
        distance: 190,
        alpha: 50, //倾斜度
        beta: 15,
        autoRotate: true, // 自动旋转
        rotateSensitivity: 1,
        zoomSensitivity: 0,
        panSensitivity: 0,
      },
    },
    series: series,
  };
  myEcharts.setOption(option);
}
</script>

<style scoped>
@font-face {
  /* 起个别名 */
  font-family: "LCD";
  src: url("/src/assets/static/font/LiquidCrystal-Normal.otf");
}
.container {
  margin: 0 auto;
}

.bg-img {
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: -1;
}
#pie-chart {
  margin: -20px auto;
  width: 409px;
  height: 240px;
}
.main {
  padding: 0 77px;
  display: flex;
  justify-content: space-between;
}
.left-con {
  margin-top: 77px;
  width: 410px;
}
.tabs {
  width: 344px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
}
.tab-item {
  width: 117px;
  text-align: center;
  height: 36px;
  color: #677174;
  font-size: 22px;
}
.move {
  position: relative;
  color: #fff;
}
.move::after {
  position: absolute;
  content: "";
  top: 34px;
  left: 0;
  width: 117px;
  height: 2px;
  background: linear-gradient(
    116.57deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(25, 252, 222, 1) 50.39%,
    rgba(0, 0, 0, 0) 100%
  );
}
.content {
  color: #fff;
}
.content-con {
  margin-top: 28px;
}
.project-cable {
  position: relative;
  width: 410px;
  height: 389px;
  background: url(/src/assets/static/image/border-img.png) no-repeat;
  background-position: center;
  background-size: cover;
}
/* 标题 */
.project-cable-title {
  color: #fff;
  padding-top: 12px;
  padding-left: 43px;
  font-size: 16px;
  font-weight: 400;
}
.chart-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 55%;
  font-size: 14px;
  font-weight: 400;
}
.chart-value {
  position: absolute;
  left: 50%;
  top: 27%;
  font-family: "LCD";
  font-size: 25px;
  color: #fff;
  transform: translateX(-50%);
}
.piedata-con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 26px;
}
.piedata-item {
  color: #fff;
  display: flex;
  width: 159px;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 29px;
}
.piedata-item-main {
  display: flex;
}
.piedata-item-value {
  margin-top: 4px;
}
.piedata-item-bar {
  width: 7px;
  height: 7px;
  margin-top: 4px;
  margin-right: 8px;
}
.operational-metrics {
  margin-top: 32px;
  position: relative;
  width: 410px;
  height: 446px;
  background: url(/src/assets/static/image/border-img2.png) no-repeat;
  background-position: center;
  background-size: cover;
}
.operational-metrics-title {
  color: #fff;
  padding-top: 12px;
  padding-left: 43px;
  font-size: 16px;
  font-weight: 400;
}
.operational-metrics-con {
  display: flex;
  align-items: center;
  padding: 40px 20px 0 32px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.operational-metrics-items {
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-bottom: 40px;
}
.operational-metrics-items:last-child .operational-metrics-items-value::after {
  position: absolute;
  content: "%";
  font-size: 13px;
  color: #19fcde;
  right: 72%;
  bottom: 0;
}
.operational-metrics-items-title {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.operational-metrics-items-value {
  position: relative;
  color: #19fcde;
  font-family: "LCD";
  font-size: 28px;
  margin-top: 10px;
}
.center-con {
  position: relative;
  height: 758px;
  margin: 175px 0 0 0;
}
#map {
  width: 644px;
  height: 100%;
}
.right-con {
  width: 410px;
  height: 800px;
  background-color: rgba(0, 0, 0, 0);
}
.search {
  position: absolute;
  left: -130px;
  top: -30px;
  z-index: 999;
}
.clean-data {
  margin-top: 87px;
  width: 410px;
  height: 926px;
  background: url(/src/assets/static/image/border-img3.png) no-repeat;
  background-position: center;
  background-size: cover;
}
.clean-data-head {
  padding-top: 12px;
  display: flex;
  align-items: center;
  margin-left: 43px;
  color: #fff;
  padding-right: 12px;
  justify-content: space-between;
}
.clean-data-head .clean-data-title {
  font-size: 16px;
}
.clean-data-head .clean-data-time {
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
}
.clean-con {
  width: 430px;
  overflow: hidden;
}
.clean-main {
  position: relative;
  padding: 0 11px 0 32px;
  color: #fff;
  height: 834px;
  width: 420px;
  overflow: auto;
  overflow-y: scroll;
  margin-top: 40px;
}
.clean-item {
  position: relative;
  margin-bottom: 45px;
}
.clean-item-info {
  width: 369px;
  height: 36px;
  background: linear-gradient(
    90deg,
    rgba(24, 254, 254, 0.4) 0%,
    rgba(0, 255, 242, 0) 100%
  );
  box-shadow: inset -22px -19px 73px rgba(0, 0, 0, 0.61);
  display: flex;
  align-items: center;
}
.clean-item-info .clean-item-people {
  font-size: 14px;
}
.clean-item-info .clean-item-status {
  color: rgba(0, 165, 60, 1);
  font-size: 14px;
  margin-left: 80px;
}
.clean-item-images {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.clean-item-images img {
  width: 108px;
  height: 64px;
  margin-right: 11px;
}
.border {
  right: 470px;
  width: 8px;
  height: 834px;
  position: fixed;
}
.border img {
  width: 100%;
  height: 100%;
}
.clean-item-name {
  font-size: 12px;
  margin-bottom: 10px;
}
.status-img {
  position: absolute;
  top: -15px;
  right: 35px;
  width: 70px;
  height: 70px;
}
.status-img img {
  width: 100%;
  height: 100%;
}
.clean-item-time,
.clean-item-address {
  margin-top: 15px;
  font-size: 12px;
  color: #fff;
  opacity: 0.6;
}
.address-title {
  position: absolute;
  width: 200px;
  font-size: 30px;
  text-align: center;
  color: #19fcde;
  left: 50%;
  top: -50px;
  font-weight: 600;
  transform: translateX(-50%);
}
</style>../src/components/HaiZhuMap.vue../src/components/PanYuMap.vue

<template>
  <div>
    <div id="liner"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import * as echartsGL from "echarts-gl";
onMounted(() => {
  initChart();
});

function initChart() {
  var myEcharts = echarts.init(
    document.getElementById("liner"),
    "purple-passion"
  );
  var mapJson = "/src/assets/static/440100_full.json";
  var option = {
    backgroundColor: "#fff",
    tooltip: {
      show: true, // 提示框
      trigger: "item",
      formatter: function (params) {
        return params.name;
      },
    },
    geo3D: {
      show: true,
      map: "centerMap",
      left: "0%",
      roam: true,
      zoom: 2,
      regionHeight: 5,
      label: {
        show: true,
        distance: 0,
        // position: "inside",
        // padding: [6, 8],
        borderRadius: 0,
        distanca: 0,
        textStyle: {
          fontSize: 14,
          color: "#ff0000", // 地图初始化区域字体颜色
          borderWidth: 0,
          borderColor: "#000",
        },
      },
      itemStyle: {
        // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
        color: "#0a599f", // 地图板块的颜色
        opacity: 1, // 图形的不透明度 [ default: 1 ]
        borderWidth: 2, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
        borderColor: "#6AEBF5", // 图形描边的颜色。[ default: #333 ]
      },
      emphasis: {
        label: {
          show: true,
          color: "#fff000",
        },
        itemStyle: {
          color: "#ff0",
          opacity: 1,
        },
      },
      // shading: "color",
      light: {
        // 光照阴影
        main: {
          color: "#FFFFFF", // 光照颜色
          intensity: 2, // 光照强度
          shadowQuality: "light", // 阴影亮度
          shadow: true, // 是否显示阴影
          alpha: 50,
          beta: 10,
        },
        // },
        // ambient: {
        //   color: "#ff0",
        //   intensity: 0.1,
        // },
      },
      regions: [],
      viewControl: {
        projection: "perspective",
        autoRotate: false,
        autoRotateAfterStill: 3,
        distance: 159.1931248935421,
        alpha: 43.592048936336816,
        beta: -30.48683006219769,
        minAlpha: 5,
        maxAlpha: 90,
        minBeta: -1036800,
        maxBeta: 1036800,
        animation: true,
        animationDurationUpdate: 1000,
        animationEasingUpdate: "cubicInOut",
        orthographicSize: 60,
        autoRotateDirection: "cw",
        autoRotateSpeed: 10,
        damping: 0.8,
        rotateSensitivity: 1,
        zoomSensitivity: 1,
        panSensitivity: 1,
        panMouseButton: "middle",
        rotateMouseButton: "left",
        minDistance: 40,
        maxDistance: 400,
        maxOrthographicSize: 400,
        minOrthographicSize: 20,
        center: [0, 0, 0],
      },
    },
    series: [
      {
        type: "map3D", // 加载series数据
        map: "centerMap",
        regionHeight: 0,
        boxHeight: 500,
        left: 0,
        itemStyle: {
          // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
          color: "rgba(4,63,115,0)", // 地图板块的颜色
          opacity: 0, // 图形的不透明度 [ default: 1 ]
          borderWidth: 0, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
          borderColor: "#69E8F5", // 图形描边的颜色。[ default: #333 ]
        },
        label: {
          show: true,
          color: "#ff0000",
        },
        regions: [],
        zlevel: 5,
        viewControl: {
          projection: "perspective",
          autoRotate: false,
          autoRotateAfterStill: 3,
          distance: 120,
          alpha: 30,
          beta: 10,
          // autoRotateSpeed: 27.777777,
          minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
          maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
          minBeta: -1036800, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
          maxBeta: 1036800, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
          animation: true, // 是否开启动画。[ default: true ]
          animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
          animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
        },
      },
      {
        type: "scatter3D",
        coordinateSystem: "geo3D",
        data: [],
        // geo3DIndex: 1,
        // blendMode: "lighter",
        // symbol: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
        // 此处引用svg动图
        // symbol: "image://images/circle.svg",
        // symbol: "image://https://microwd-1307391726.cos.ap-beijing.myqcloud.com/huimin/circle.svg",
        symbol: "pin",
        symbolSize: 20,
        animation: true,
        animationDurationUpdate: 500,
        geo3DIndex: 0,
        silent: false,
        itemStyle: {
          opacity: 1,
          width: 1,
        },
        shading: "lambert",
        label: {
          show: true,
          position: "right",
          distance: 0, // 距离图形元素的距离
          // borderColor: "#4AF0A7", //点边框颜色
          // opacity: 0.8, //点的透明度 1不透明
          // borderWidth: 1, //图形描边宽度
          // borderType: "solid",
          // borderRadius: [4, 4, 4, 4],
          // padding: [4, 10, 2, 10],
          // backgroundColor: "rgba(74,240,167,0.40)",
          // formatter: function (params) {
          //    var text = params.data.text.replace("\n", "");
          //    if (params.data.type === "get") {
          //       return "{get|" + text + "}{date11|" + params.data.date + "}";
          //    } else {
          //       return "{set|" + text + "}{date11|" + params.data.date + "}";
          //    }
          // },
          color: "#ff0000",
          backgroundColor: "rgba(255, 255, 255, 0)",
          rich: {
            get: {
              color: "#00E3FF",
              lineHeight: 12,
            },
            set: {
              color: "#FFF100",
              lineHeight: 12,
            },
            date11: {
              color: "#FFFFFF",
              lineHeight: 12,
            },
          },
          zlevel: 6,
        },
        emphasis: {
          itemStyle: {
            color: "#FFF200",
          },
          label: {
            show: false,
          },
        },
        zlevel: 6,
      },
    ],
  };

  myEcharts.showLoading();

  $.getJSON(mapJson, function (geoJson) {
    echarts.registerMap("centerMap", geoJson);
    myEcharts.hideLoading();

    var areaMapData = [
      {
        name: "海拉尔区",
        value: 500,
      },
      {
        name: "扎赉诺尔区",
        value: 200,
      },
      {
        name: "阿荣旗",
        value: 100,
      },
    ];
    var mapFeatures = echarts.getMap("centerMap").geoJson.features;
    var geoCoordMap = {};
    mapFeatures.forEach(function (v) {
      // 地区名称
      var name = v.properties.name;
      // 地区经纬度
      geoCoordMap[name] = v.properties.center;
    });

    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    };
    console.log(convertData(areaMapData));
    //option.series[0].data = convertData(areaMapData);

    myEcharts.setOption(option);
  });
}
</script>

<style scoped>
#liner {
  width: 1000px;
  height: 800px;
}
</style>

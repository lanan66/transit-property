<template>
    <div class="map" id="mapEchart" style="width: 644px; height: 800px"></div>
  </template>
  
  <script setup>
  // 引入工具
  import geoJson from "../assets/static/map-data/liwan.json"; //该文件路径改成自己项目中的文件路径即可
  import * as echarts from "echarts";
  import "echarts-gl"; //3D地图插件
  import symbolImg from "../assets/static/image/icon-ov.png";
  // 定义echarts方法
  const chartMap = () => {
    var myChart = echarts.init(document.getElementById("mapEchart"));
    // 重点：不要遗漏这句代码！！
    echarts.registerMap("liwan", geoJson);
    // 图表配置项
    let option = {
      //3D地图配置项
      geo3D: {
        map: "liwan",
        roam: true,
        itemStyle: {
          color: "#309186",
          opacity: 0.8,
          borderWidth: 2,
          borderColor: "#15c28b",
          // areaColor: '#fff'
        },
        data: geoJson,
        // 视图控件
        viewControl: {
          autoRotate: true,
          autoRotateAfterStill: 3,
          distance: 200,
          alpha: 60,
          minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
          maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
          minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
          maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
          animation: true, // 是否开启动画。[ default: true ]
          animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
          animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
        },
        emphasis: {
          disabled: true, //是否可以被选中
          label: {
            //移入时的高亮文本
            show: false,
            color: "#333", //显示字体颜色变淡
            fontSize: 18, //显示字体变大
          },
          itemStyle: {
            color: "#198278", //显示移入的区块变色
          },
        },
        label: {
          show: false,
          position: "top",
          color: "#111", //地图初始化区域字体颜色
          fontSize: 14,
          lineHeight: 16,
        },
        shading: "lambert",
        light: {
          //光照阴影
          main: {
            // color: "#fff", //光照颜色
            intensity: 1, //光照强度
            //shadowQuality: 'high', //阴影亮度
            shadow: true, //是否显示阴影
            shadowQuality: "medium", //阴影质量 ultra //阴影亮度
            alpha: 55,
            beta: 10,
          },
          ambient: {
            intensity: 0.7,
          },
        },
      },
      series: [
        {
          type: "map3D", //加载series数据
          map: "liwan",
          itemStyle: {
            color: "transparent",
            opacity: 0.8,
            borderWidth: 1.8,
            borderColor: "#1fdfa3",
            // areaColor: '#fff'
          },
          // 未移入时显示的文字
          label: {
            show: false,
            position: "top",
            color: "#111", //地图初始化区域字体颜色
            fontSize: 14,
            lineHeight: 16,
          },
          emphasis: {
            disabled: true, //是否可以被选中
            // 移入时显示的文字
            label: {
              //移入时的高亮文本
              show: true,
              color: "#333", //显示字体颜色变淡
              fontSize: 18, //显示字体变大
            },
            itemStyle: {
              color: "#148077", //显示移入的区块变粉色
            },
          },
          // shading: 'color',
          viewControl: {
            autoRotate: true,
            autoRotateAfterStill: 3,
            distance: 200,
            alpha: 60,
            minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
            maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
            minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
            maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
            animation: true, // 是否开启动画。[ default: true ]
            animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
            animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
          },
          zlevel: 1,
        },
        // 背景图标
        {
          type: "scatter3D",
          coordinateSystem: "geo3D",
          data: centerData,
          symbol: "circle",
          symbolSize: 20,
          itemStyle: {
            color: "transparent",
          },
          label: {
            show: true,
            position: "top",
            distance: -75,
            formatter: (params) => {
              return " ";
            },
            textStyle: {
              padding: [50, 90],
              backgroundColor: {
                image: symbolImg,
              },
            },
          },
        },
        //文字上半
        {
          type: "scatter3D",
          coordinateSystem: "geo3D",
          data: centerData,
          itemStyle: {
            color: "transparent",
          },
          label: {
            show: true,
            position: "top",
            distance: 30,
            formatter: (params) => {
            //   return params.data.name;
                return "项目名称" 
            },
            textStyle: {
              color: "#ffffff",
              backgroundColor: "transparent",
              fontSize: 18,
            },
          },
        },
        //文字下半
        {
          type: "scatter3D",
          coordinateSystem: "geo3D",
          data: centerData,
          itemStyle: {
            color: "transparent",
          },
          label: {
            show: true,
            position: "top",
            distance: -5,
            formatter: (params) => {
              return "南沙区XX公交站清洁"
            //   return `项目个数:${params.data.count}`;
            },
            textStyle: {
              color: "#ffffff",
              backgroundColor: "transparent",
              fontSize: 18,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
    myChart.on("click", (params) => {
      console.log(params.name);
    });
    //让可视化地图跟随浏览器大小缩放
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  };
  
  const centerData = [];
  const processCenter = () => {
    let value_count = 1;
    geoJson.features.forEach((Feature) => {
      let localData = {
        name: Feature.properties.name,
        value: [
          Feature.properties.centroid[0],
          Feature.properties.centroid[1] + 0.04,
        ],
        count: value_count++,
      };
      centerData.push(localData);
    });
  };
  
  onMounted(() => {
    // 挂载echart
    processCenter();
    chartMap();
  });
  </script>
  
  <style scoped></style>
  
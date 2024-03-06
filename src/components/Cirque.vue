<template>
  <div class="progress" :style="{ width, height }">
    <svg
      viewBox="0 0 96 96"
      class="svg-circle-progress"
      style="width: 100%; height: 100%"
    >
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        class="svg-progress"
        :style="`stroke-dasharray: 275, 279.602; stroke: ${bgCol}`"
      ></circle>
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        class="svg-progress"
        :style="`stroke-dasharray: ${progressValue}, 279.602;stroke:${color};`"
      ></circle>
    </svg>
    <div class="mask">
      <!-- showProgress -->
      <span class="bigData"> {{ showtext }} </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  targetValue: {
    type: Number,
    require: true,
    default: -1,
  },
  bgCol: {
    type: String,
    default: "#eee",
  },
  color: {
    type: String,
    default: "#4c7cee",
  },
  showtext: {
    type: Number,
    default: 0,
    require: true,
  },
  width: {
    type: String,
    default: "210px",
  },
  height: {
    type: String,
    default: "100px",
  },
});
const { height, width, color, targetValue, bgCol, showtext } = toRefs(props);

const showProgress = ref(0);
const addData = () => {
  if (targetValue.value === 0) return;
  let timer = setInterval(() => {
    if (targetValue.value === showProgress.value) {
      clearInterval(timer), timer == null;
      return;
    }
    ++showProgress.value;
  }, 15);
};
onMounted(() => {
  addData();
});
const progressValue = ref((showProgress.value / 100) * 250);

watch(showProgress, (newValue) => {
  progressValue.value = (newValue / 100) * 250;
});
</script>
<style scoped>
@font-face {
  font-family: 'LCD';
  src: url('/src/assets/static/font/LiquidCrystal-Normal.otf');
}
.progress {
  display: inline-block;
  position: relative;
  height: 100px;
  text-align: center;
}
.svg-circle-progress {
  position: relative;
  transform: rotate(-90deg);
}
.svg-progress {
  stroke: #2196f3;
  stroke-linecap: round;
  transition: all 0.3s linear;
}
.mask {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bigData {
  font-family: 'LCD';
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}
</style>

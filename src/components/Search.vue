<template>
  <div class="search-con">
    <div class="search">
        <input type="text">
        <div class="main">
          <div class="search-result">
            <div class="search-result-item">金维斯新A栋</div>
            <div class="search-result-item">金维斯新B栋</div>
            <div class="search-result-item">金维斯新C栋</div>
            <div class="search-result-item">金维斯新D栋</div>
            <div class="search-result-item">金维斯新E栋</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
.search-con {
    width: 215px;
    height: 16px;
}
input {
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #008289;
    border-radius: 5px;
    padding: 10px;
    color: #fff;
    background-color: #00242a;
}
.main {
  margin-top: 10px;
  width: 234px;
  overflow: hidden;
  border: 1px solid #008289;
  border-radius: 5px;
}
.search-result {
  width: 250px;
  height: 200px;
  overflow: auto;
  color: #fff;
  overflow-y: scroll;
}
.search-result-item {
  padding: 10px 10px;
  width: 215px;
  height: 18px;
  margin: 10px 0;
}
.search-result-item:hover {
  background: rgba(0, 247, 255, 0.1);
}

</style>
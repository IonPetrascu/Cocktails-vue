<script setup>
  const props = defineProps({
    imgUrl:String,
    name:String,
    id:Number
  })
</script>

<template>
<div class="root">
  <RouterLink :to="`/cocktails/${id}`">
  <div class="pic" :style="`background-image: url(${imgUrl})`">

  </div>
  <h4 class="name">
    {{ name }}
  </h4>
  </RouterLink>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.root{
  width: calc((100% - 76px)/3);
  padding-right: 38px;
  padding-bottom: 20px;

  &:nth-child(3n + 3){
    padding-right: 0;
  }
}
.pic{
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  margin: 0 auto;
}
.name{
  padding-top: 15px;
  letter-spacing: 0.1px;

}
</style>

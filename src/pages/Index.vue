<template>
  <div class="index">
    <!-- banner start -->
    <Banner/>
    <!-- banner end -->

    <!-- footer start -->
    <Footer/>
    <!-- footer end -->
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import Footer from '../components/Footer'

  export default {
    name: "Index",
    data() {
      return {};
    },
    components: {
      Banner,
      Footer
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped lang="less">
.index{
  width: 100%;
  position: relative;
}
</style>

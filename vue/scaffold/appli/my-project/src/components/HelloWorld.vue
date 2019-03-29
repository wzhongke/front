<style>
@import "./flex.scss";
</style>
<template>
<div>
    <div id="justify-content">
        <span>flex-start</span>
        <div class="container container1">
            <div class="item item1" style="width: 100px"></div>
            <div class="item item2" style="width: 50px"></div>
            <div class="item item3" style="width: 150px"></div>
        </div>
        <span>flex-end</span>
        <div class="container container2">
            <div class="item item1" style="width: 100px"></div>
            <div class="item item2" style="width: 50px"></div>
            <div class="item item3" style="width: 150px"></div>
        </div>
        <span>center</span>
        <div class="container container3">
            <div class="item item1" style="width: 100px"></div>
            <div class="item item2" style="width: 50px"></div>
            <div class="item item3" style="width: 150px"></div>
        </div>
        <span>space-around</span>
        <div class="container container4">
            <div class="item item1" style="width: 100px"></div>
            <div class="item item2" style="width: 50px"></div>
            <div class="item item3" style="width: 150px"></div>
        </div>
        <span>space-between</span>
        <div class="container container5">
            <div class="item item1" style="width: 100px"></div>
            <div class="item item2" style="width: 50px"></div>
            <div class="item item3" style="width: 150px"></div>
        </div>
        <span>space-evenly</span>
        <div class="container container6">
            <div class="item item1" style="width: 100px"></div>
            <div class="item item2" style="width: 50px"></div>
            <div class="item item3" style="width: 150px"></div>
        </div>
    </div>

    <div id="align-items">
        <div style="display:flex;">
          <div>
            <span>flex-start</span>
            <div class="container container1">
                <div class="item item1"></div>
                <div class="item item2"></div>
                <div class="item item3"></div>
            </div>
          </div>
          <div>
            <span>flex-end</span>
            <div class="container container2">
            <div class="item item1"></div>
                <div class="item item2"></div>
                <div class="item item3"></div>
            </div>
          </div>
        </div>
        <span>center</span>
        <div class="container container3">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
        </div>
        <span>space-around</span>
        <div class="container container4">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
        </div>
        <span>space-between</span>
        <div class="container container5">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
        </div>
    </div>

    <div id="align-content">
      <div>
        <span>flex-start</span>
        <div class="container container1">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
        </div>
      </div>
      <div>
        <span>flex-end</span>
        <div class="container container2">
        <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",

  computed: {
    msg() {
      return "Welcome to Your Vue.js App";
    },
    ...mapState({
      count: state => state.count
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#align-items .container {
  background-color: rgb(87, 39, 75);
  height: 80px;
  width: 80%;
  display: flex;
}

#align-items .item {
  background-color: peru;
  height: 40px;
  width: 50px;
}

#align-items .item2 {
  margin: 0 10px;
  height: 30px;
}

#align-items .container1 {
  align-items: flex-start;
}

#align-items .container2 {
  align-items: flex-end;
}

#align-items .container3 {
  align-items: center;
}

#align-items .container4 {
  align-items: baseline;
}

#align-items .container5 {
  align-items: stretch;
}

#justify-content .container {
  background-color: rgb(87, 39, 75);
  height: 40px;
  width: 80%;
  display: flex;
}

#justify-content .item {
  background-color: peru;
  height: 20px;
  /* 控制父容器剩余空间分配比例 */
  /* flex-grow: 1; */
  align-self: center;
}

#justify-content span {
  display: block;
  margin-top: 10px;
  text-align: left;
}

#justify-content .item2 {
  margin: 0 10px;
}

#justify-content .container1 {
  justify-content: flex-start;
}

#justify-content .container2 {
  justify-content: flex-end;
}

#justify-content .container3 {
  justify-content: center;
}

#justify-content .container4 {
  justify-content: space-around;
}

#justify-content .container5 {
  justify-content: space-between;
}

#justify-content .container6 {
  justify-content: space-evenly;
}
</style>

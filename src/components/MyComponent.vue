<template>
    <div>Hello</div>
</template>

<script lang="ts">
// import { Component, Mixins } from "vue-property-decorator";
// import FirstMixin from "../mixins/first-mixin";
// import SecondMixin from "../mixins/second-mixin";

// @Component
// export default class MyComponent extends Mixins(FirstMixin, SecondMixin) {
//   created() {
//     console.log("MyComponent created", this.name);
//     this.print();
//   }
//   print() {
//     console.log("MyComponent print", this.name);
//   }
// }
import { Component } from "vue-property-decorator";
import Super from "./Super.vue";

@Component
export default class MyComponent extends Super {
  created() {
    console.log("MyComponent created", this.name);
    this.print();
  }
  print() {
    console.log("MyComponent print", this.name);
  }
}
</script>


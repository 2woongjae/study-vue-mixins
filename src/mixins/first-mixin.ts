import { Vue, Component } from "vue-property-decorator";

@Component
export default class FirstMixin extends Vue {
  name = "Mark";
  created() {
    console.log("FirstMixin created");
  }
  print() {
    console.log("FirstMixin print", this.name);
  }
}

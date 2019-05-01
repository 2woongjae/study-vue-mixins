import { Vue, Component } from "vue-property-decorator";

@Component
export default class SecondMixin extends Vue {
  name = "Anna";
  created() {
    console.log("SecondMixin created");
  }
  print() {
    console.log("SecondMixin print", this.name);
  }
}

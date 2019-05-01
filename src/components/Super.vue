<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Super extends Vue {
  name = "Mark";
  created() {
    console.log("Super created");
  }

  print() {
    console.log("Super print");
  }
}
</script>

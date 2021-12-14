<template>
  <span
    class="theme-mode-setting"
    @click="() => {handleToggleMode()}"
    :title="title"
  >
    <Icon
      icon="auto"
      v-if="status === 1"
    />
    <Icon
      icon="moon"
      v-else-if="status === 2"
    />
    <Icon
      icon="sun"
      v-else
    />
  </span>
</template>
<script>
export default {
  data() {
    return {
      status: 2, // 0: auto 1: dark 2: light
    };
  },
  computed: {
    title() {
      const arr = ["auto", "dark", "light"];
      return arr[this.status];
    },
  },
  mounted() {
    let status = +window.localStorage.getItem("mode");
    this.handleToggleMode(status);
  },
  methods: {
    handleToggleMode(status) {
      this.status = status || ++this.status % 3;
      this.setMode(this.status);
      window.localStorage.setItem("mode", this.status);
    },
    setMode(status) {
      if (status === 1) {
        document.documentElement.classList.remove("dark", "light");
        return;
      }
      const removeCls = status === 2 ? "light" : "dark";
      const addCls = status === 2 ? "dark" : "light";
      document.documentElement.classList.remove(removeCls);
      document.documentElement.classList.add(addCls);
    },
  },
};
</script>
<style lang="stylus">
.theme-mode-setting
  overflow hidden
  border-radius 50%
  display flex
  align-items center
  justify-content center
  .theme-icon
    font-size 1.6rem
</style>
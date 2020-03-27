<template>
  <div>
    <h2>admin</h2>
    <p>只有管理员可见</p>
  </div>
</template>

<script>
export default {
  middleware: ["auth"]
};
</script>

<style></style>

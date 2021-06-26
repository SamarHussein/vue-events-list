<template>
  <div>
    <h1>This is User page for {{ username }}</h1>
  </div>
</template>
<script>
export default {
  name: "User",
  props: ["username"],
};
</script>

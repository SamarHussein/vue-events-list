<template>
  <div>
    <h1>This is event list page</h1>
    <EventCard />
  </div>
</template>
<script>
import EventCard from "../components/EventCard.vue";

export default {
  name: "EventList",
  components: { EventCard },
};
</script>

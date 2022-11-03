<template>
  <div class="fullscreen bg-blue text-white text-center  flex flex-center">
    <q-item clickable v-ripple class="start-item q-pa-xs">
      <q-item-section class="flex flex-center">
        <img class="start-img" src="/todolistIcon.png">
        <q-btn size="xl" color="white" text-color="dark" class="q-mt-xl" to="/todolist" label="ToDoListApp"/>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

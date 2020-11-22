<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white q-pa-md">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          <q-tabs>
            <q-route-tab class="icon-home-error"
              :to="{path: '/'}"
              icon="img:https://image.flaticon.com/icons/png/512/1567/1567073.png"
              replace
            />
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-6 text-white">
      <q-toolbar>
        <q-toolbar-title class="absolute-center text-dark">
          ToDoListApp
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>
<script setup lang="ts">
import { useBlogStore } from "@/stores/blog";
import { onMounted } from "vue";
import { shorten, getUrlFromMedia } from "@/utils/functions";
import { useRouter } from "vue-router";
const blog = useBlogStore();
const router = useRouter();
onMounted(async () => {
  await blog.fetchArts();
});

function seeMoreHandler(id) {
  router.push({ path: `/blog/${id}`, replace: true });
}
</script>

<template>
  <h2>Blog</h2>
  <ul>
    <li v-for="art in blog.items" :key="art.id">
      <q-card class="my-card">
        <q-img :src="getUrlFromMedia(art.media[0].original_url)">
          <div class="absolute-bottom">
            <div class="text-h6">{{ art.title }}</div>
            <div class="text-subtitle2">{{ shorten(art.description, 5) }}</div>
          </div>
        </q-img>
        <q-card-actions>
          <q-btn @click="seeMoreHandler(art.id)" flat>See more ...</q-btn>
        </q-card-actions>
      </q-card>
    </li>
  </ul>
</template>
<style scoped>
h2 {
  text-align: center;
  margin-bottom: 15px;
}
</style>

<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading">></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        >
        </PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index';
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      console.log('isLoading : true');
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      console.log('isLoading : false');

      this.postItems = data.posts;
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created1');
    this.fetchData();
    console.log('created2');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
};
</script>

<style></style>

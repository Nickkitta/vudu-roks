<template>
  <div class="list-posts py-4 d-flex flex-column gap-4">
    <input-base
      v-model="findUser"
      placeholder="Filter by author..."
      class="col-4 align-self-center"
    />
    <div v-if="filterPosts.length > 0" class="list-posts__content row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
      <card-post
          v-for="post in filterPosts"
          :title="post.title"
          :body="post.body"
          :author="post.author"
          class="col"
      />
    </div>
    <div v-else class="text-center fs-2">
      No posts found with this author
    </div>
  </div>
</template>

<script lang="ts" setup>
const { dataForShowService } = useServices()

const posts = ref([])
const users = ref([])
const findUser = ref('')

const filterPosts = computed(() => {
  return posts.value.filter(post => findUser.value !== ''
      ? post.author.toLowerCase().includes(findUser.value.toLowerCase())
      : true
  )
})

const getUserNameFromId = (id: number) => {
  const filterUsers = users.value.filter(user => user.id === id)

  return filterUsers.length > 0 ? filterUsers[0].name : 'Unknown'
}

onMounted(async () => {
  posts.value = await dataForShowService.getPosts()
  users.value = await dataForShowService.getUsers()
  posts.value = posts.value.map(post => {
    return {
      ...post,
      author: getUserNameFromId(post.userId)
    }
  })
})
</script>

<style lang="scss" scoped>
.list-posts {

}
</style>
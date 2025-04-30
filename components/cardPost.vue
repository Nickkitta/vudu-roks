<template>
  <div class="card-post">
    <div class="card-post__content p-4 d-flex flex-column gap-3">
      <div class="card-post__title fs-3">
        {{ title}}
      </div>
      <div class="card-post__body fs-4">
        {{ body }}
      </div>
      <div class="card-post__author fs-6">
        {{ author }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export type CardPostProps = {
  title: string
  body: string
  author: string
}

defineProps<CardPostProps>()
</script>

<style lang="scss" scoped>
.card-post {
  &__content {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &__title {
    color: blue;
  }

  &__author {
    color: gray;
  }
}
</style>
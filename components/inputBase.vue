<template>
  <div class="input">
    <div>
      <img class="input__icon" src="@/static/icons/search.svg" alt="search" />
    </div>
    <input
        ref="input"
        :value="modelValue"
        class="input-value"
        :placeholder="placeholder"
        @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
export type InputProps = {
  modelValue: Maybe<string | number>
  icon?: Icons
  placeholder?: string
}

type InputEmits = {
  (emit: 'update:modelValue', value: InputProps['modelValue']): void
}

// props
defineProps<InputProps>()

// emits
const emits = defineEmits<InputEmits>()

// onInput
const onInput = (event: InputEmits) => {
  emits('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  background: white;
  color: black;
  font-size: 18px;
  font-weight: 400;
  padding: 0 12px 0 40px;
  transition: all 0.3s ease;

  &-value {
    width: 100%;
    height: 100%;
    border-left: 1px solid black;
    padding-left: 10px;

    &::placeholder {
      color: gray;
    }
  }

  &__icon {
    position: absolute;
    left: 10px;
    top: 5px;
    height: 25px;
  }

  &:focus,
  &:hover,
  &:focus-visible {
    border: 1px solid blue;
    box-shadow: 0 2px 4px 0 lightblue;

    .input-value {
      border-left: 1px solid blue;
    }
  }
}
</style>

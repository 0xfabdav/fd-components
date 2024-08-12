<template>
  <span
    type="button"
    class="fd-button cursor-pointer inline-block box-border py-2 px-5 border-solid border-2"
    :class="{
      'w-full': fullWidth,
      'text-center': alignText === 'center',
      'text-right': alignText === 'right',
      'bg-gray-200 hover:bg-gray-300 border-gray-200 hover:border-gray-300':
        variant === 'basic',
      'bg-blue-500 hover:bg-blue-400 border-blue-500 hover:border-blue-400':
        variant === 'primary',
      'bg-gray-400 hover:bg-gray-500 border-gray-400 hover:border-gray-500':
        variant === 'secondary',
      'bg-yellow-500 hover:bg-yellow-400 border-yellow-500 hover:border-yellow-400':
        variant === 'warning',
      'bg-red-500 hover:bg-red-400 border-red-500 hover:border-red-400':
        variant === 'danger',
      '[&:not(:hover)]:!bg-transparent': unfilled,
      'opacity-65': disabled,
    }"
    @click="(e) => (disabled ? void 0 : emit('click', e))"
  >
    <span class="fd-button-text">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    unfilled?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    variant?: "basic" | "primary" | "secondary" | "warning" | "danger";
    alignText?: "left" | "center" | "right";
  }>(),
  {
    unfilled: false,
    disabled: false,
    fullWidth: false,
    variant: "basic",
    alignText: "left",
  }
);

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <dialog class="relative" :open="isOpen" v-bind="$attrs">
    <slot name="no-section"> </slot>
    <div
      v-if="showModalCloseIcon"
      class="fd-dialog-close-icon absolute top-0 right-0"
      @click="() => emit('close')"
    >
      X
    </div>
    <slot name="content-section">
      <div class="fd-dialog-content min-w-80 max-w-5xl pt-8 px-5 pb-6">
        <slot>
          <p>content</p>
        </slot>
      </div>
    </slot>
    <slot name="footer-section">
      <div class="fd-dialog-footer">
        <slot name="footer">
          <fd-button
            full-width
            align-text="center"
            @click="
              () => {
                emit('ok');
                emit('close');
              }
            "
            >Ok</fd-button
          >
        </slot>
      </div>
    </slot>
  </dialog>
</template>

<script setup lang="ts">
import fdButton from "src/components/button/button.vue";

withDefaults(
  defineProps<{
    isOpen: boolean;
    showModalCloseIcon: boolean;
  }>(),
  { showModalCloseIcon: true }
);

const emit = defineEmits<{
  close: [];
  ok: [];
}>();

defineSlots<{
  default?: () => any;
  "no-section"?: () => any;
  "content-section"?: () => any;
  "footer-section"?: () => any;
  footer?: () => any;
}>();
</script>

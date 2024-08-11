<template>
    <button
        type="button"
        :class="{
            'rounded-md py-1 px-3 font-semibold': true,
            'default-button': variant === 'normal',
            'danger-button': variant === 'danger',
            'disabled-button cursor-not-allowed': disabled,
            'unfilled-button': !filled,
        }"
        @click="emit('click', $event)"
        :disabled="disabled"
    >
        {{ label }}
    </button>
</template>

<script lang="ts" setup>
import "./button.css";
import { type PropType } from "vue";

defineProps({
    label: { type: String, required: true },
    filled: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    variant: { type: String as PropType<"normal" | "danger">, default: "normal" },
});

const emit = defineEmits<{
    (e: "click", clickData: any): void;
}>();
</script>

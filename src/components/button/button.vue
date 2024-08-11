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

withDefaults(
    defineProps<{
        label: string;
        filled: boolean;
        disabled: boolean;
        variant: "normal" | "danger";
    }>(),
    {
        filled: true,
        disabled: false,
        variant: "normal",
    },
);

const emit = defineEmits<{
    (e: "click", clickData: any): void;
}>();
</script>

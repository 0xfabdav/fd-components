<template>
    <div class="flex">
        <input
            :id="checkboxId"
            type="checkbox"
            :checked="checked"
            :disabled="disabled"
            class="h-5 w-5"
            @click="emit('update:modelValue', !checked)"
        />
        <slot :checkbox-id="checkboxId">
            <label :for="checkboxId" class="ml-2 text-sm text-dark">
                {{ label }}
            </label>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { createUUID } from "src/utils/uuid";
defineProps({
    label: { type: String, required: false },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
});

defineSlots<{
    default?: (props: { checkboxId: string }) => any;
}>();

const emit = defineEmits<{
    (e: "update:modelValue", data: any): void;
}>();

const checkboxId = `checkbox-${createUUID()}`;
</script>

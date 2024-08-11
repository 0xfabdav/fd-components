<template>
    <Checkbox
        v-for="option in options"
        :key="option.id"
        :label="option.label"
        :checked="model.map((value) => value.id).includes(option.id)"
        @update:modelValue="($event) => updateModelValue($event, option.id)"
    >
        <template #default="{ checkboxId }">
            <slot v-bind="option" :checkboxId="checkboxId"></slot>
        </template>
    </Checkbox>
</template>
<script setup generic="T extends { id: string; label?: string }" lang="ts">
import Checkbox from "../checkbox/checkbox.vue";

const props = defineProps({
    options: { type: Array<T>, required: true },
});

const model = defineModel<Array<T>>({ required: true });

const updateModelValue = (checked: boolean, id: string) => {
    const newModelValue = checked
        ? [...model.value, props.options.find((option) => option.id === id)!]
        : model.value.filter((value) => value.id !== id);
    model.value = newModelValue;
};
</script>

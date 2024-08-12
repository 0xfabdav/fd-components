import type { Meta, StoryObj } from "@storybook/vue3";
import CheckboxGroup from "src/components/checkbox-group/checkbox-group.vue";
import { ref, watch } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup as Record<keyof typeof CheckboxGroup, unknown>,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Basic: Story = {
  render: (args) => ({
    components: { CheckboxGroup },
    setup() {
      const model = ref(args.modelValue);

      // Optional: Keeps v-model in sync with storybook args
      watch(
        () => args.modelValue,
        (val) => {
          model.value = val;
        }
      );

      return { args, model };
    },
    template:
      '<CheckboxGroup v-bind="args" v-model="model"> <template #default="{ id, label, checkboxId }"> <label :for="checkboxId"> {{ id+label }} </label> </template></CheckboxGroup>',
  }),
  args: {
    modelValue: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
    ],
    options: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" },
    ],
  },
};

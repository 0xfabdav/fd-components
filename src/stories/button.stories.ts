import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import fdButton from "src/components/button/button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Button",
  component: fdButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["normal", "danger"],
      control: { type: "radio" },
    },
  },
  args: {
    label: "Button",
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof fdButton>;

export default meta;
type Story = StoryObj<typeof fdButton>;

export const Basic: Story = {
  args: {
    default(_) {
      return "Test";
    },
  },
};
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    default(_) {
      return "Test";
    },
  },
};
export const TextAlignment: Story = {
  render: (args) => ({
    components: { fdButton },
    setup() {
      return { args };
    },
    template: `
    <fd-button class="mb-4" full-width align-text="left">Text left (default)</fd-button><br>
    <fd-button class="mb-4" full-width align-text="center">Text centered</fd-button><br>
    <fd-button full-width align-text="right">Text right</fd-button><br>
  `,
  }),
};
export const Variants: Story = {
  render: (args) => ({
    components: { fdButton },
    setup() {
      return { args };
    },
    template: `
    <fd-button class="mb-4" variant="basic">Basic</fd-button><br>
    <fd-button class="mb-4" variant="primary">Primary</fd-button><br>
    <fd-button class="mb-4" variant="secondary">Secondary</fd-button><br>
    <fd-button class="mb-4" variant="warning">Warning</fd-button><br>
    <fd-button variant="danger">Danger</fd-button>
  `,
  }),
};
export const Unfilled: Story = {
  render: (args) => ({
    components: { fdButton },
    setup() {
      return { args };
    },
    template: `
    <fd-button class="mb-4" unfilled variant="basic">Basic</fd-button><br>
    <fd-button class="mb-4" unfilled variant="primary">Primary</fd-button><br>
    <fd-button class="mb-4" unfilled variant="secondary">Secondary</fd-button><br>
    <fd-button class="mb-4" unfilled variant="warning">Warning</fd-button><br>
    <fd-button unfilled variant="danger">Danger</fd-button>
  `,
  }),
};

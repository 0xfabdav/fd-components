import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import fdDialog from "src/components/dialog/dialog.vue";
import fdButton from "src/components/button/button.vue";

const meta = {
  title: "Components/Dialog",
  component: fdDialog,
  tags: ["autodocs"],
  argTypes: {
    //   variant: {
    //     options: ['normal', 'danger'],
    //     control: { type: 'radio' }
    //   }
  },
  args: { isOpen: true },
} satisfies Meta<typeof fdDialog>;

export default meta;
type Story = StoryObj<typeof fdDialog>;

const exampleContent = `
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam porttitor tortor, at placerat
        sem molestie fermentum. Mauris at sapien sapien. Cras eget erat diam. Vivamus eget lectus non sem elementum
        porta. Phasellus luctus elementum purus, ac placerat nunc tempor quis. Integer porta lacus ut nibh rhoncus,
        eget consequat ante gravida. Nullam imperdiet fermentum lacinia.
        </p>
      `;

export const Basic: Story = {
  render: (args) => ({
    components: { fdDialog },
    setup() {
      return { args };
    },
    template: `
        <button @click="args.isOpen=!args.isOpen">show/hide</button>
        <fd-dialog v-bind="args" @close="args.isOpen = false">
            ${exampleContent}
        </fd-dialog>
      `,
  }),
};

export const CustomFooter: Story = {
  render: (args) => ({
    components: { fdDialog, fdButton },
    setup() {
      return { args };
    },
    template: `
        <fd-button @click="args.isOpen=!args.isOpen">show/hide</fd-button>
        <fd-dialog v-bind="args" @close="args.isOpen = false">
            ${exampleContent}
            <template #footer>
                <div class="w-1/2 gap-2 flex">
                    <fd-button class="flex-1" variant="danger" @click="args.isOpen = false">Close</fd-button>
                    <fd-button class="flex-1" variant="primary" @click="args.isOpen = false">Ok</fd-button>
                </div>
            </template>
        </fd-dialog>
      `,
  }),
};

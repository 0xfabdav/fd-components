import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from 'src/components/checkbox/checkbox.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    label: 'Checkbox',
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {}

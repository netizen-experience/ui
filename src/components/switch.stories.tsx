import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      type: "boolean",
    },
  },
  args: {
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: (props) => <Switch {...props} />,
};

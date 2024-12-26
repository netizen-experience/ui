import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: "radio",
      options: [false, true, "indeterminate"],
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: { type: "boolean" },
  },
  args: {
    checked: false,
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: (props) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...props} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

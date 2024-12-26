import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: (props) => (
    <div className="max-w-[160px]">
      <Select {...props}>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
  args: {
    placeholder: "Type something",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: (props) => (
    <div className="max-w-xs">
      <Input {...props} />
    </div>
  ),
};

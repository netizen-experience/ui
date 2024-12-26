import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
  args: {
    placeholder: "Type something",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: (props) => (
    <div className="max-w-xs">
      <Textarea {...props} />
    </div>
  ),
};

export const TallerTextarea: Story = {
  render: Basic.render,
  args: {
    className: "min-h-[128px]",
  },
};

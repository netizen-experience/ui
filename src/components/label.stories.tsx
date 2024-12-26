import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  args: {
    children: "Input label",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  render: (props) => <Label {...props} />,
};

export const WithInput: Story = {
  render: (props) => (
    <div className="max-w-xs space-y-1">
      <Label {...props}>Input label</Label>
      <Input id={props.htmlFor} placeholder="Type something" />
    </div>
  ),
  args: {
    htmlFor: "input-id",
  },
};

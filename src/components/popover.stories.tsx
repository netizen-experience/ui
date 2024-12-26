import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover 🚧",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: (props) => <Popover {...props} />,
};

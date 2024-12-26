import { User } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Static: Story = {
  render: (props) => (
    <Avatar {...props}>
      <AvatarImage src="/avatar-mk.png" />
      <AvatarFallback>MK</AvatarFallback>
    </Avatar>
  ),
};

export const Initials: Story = {
  render: (props) => (
    <Avatar {...props}>
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackUserIcon: Story = {
  render: (props) => (
    <Avatar {...props}>
      <AvatarFallback>
        <User size={20} />
      </AvatarFallback>
    </Avatar>
  ),
};

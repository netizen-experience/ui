import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBadge } from "./notification-badge";

const meta: Meta<typeof NotificationBadge> = {
  title: "Components/Notification Badge",
  component: NotificationBadge,
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "dot"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  args: {
    size: "md",
    variant: "default",
  },
};

export default meta;

type Story = StoryObj<typeof NotificationBadge>;

export const Basic: Story = {
  args: { size: "md", variant: "default" },
  render: (props) => <NotificationBadge {...props}>{props.variant === "default" && "1"}</NotificationBadge>,
};

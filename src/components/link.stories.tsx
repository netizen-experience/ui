import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  args: {
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  render: (props) => <Link {...props}>Link</Link>,
};

export const NewTab: Story = {
  render: (props) => <Link {...props}>Link</Link>,
  args: {
    newTab: true,
  },
};

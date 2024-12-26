import { FlyingSaucer, Ghost as GhostIcon, HandCoins, ToiletPaper, Trash } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "ghost"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      type: "boolean",
    },
  },
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  render: (props) => (
    <IconButton variant="primary" {...props}>
      <HandCoins />
    </IconButton>
  ),
};

export const Secondary: Story = {
  args: { variant: "secondary" },
  render: (props) => (
    <IconButton {...props}>
      <FlyingSaucer />
    </IconButton>
  ),
};

export const Danger: Story = {
  args: { variant: "danger" },
  render: (props) => (
    <IconButton {...props}>
      <Trash />
    </IconButton>
  ),
};

export const Ghost: Story = {
  args: { variant: "ghost" },
  render: (props) => (
    <IconButton {...props}>
      <GhostIcon />
    </IconButton>
  ),
};

export const Link: Story = {
  args: { asChild: true },
  render: (props) => (
    <IconButton {...props}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <ToiletPaper />
      </a>
    </IconButton>
  ),
};

import { Cat, Dog } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger", "ghost"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => <Button {...props}>Primary button</Button>,
};

export const Secondary: Story = {
  args: { variant: "secondary" },
  render: (props) => <Button {...props}>Secondary button</Button>,
};

export const Danger: Story = {
  args: { variant: "danger" },
  render: (props) => <Button {...props}>Danger button</Button>,
};

export const Ghost: Story = {
  args: { variant: "ghost" },
  render: (props) => <Button {...props}>Ghost button</Button>,
};

export const Link: Story = {
  args: { asChild: true },
  render: (props) => (
    <Button {...props}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        This is rendered as an anchor element
      </a>
    </Button>
  ),
};

export const WithLeadingIcon: Story = {
  render: (props) => (
    <Button {...props}>
      <Cat />
      <span>Meow</span>
    </Button>
  ),
};

export const WithTrailingIcon: Story = {
  render: (props) => (
    <Button {...props}>
      <span>Woof</span>
      <Dog />
    </Button>
  ),
};

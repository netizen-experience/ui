import { TextBolder, TextItalic, TextStrikethrough } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "outline"],
      table: {
        defaultValue: { summary: "default" },
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
    variant: "default",
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { variant: "default" },
  render: (props) => (
    <Toggle {...props} aria-label="Toggle bold">
      <TextBolder />
    </Toggle>
  ),
};

export const Outline: Story = {
  args: { variant: "outline" },
  render: (props) => (
    <Toggle {...props} aria-label="Toggle italic">
      <TextItalic />
    </Toggle>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (props) => (
    <Toggle {...props} aria-label="Toggle strikethrough">
      <TextStrikethrough />
    </Toggle>
  ),
};

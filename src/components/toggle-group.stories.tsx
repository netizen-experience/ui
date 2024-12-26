import {
  Cookie,
  Fish,
  IceCream,
  Radioactive,
  SmileyXEyes,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Toggle Group",
  component: ToggleGroup,
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      table: {
        defaultValue: { summary: "single" },
      },
    },
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
    type: "single",
    variant: "default",
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: { type: "single" },
  render: (props) => (
    <ToggleGroup {...props}>
      <ToggleGroupItem value="cookie" aria-label="Get cookie">
        <Cookie />
      </ToggleGroupItem>
      <ToggleGroupItem value="ice-cream" aria-label="Get ice cream">
        <IceCream />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  args: { type: "single", variant: "outline" },
  render: (props) => (
    <ToggleGroup {...props}>
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: { type: "multiple" },
  render: (props) => (
    <ToggleGroup {...props}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <TextBolder />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <TextItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <TextUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Disabled: Story = {
  args: { type: "multiple", disabled: true },
  render: (props) => (
    <ToggleGroup {...props}>
      <ToggleGroupItem value="radioactive" aria-label="Get radioactive">
        <Radioactive />
      </ToggleGroupItem>
      <ToggleGroupItem value="fish" aria-label="Get fish">
        <Fish />
      </ToggleGroupItem>
      <ToggleGroupItem value="gg" aria-label="GG">
        <SmileyXEyes />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

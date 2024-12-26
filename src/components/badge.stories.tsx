import { Cat, Dog } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "gray",
        "accent",
        "white",
        "info",
        "success",
        "warning",
        "danger",
        "emerald",
        "pizazz",
        "violet",
        "picton",
      ],
      table: {
        defaultValue: { summary: "gray" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  args: {
    variant: "gray",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: { variant: "gray" },
  render: (props) => <Badge {...props}>Badge</Badge>,
};

export const Statuses: Story = {
  render: ({ variant: _, ...props }) => (
    <div className="space-x-2">
      <Badge variant="info" {...props}>
        Info
      </Badge>
      <Badge variant="success" {...props}>
        Success
      </Badge>
      <Badge variant="warning" {...props}>
        Warning
      </Badge>
      <Badge variant="danger" {...props}>
        Danger
      </Badge>
    </div>
  ),
};

export const Labels: Story = {
  render: ({ variant: _, ...props }) => (
    <div className="space-x-2">
      <Badge variant="gray" {...props}>
        Gray
      </Badge>
      <Badge variant="accent" {...props}>
        Accent
      </Badge>
      <Badge variant="white" {...props}>
        White
      </Badge>
      <Badge variant="emerald" {...props}>
        Emerald
      </Badge>
      <Badge variant="pizazz" {...props}>
        Pizazz
      </Badge>
      <Badge variant="violet" {...props}>
        Violet
      </Badge>
      <Badge variant="picton" {...props}>
        Picton
      </Badge>
    </div>
  ),
};

export const DarkLabels: Story = {
  render: ({ variant: _, ...props }) => (
    <div className="dark space-x-2">
      <Badge variant="white" {...props}>
        White
      </Badge>
      <Badge variant="emerald" {...props}>
        Emerald
      </Badge>
      <Badge variant="pizazz" {...props}>
        Pizazz
      </Badge>
      <Badge variant="violet" {...props}>
        Violet
      </Badge>
      <Badge variant="picton" {...props}>
        Picton
      </Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (props) => (
    <div className="flex space-x-2">
      <Badge className="space-x-1" {...props} variant="emerald">
        <Dog />
        <span>Woof</span>
      </Badge>
      <Badge className="space-x-1" {...props} variant="pizazz">
        <span>Meow</span>
        <Cat />
      </Badge>
    </div>
  ),
};

export const WithEmojis: Story = {
  render: (props) => (
    <div className="flex space-x-2">
      <Badge {...props} variant="picton">
        <span>
          <span role="img" aria-label="tools">
            🛠️
          </span>
          &nbsp;Updates
        </span>
      </Badge>
      <Badge {...props} variant="danger">
        <span>
          <span role="img" aria-label="no entry">
            ⛔️
          </span>
          &nbsp;Deprecated
        </span>
      </Badge>
    </div>
  ),
};

export const TruncateLongLabel: Story = {
  args: { variant: "picton" },
  render: (props) => (
    <Badge variant="picton" className="min-w-0 max-w-[24ch]" {...props}>
      <span className="truncate">This is a very long badge label that is likely to be truncated</span>
    </Badge>
  ),
};

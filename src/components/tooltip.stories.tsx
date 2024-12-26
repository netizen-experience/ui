import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

type StoryProps = React.ComponentProps<typeof Tooltip> & {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "end" | "center";
  alignOffset?: number;
};

const meta: Meta<StoryProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  argTypes: {
    delayDuration: {
      type: "number",
      description: "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
      table: {
        defaultValue: { summary: "700" },
      },
    },
    side: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      description:
        "The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      table: {
        defaultValue: { summary: "top" },
      },
    },
    sideOffset: {
      type: "number",
      description: "The distance in pixels from the trigger.",
      table: {
        defaultValue: { summary: "4" },
      },
    },
    align: {
      control: { type: "radio" },
      options: ["start", "end", "center"],
      description: "The preferred alignment against the trigger.",
      table: {
        defaultValue: { summary: "center" },
      },
    },
    alignOffset: {
      type: "number",
      description: `An offset in pixels from the "start" or "end" alignment options.`,
      table: {
        defaultValue: { summary: "0" },
      },
    },
  },
  args: {
    delayDuration: 700,
    side: "top",
    sideOffset: 4,
    align: "center",
    alignOffset: 0,
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Basic: Story = {
  render: ({ align, alignOffset, side, sideOffset, ...props }) => (
    <Tooltip {...props}>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent side={side} sideOffset={sideOffset} align={align} alignOffset={alignOffset}>
        Tooltip
      </TooltipContent>
    </Tooltip>
  ),
};

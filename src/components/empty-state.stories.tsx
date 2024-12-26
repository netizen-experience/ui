import { SmileyXEyes, VideoCameraSlash } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState, EmptyStateButton, EmptyStateDescription, EmptyStateIcon, EmptyStateTitle } from "./empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Components/Empty State",
  component: EmptyState,
  argTypes: {
    variant: {
      options: ["default", "dashed"],
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: {
    variant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Basic: Story = {
  args: { variant: "default" },
  render: (props) => (
    <EmptyState {...props}>
      <EmptyStateIcon>
        <SmileyXEyes />
      </EmptyStateIcon>
      <EmptyStateTitle>No items found</EmptyStateTitle>
      <EmptyStateDescription>Create an item to continue.</EmptyStateDescription>
    </EmptyState>
  ),
};

export const Dashed: Story = {
  args: { variant: "dashed" },
  render: (props) => (
    <EmptyState {...props}>
      <EmptyStateIcon>
        <VideoCameraSlash />
      </EmptyStateIcon>
      <EmptyStateTitle>No video recordings found</EmptyStateTitle>
      <EmptyStateDescription>Upload your first video</EmptyStateDescription>
      <EmptyStateButton>Upload</EmptyStateButton>
    </EmptyState>
  ),
};

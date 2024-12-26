import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[120px] w-[360px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[240px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

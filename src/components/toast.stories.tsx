import { Coffee } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Toaster, toast } from "./toast";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Basic: Story = {
  render: (props) => (
    <div className="grid h-[320px] w-full items-start justify-center p-8">
      <Button onClick={() => toast("Your toast is ready!")}>
        <span>Make toast</span>
        <Coffee />
      </Button>
      <Toaster {...props} />
    </div>
  ),
};

// @TODO: add more props to control toasts

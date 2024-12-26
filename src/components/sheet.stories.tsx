import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { Textarea } from "./textarea";

type StoryProps = React.ComponentProps<typeof Sheet> & {
  side?: "top" | "bottom" | "left" | "right";
  hideClose?: boolean;
};

const meta: Meta<StoryProps> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
  argTypes: {
    side: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      description: "The edge of the screen where the component will appear.",
      table: {
        defaultValue: { summary: "right" },
      },
    },
    hideClose: {
      control: { type: "boolean" },
      description: "When `true`, close icon will now be shown.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    side: "right",
    hideClose: false,
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Basic: Story = {
  render: ({ hideClose, side, ...props }) => (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <Button variant="secondary">View comment</Button>
      </SheetTrigger>
      <SheetContent side={side} hideClose={hideClose} className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Comments</SheetTitle>
          <SheetDescription>
            Comments will be visible to all users. Please do not include any sensitive information.
          </SheetDescription>
        </SheetHeader>
        <div className="text-muted-foreground grow py-8 text-center">
          <p className="text-sm font-semibold">No comments</p>
          <p className="text-sm">Get started by adding one below.</p>
        </div>
        <SheetFooter className="sm:flex sm:flex-col sm:space-x-0 sm:space-y-2">
          <Textarea placeholder="Type comment" />
          <Button>Add comment</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

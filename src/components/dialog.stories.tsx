import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Input } from "./input";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: (props) => (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button variant="secondary">Get referral code</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Referral</DialogTitle>
          <DialogDescription>
            Share your referral code and earn credits when your friends complete a project!
          </DialogDescription>
        </DialogHeader>
        <Input readOnly value="V6GLQEWZ2GOB" />
        <DialogFooter>
          <Button
            onClick={() => {
              void (async () => {
                await navigator.clipboard.writeText("V6GLQEWZ2GOB");
              })();
            }}
          >
            Copy link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

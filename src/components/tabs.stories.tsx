import { Lock, User } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger, TabsTriggerIcon } from "./tabs";

interface StoryProps {
  variant: "segment" | "line";
  orientation: "horizontal" | "vertical";
}

const meta: Meta<StoryProps> = {
  title: "Components/Tabs",
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "radio",
      options: ["segment", "line"],
      table: {
        defaultValue: { summary: "segment" },
      },
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
  },
  args: {
    variant: "segment",
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Basic: Story = {
  render: ({ orientation, variant }) => (
    <Tabs defaultValue="account" className="w-[400px]" orientation={orientation}>
      <TabsList variant={variant}>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: ({ orientation, variant }) => (
    <Tabs defaultValue="account" className="w-[400px]" orientation={orientation}>
      <TabsList variant={variant}>
        <TabsTrigger value="account">
          <TabsTriggerIcon>
            <User />
          </TabsTriggerIcon>
          <span>Account</span>
        </TabsTrigger>
        <TabsTrigger value="password">
          <TabsTriggerIcon>
            <Lock />
          </TabsTriggerIcon>
          <span>Password</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

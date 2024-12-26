import { Popcorn } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "radio",
      options: ["info", "success", "warning", "danger"],
      table: {
        defaultValue: { summary: "info" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { variant: "info" },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Info alert bar</AlertTitle>
    </Alert>
  ),
};

export const Success: Story = {
  args: { variant: "success" },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Sucess alert bar</AlertTitle>
    </Alert>
  ),
};

export const Warning: Story = {
  args: { variant: "warning" },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Warning alert bar</AlertTitle>
    </Alert>
  ),
};

export const Danger: Story = {
  args: { variant: "danger" },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Danger alert bar</AlertTitle>
    </Alert>
  ),
};

export const WithCustomIconAndColors: Story = {
  name: "With Custom Icon & Colors",
  args: {
    icon: Popcorn,
    className: "bg-electric-violet-100 text-electric-violet-700",
  },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Custom icon must satisfy the "Icon" type from Phosphor Icons</AlertTitle>
      <AlertDescription>Provide a background color and text color to customize the alert bar's colors</AlertDescription>
    </Alert>
  ),
};

export const WithDescription: Story = {
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Alert bar with description</AlertTitle>
      <AlertDescription>Description is always placed underneath the title</AlertDescription>
    </Alert>
  ),
};

export const WithDescriptionOnly: Story = {
  render: (props) => (
    <Alert {...props}>
      <AlertDescription>Use when title is not applicable</AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  args: { variant: "danger" },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>AlertTitle and AlertAction components are "justify-between"</AlertTitle>
      <AlertAction>Action</AlertAction>
    </Alert>
  ),
};

export const WithDescriptionAndAction: Story = {
  name: "With Description & Action",
  args: { variant: "warning" },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Alert bar with description & action button</AlertTitle>
      <AlertDescription>
        When AlertDescription and AlertAction are both present, the contents of the Alert component will be configured
        into a stacked layout.
      </AlertDescription>
      <AlertAction>Action</AlertAction>
    </Alert>
  ),
};

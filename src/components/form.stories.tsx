import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./form";

const meta: Meta<typeof Form> = {
  title: "Components/Form 🚧",
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: (props) => <Form {...props} />,
};

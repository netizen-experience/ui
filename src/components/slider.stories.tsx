import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  render: (props) => <Slider defaultValue={[50]} max={100} step={1} className="w-1/2" {...props} />,
};

export const Range: Story = {
  render: (props) => (
    <Slider defaultValue={[20, 40, 80]} max={100} step={1} minStepsBetweenThumbs={1} className="w-1/2" {...props} />
  ),
};

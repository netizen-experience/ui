import { Asterisk, X } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipAction } from "./chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    variant: {
      control: "radio",
      options: ["input", "emerald", "pizazz", "violet", "picton"],
      table: {
        defaultValue: { summary: "input" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    selected: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
  },
  args: {
    variant: "input",
    size: "md",
    selected: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  render: (props) => <Chip {...props}>Chip</Chip>,
};

export const WithIcon: Story = {
  render: (props) => (
    <div className="space-x-2">
      <Chip {...props} variant="input">
        <Asterisk />
        <span>Input</span>
      </Chip>
      <Chip {...props} variant="emerald">
        <Asterisk />
        <span>Emerald</span>
      </Chip>
      <Chip {...props} variant="pizazz">
        <Asterisk />
        <span>Pizazz</span>
      </Chip>
      <Chip {...props} variant="violet">
        <Asterisk />
        <span>Violet</span>
      </Chip>
      <Chip {...props} variant="picton">
        <Asterisk />
        <span>Picton</span>
      </Chip>
    </div>
  ),
};

export const WithAction: Story = {
  render: (props) => (
    <div className="space-x-2">
      <Chip {...props} variant="input">
        <span>
          <span role="img">✏️</span> Input
        </span>
        <ChipAction>
          <X />
        </ChipAction>
      </Chip>
      <Chip {...props} variant="emerald">
        <span>
          <span role="img">💎</span> Emerald
        </span>
        <ChipAction>
          <X />
        </ChipAction>
      </Chip>
      <Chip {...props} variant="pizazz">
        <span>
          <span role="img">🍕</span>Pizazz
        </span>
        <ChipAction>
          <X />
        </ChipAction>
      </Chip>
      <Chip {...props} variant="violet">
        <span>
          <span role="img">🔮</span> Violet
        </span>
        <ChipAction>
          <X />
        </ChipAction>
      </Chip>
      <Chip {...props} variant="picton">
        <span>
          <span role="img">🐬</span> Picton
        </span>
        <ChipAction>
          <X />
        </ChipAction>
      </Chip>
    </div>
  ),
};

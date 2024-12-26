import { Bell, CaretDown, Heart, LinkSimple, ShareFat } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, ButtonGroupIconItem, ButtonGroupItem } from "./button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger", "ghost"],
      table: {
        defaultValue: { summary: "secondary" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  args: {
    variant: "secondary",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const ButtonGroupStory: Story = {
  name: "Button Group",
  render: (props) => (
    <ButtonGroup {...props}>
      <ButtonGroupItem>Edit project</ButtonGroupItem>
      <ButtonGroupItem>Export data</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const IconButtonGroup: Story = {
  render: (props) => (
    <ButtonGroup {...props}>
      <ButtonGroupIconItem>
        <Heart />
      </ButtonGroupIconItem>
      <ButtonGroupIconItem>
        <ShareFat />
      </ButtonGroupIconItem>
      <ButtonGroupIconItem>
        <Bell />
      </ButtonGroupIconItem>
    </ButtonGroup>
  ),
};

export const WithDropdown: Story = {
  name: "Group with Dropdown Menu",
  render: (props) => (
    <ButtonGroup {...props}>
      <ButtonGroupItem>
        <Heart />
        <span>Like</span>
      </ButtonGroupItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ButtonGroupIconItem>
            <CaretDown />
          </ButtonGroupIconItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-[240px]">
          <DropdownMenuItem>
            <DropdownMenuItemIcon>
            <ShareFat />
            </DropdownMenuItemIcon>
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemIcon>
            <Bell />
            </DropdownMenuItemIcon>
            <span>Subscribe</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemIcon>
            <LinkSimple />
            </DropdownMenuItemIcon>
            <span>Copy link</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  ),
};

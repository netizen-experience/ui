import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { DescriptionList, DescriptionListDetails, DescriptionListItem, DescriptionListTerm } from "./description-list";

const meta: Meta<typeof DescriptionList> = {
  title: "Components/Description List",
  component: DescriptionList,
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const Basic: Story = {
  render: (props) => (
    <DescriptionList {...props}>
      <DescriptionListItem>
        <DescriptionListTerm>Moderator</DescriptionListTerm>
        <DescriptionListDetails className="inline-flex items-center">
          <Avatar className="size-6">
            <AvatarImage src="/avatar-mk.png" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <span className="ml-2">Megan</span>
        </DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>Session mode</DescriptionListTerm>
        <DescriptionListDetails>Remote</DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>Device type</DescriptionListTerm>
        <DescriptionListDetails className="space-x-1">
          <Badge>Mobile</Badge>
          <Badge>Desktop</Badge>
        </DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>Language</DescriptionListTerm>
        <DescriptionListDetails>English</DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>Interpreter language</DescriptionListTerm>
        <DescriptionListDetails>Mandarin</DescriptionListDetails>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>Incentive</DescriptionListTerm>
        <DescriptionListDetails>10 crystals</DescriptionListDetails>
      </DescriptionListItem>
    </DescriptionList>
  ),
};

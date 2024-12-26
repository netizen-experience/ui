import type { Meta, StoryObj } from "@storybook/react";
import { AvatarFallback, AvatarImage } from "./avatar";
import { AvatarGroup, AvatarGroupItem } from "./avatar-group";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Link } from "./link";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/Avatar Group",
  component: AvatarGroup,
  argTypes: {
    overlapDirection: {
      control: "inline-radio",
      options: ["ltr", "rtl"],
      table: {
        defaultValue: { summary: "ltr" },
      },
    },
  },
  args: {
    overlapDirection: "ltr",
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const avatars = [
  {
    src: "/avatar-by.png",
    fallback: "BY",
    name: "Beatrice",
    username: "@beatrice",
  },
  {
    src: "/avatar-al.png",
    fallback: "AL",
    name: "Angela",
    username: "@angela",
  },
  {
    src: "/avatar-zh.png",
    fallback: "ZH",
    name: "Zhuang Hang",
    username: "@zhuanghang",
  },
  {
    src: "/avatar-mk.png",
    fallback: "MK",
    name: "Megan",
    username: "@megan",
  },
  {
    src: "/avatar-sl.png",
    fallback: "SL",
    name: "Selina",
    username: "@selina",
  },
];

export const AvatarGroupStory: Story = {
  name: "Avatar Group",
  render: (props) => (
    <div className="flex justify-start">
      <AvatarGroup {...props}>
        {avatars.map((avatar, index) => (
          <AvatarGroupItem key={index}>
            <AvatarImage src={avatar.src} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </AvatarGroupItem>
        ))}
      </AvatarGroup>
    </div>
  ),
};

export const WithHoverCard: Story = {
  render: (props) => (
    <div className="grid h-[128px] items-end justify-center">
      <AvatarGroup {...props}>
        {avatars.map((avatar) => (
          <HoverCard key={avatar.username}>
            <HoverCardTrigger>
              <AvatarGroupItem>
                <AvatarImage src={avatar.src} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </AvatarGroupItem>
            </HoverCardTrigger>
            <HoverCardContent side="top" className="ml-2 w-fit">
              <div className="flex flex-col">
                <span className="text-sm">{avatar.name}</span>
                <Link href="https://bit.ly/98K8eH" newTab className="text-xs text-muted-foreground">
                  {avatar.username}
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </AvatarGroup>
    </div>
  ),
};

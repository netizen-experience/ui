import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Link } from "./link";

const meta: Meta<typeof HoverCard> = {
  title: "Components/Hover Card",
  component: HoverCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Basic: Story = {
  render: () => (
    <div className="grid h-[200px] w-full place-items-start p-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link>@nextjs</Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-[320px]">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">Joined December 2021</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

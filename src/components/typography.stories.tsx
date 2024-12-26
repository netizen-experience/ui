import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { Blockquote, Heading, InlineCode, List, Paragraph } from "./typography";

const meta: Meta = {
  title: "Components/Typography",
};

export default meta;

export const Typography: StoryObj = {
  render: () => (
    <>
      <Heading level={1}>The Joke Tax Chronicles</Heading>
      <Paragraph>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
        day, his advisors came to him with a problem: the kingdom was running out of money.
      </Paragraph>
      <Heading level={2} className="mt-10">
        The King&apos;s Plan
      </Heading>
      <Paragraph>
        The king thought long and hard, and finally came up with <Link href="#">a brilliant plan</Link>: he would tax
        the jokes in the kingdom.
      </Paragraph>
      <Blockquote>
        &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good joke, so it&apos;s only fair that they should
        pay for the privilege.&rdquo;
      </Blockquote>
      <Heading level={3} className="mt-8">
        The Joke Tax
      </Heading>
      <Paragraph>
        The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:
      </Paragraph>
      <List className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          1st level of puns: <InlineCode>5</InlineCode> gold coins
        </li>
        <li>
          2nd level of jokes: <InlineCode>10</InlineCode> gold coins
        </li>
        <li>
          3rd level of one-liners: <InlineCode>20</InlineCode> gold coins
        </li>
      </List>
      <Paragraph>
        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
        refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
      </Paragraph>
      <Heading level={3} className="mt-8">
        Jokester&apos;s Revolt
      </Heading>
      <Paragraph>
        Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under
        the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem
        to stop Jokester.
      </Paragraph>
      <Paragraph>
        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they
        couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
      </Paragraph>
      <Heading level={3} className="mt-8">
        The People&apos;s Rebellion
      </Heading>
      <Paragraph>
        The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the
        entire kingdom was in on the joke.
      </Paragraph>
      <div className="my-6">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>King&apos;s Treasury</TableHead>
              <TableHead>People&apos;s happiness</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Empty</TableCell>
              <TableCell>Overflowing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Modest</TableCell>
              <TableCell>Satisfied</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Full</TableCell>
              <TableCell>Ecstatic</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Paragraph>
        The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
        Jokester was declared a hero, and the kingdom lived happily ever after.
      </Paragraph>
      <Paragraph>
        The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.
      </Paragraph>
    </>
  ),
};

export const HeadingStory: StoryObj<typeof Heading> = {
  name: "Heading",
  argTypes: {
    level: {
      options: [1, 2, 3, 4],
      control: "select",
    },
  },
  args: { level: 1, children: "This is a heading" },
  render: Heading,
};

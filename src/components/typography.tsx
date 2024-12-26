import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type HeadingElementType = "h1" | "h2" | "h3" | "h4";

const headingVariants = cva("scroll-m-20 text-balance", {
  variants: {
    level: {
      1: "text-3xl font-extrabold tracking-tight",
      2: "text-2xl font-semibold tracking-tight",
      3: "text-xl font-semibold tracking-tight",
      4: "text-lg font-semibold tracking-tight",
    },
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4;
}

function Heading({ className, level, ...props }: HeadingProps) {
  const Comp: HeadingElementType = `h${level}`;
  return <Comp className={cn(headingVariants({ level }), className)} {...props} />;
}

function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-pretty [&:not(:first-child)]:mt-4", className)} {...props} />;
}

function Blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />;
}

function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />;
}

function NumberedList({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)} {...props} />;
}

function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <code className={cn("rounded-md bg-muted px-[0.3rem] py-[0.1rem] font-mono text-sm", className)} {...props} />;
}

function Kbd({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <kbd className={cn("rounded-md border bg-neutral-100 px-1 text-xs", className)} {...props} />;
}

function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-pretty text-xl text-muted-foreground", className)} {...props} />;
}

function Large({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-pretty text-lg font-semibold", className)} {...props} />;
}

function Small({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-pretty text-sm font-medium", className)} {...props} />;
}

function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-pretty text-sm text-muted-foreground", className)} {...props} />;
}

export {
  Heading,
  headingVariants,
  Paragraph,
  Blockquote,
  List,
  NumberedList,
  InlineCode,
  Kbd,
  Lead,
  Large,
  Small,
  Muted,
};

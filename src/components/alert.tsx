import type { Icon, IconProps } from "@phosphor-icons/react";
import { CheckCircle, Info, Warning, WarningDiamond, X } from "@phosphor-icons/react/dist/ssr";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import { IconButton } from "./icon-button";

const alertVariants = cva(
  "relative flex w-full flex-row items-center justify-between rounded-lg py-4 pl-[44px] pr-[52px] text-sm has-[[data-ui=alert-description]]:flex-col has-[[data-ui=alert-description]]:items-start has-[[data-ui=alert-description]]:justify-normal",
  {
    variants: {
      variant: {
        info: "bg-info-background text-info-foreground [&>button]:ring-offset-info-background",
        success: "bg-success-background text-success-foreground [&>button]:ring-offset-success-background",
        warning: "bg-warning-background text-warning-foreground [&>button]:ring-offset-warning-background",
        danger: "bg-danger-background text-danger-foreground [&>button]:ring-offset-danger-background",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

function PresetIcon({ variant, ...props }: IconProps & VariantProps<typeof alertVariants>) {
  if (variant === "success") return <CheckCircle {...props} />;
  else if (variant === "warning") return <WarningDiamond {...props} />;
  else if (variant === "danger") return <Warning {...props} />;
  return <Info {...props} />;
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  icon?: Icon;
  hideClose?: boolean;
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, hideClose, icon: CustomIcon, onDismiss, variant = "info", ...props }, ref) => {
    const AlertIcon = CustomIcon ? CustomIcon : PresetIcon;
    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), hideClose && "pr-4", className)} {...props}>
        <AlertIcon variant={variant} size={20} className="absolute left-4 top-[16.5px]" />
        {children}
        {!hideClose && (
          <IconButton
            variant="ghost"
            size="sm"
            className="absolute right-2 top-[10.5px] hover:bg-transparent active:bg-transparent [&>svg]:size-5"
            onClick={onDismiss}
          >
            <X />
          </IconButton>
        )}
      </div>
    );
  },
);
Alert.displayName = "Alert";

const AlertTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => (
    <h5 ref={ref} className={cn("peer/title text-sm font-bold", className)} data-ui="alert-title" {...props}>
      {children}
    </h5>
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("peer/description peer-data-[ui=alert-title]/title:mt-2", className)}
      data-ui="alert-description"
      {...props}
    />
  ),
);
AlertDescription.displayName = "AlertDescription";

const AlertAction = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    className={cn(
      "-m-[9px] h-auto p-[9px] hover:bg-transparent active:bg-transparent peer-data-[ui=alert-description]/description:mt-[10px]",
      className,
    )}
    data-ui="alert-action"
    {...props}
  />
));
AlertAction.displayName = "AlertAction";

export { Alert, AlertTitle, AlertDescription, AlertAction };

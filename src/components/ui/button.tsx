import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-border bg-background/10 text-foreground hover:bg-accent",
      light: "border border-hero-foreground/50 bg-hero-foreground/10 text-hero-foreground backdrop-blur-sm hover:bg-hero-foreground/20",
      ghost: "text-foreground hover:bg-accent",
    },
    size: { default: "px-6 py-3", lg: "px-7 py-3.5", icon: "h-11 w-11 px-0" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size">, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };

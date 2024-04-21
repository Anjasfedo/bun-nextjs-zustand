import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import Balancer from "react-wrap-balancer";

export interface TypographyProps {
  children: ReactNode;
  className?: string;
}

const TypographyH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-6xl",
          className
        )}
        ref={ref}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </h1>
    );
  }
);

TypographyH1.displayName = "TypographyH1";

const TypographyH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          className
        )}
        ref={ref}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </h2>
    );
  }
);

TypographyH2.displayName = "TypographyH2";

const TypographyH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "text-2xl font-bold tracking-tight sm:text-3xl",
          className
        )}
        ref={ref}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </h3>
    );
  }
);

TypographyH3.displayName = "TypographyH3";

const TypographyH4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "text-xl font-bold tracking-tight sm:text-2xl",
          className
        )}
        ref={ref}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </h4>
    );
  }
);

TypographyH4.displayName = "TypographyH4";

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4 };

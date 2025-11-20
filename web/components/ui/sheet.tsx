import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-sheet";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn("fixed inset-0 z-40 bg-black/40 backdrop-blur-sm", className)}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, side = "left", ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      side={side}
      className={cn(
        "fixed inset-y-0 z-50 w-80 bg-white shadow-soft transition ease-in-out data-[state=closed]:slide-out data-[state=open]:slide-in",
        side === "left" ? "left-0 border-r" : "right-0 border-l",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="font-semibold">Меню</div>
        <SheetPrimitive.Close className="rounded-md p-1 text-muted-foreground hover:bg-muted">
          <X className="h-5 w-5" />
          <span className="sr-only">Закрыть</span>
        </SheetPrimitive.Close>
      </div>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-2 p-4", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 p-4", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetPortal, SheetOverlay };

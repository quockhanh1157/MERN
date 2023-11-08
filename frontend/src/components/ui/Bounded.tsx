import clsx from "clsx";
import React from "react";

type BoundProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};
export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-10 mobile:py-14 mobile:px-6 tablet:py-16",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classNames) => twMerge(clsx(classNames));

export { cn };

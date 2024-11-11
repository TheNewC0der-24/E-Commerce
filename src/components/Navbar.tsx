'use client';

import { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ children }: { children: ReactNode }) {
    return (
        <nav className="bg-primary text-primary-foreground flex justify-between sm:justify-center px-4 py-2 md:py-0">
            {children}
        </nav>
    );
}

export function NavbarLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname();

    return (
        <Link
            {...props}
            className={cn(
                "p-2 sm:p-4 text-sm sm:text-base hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
                pathname === props.href && "bg-background text-foreground"
            )}
        />
    );
}

'use client' // usePathname is a client component
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn("transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500", className, isActive && "text-rose-500 font-semibold")}
    >
      {children}
    </Link>
  );
}

export default NavLink;

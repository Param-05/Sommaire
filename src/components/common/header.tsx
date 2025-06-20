import NavLink from "@/components/common/nav-link";
import React from "react";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";

function Header() {
    const isLoggedIn = false; // Replace with actual authentication logic
  return (
    <header>
      <nav className="container flex justify-between items-center py-4 lg:px-8 px-2 mx-auto">
        <div className="flex lg:flex-1">
          <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
            <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
            <span className="font-extrabold lg:text-xl text-gray-900">
              Sommaire
            </span>
          </NavLink>
        </div>
        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
          <NavLink href="/#pricing">Pricing</NavLink>
          {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
        </div>
        <div className="flex lg:justify-end lg:flex-1">
          {isLoggedIn? (<div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button>User</Button>
          </div>
          ):
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;

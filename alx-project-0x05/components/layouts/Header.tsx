import Link from "next/link";
import Button from "../common/Button";
import { useCount } from "@/context/CountContext";

import React from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const {count} = useCount();

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        
      </div>
    </header>
  );
};

export default Header;

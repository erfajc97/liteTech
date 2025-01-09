"use client";
  import { usePathname } from "next/navigation";

const usePathnameHook = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return {
    theme: isHome ? "dark" : "light",
    pathname,
  };
};

export default usePathnameHook;
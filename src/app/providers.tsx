'use client'

import usePathnameHook from '@/hooks/usePathnameHook';
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = usePathnameHook() || "dark";
  return (
    <NextUIProvider>
      <div className={`grid grid-rows-[auto_1fr_auto] min-h-screen ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        {children}
      </div>
    </NextUIProvider>
  )
}
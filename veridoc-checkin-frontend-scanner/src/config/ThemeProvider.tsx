'use client'
import { ThemeProvider } from "next-theme";
import { ReactNode } from "react";

export default function AppThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            {children}
        </ThemeProvider>
    )
}
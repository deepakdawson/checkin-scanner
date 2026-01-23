'use client'
import { CiDark, CiLight } from "react-icons/ci";
import useTheme from "next-theme"
import { Button } from "@heroui/react";

export default function ToggleTheme() {

    const {theme, setTheme} = useTheme();

    const updateTheme = () => {
        setTheme(theme === 'dark' ? 'light': 'dark')
    }

    return (
        <Button onClick={updateTheme} isIconOnly>
            {
                theme === 'dark' ? <CiDark/> : <CiLight/>
            }
        </Button>
    )
}
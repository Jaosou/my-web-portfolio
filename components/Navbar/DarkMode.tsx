"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function DarkMode() {
    const { setTheme } = useTheme()

    const [theme ,setThemeB] = React.useState(false)
    
    React.useEffect(() => {
        if(theme == true){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    } ,[theme])
    
    const hdleOnClick: any = async () =>{
        await delay(0);
        setThemeB(!theme)
        if(theme){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }   

    return (
        <Button onClick={() => hdleOnClick()} variant={"outline"} size={"icon"}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 duration-300 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] duration-300 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}

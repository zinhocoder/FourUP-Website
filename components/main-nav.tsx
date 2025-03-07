"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const menuItems = [
  { title: "Home", href: "#home" },
  { title: "UP4", href: "#up4" },
  { title: "Serviços", href: "#servicos" },
  { title: "Sobre", href: "#sobre" },
  { title: "Equipe", href: "#equipe" },
  { title: "Cases", href: "#cases" },
  { title: "Contato", href: "#contato" },
]

export function MainNav() {
  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "text-white hover:text-fourup-orange transition-colors")}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-fourup-dark">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-lg font-medium text-white hover:text-fourup-orange transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}


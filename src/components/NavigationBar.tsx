import '../index.css'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, createTheme, ThemeProvider } from "flowbite-react";

const navBarTheme = createTheme({

  navbar:{
      root: {
        base: "bg-[var(--content)] py-0 px-4 sm:py-0 border-b-2",
        rounded: {
          on: "rounded",
          off: ""
        },
        bordered: {
          on: "border-5",
          off: ""
        },
        inner: {
          base: "mx-auto flex flex-wrap items-stretch justify-between",
          fluid: {
            on: "",
            off: "container"
          }
        }
      },
      brand: {
        base: "flex *:text-xl *:font-bold items-center hover:text-[var(--primary)] border-0"
      },
      collapse: {
        base: "w-full md:block md:w-auto",
        list: "flex flex-col md:flex-row md:space-x-0 md:text-sm md:font-medium",
        hidden: {
          on: "hidden",
          off: ""
        }
      },
      link: {
        base: "block py-2 px-4 md:py-2 md:px-4 text-lg",
        active: {
          on: "bg-transparent text-white md:bg-transparent md:text-black",
          off: "border-0 border-gray-100 text-black hover:bg-gray-50 md:border-0 md:hover:bg-[var(--primary)] md:hover:border-0 md:hover:text-[var(--content)] transition-all ease-out duration-100"
        },
        disabled: {
          on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
          off: ""
        }
      },
      toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
        icon: "h-6 w-6 shrink-0",
        title: "sr-only"
      }
    }
}) 

function NavigationBar(){
  return (
    <>
    <ThemeProvider theme={navBarTheme}>
      <header className="fixed w-full z-2">
      <Navbar fluid>
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ziad Jaafar</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <div className='border-x-[1px]' />
          <NavbarLink href="/about">About</NavbarLink>
          <div className='border-x-[1px]' />
          <NavbarLink href="/projects">Projects</NavbarLink>
          <div className='border-x-[1px]' />
          <NavbarLink href="/contact">Contact</NavbarLink>
          <div className='border-x-[1px]' />
        </NavbarCollapse>
      </Navbar>
      </header>
    </ThemeProvider>
    </>
  );
}

export default NavigationBar
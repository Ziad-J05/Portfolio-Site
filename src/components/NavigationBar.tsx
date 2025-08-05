import '../index.css'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, createTheme, ThemeProvider } from "flowbite-react";

const navBarTheme = createTheme({

  navbar:{
      root: {
        base: "bg-white px-2 py-2.5 sm:px-4 border-b-2",
        rounded: {
          on: "rounded",
          off: ""
        },
        bordered: {
          on: "border",
          off: ""
        },
        inner: {
          base: "mx-auto flex flex-wrap items-center justify-between",
          fluid: {
            on: "",
            off: "container"
          }
        }
      },
      brand: {
        base: "flex items-center"
      },
      collapse: {
        base: "w-full md:block md:w-auto",
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        hidden: {
          on: "hidden",
          off: ""
        }
      },
      link: {
        base: "block py-2 pl-3 pr-4 md:p-0 text-lg",
        active: {
          on: "bg-transparent text-white md:bg-transparent md:text-black",
          off: "border-b border-gray-100 text-black hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-black md:hover:underline"
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
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      </header>
    </ThemeProvider>
    </>
  );
}

export default NavigationBar
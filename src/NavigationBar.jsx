import './index.css'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function NavigationBar(){
  return (
    <>
      <header className="fixed w-full">
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ziad Jaafar</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#skills">
            Skills
          </NavbarLink>
          <NavbarLink href="#expereince">Experience</NavbarLink>
          <NavbarLink href="#projects">Projects</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      </header>
    </>
  );
}

export default NavigationBar
import { Navbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from "@nextui-org/react"
import { FaRegFilePdf } from "react-icons/fa";
import { PiGithubLogo } from "react-icons/pi";

export default function Nav(){

    return (
        <Navbar>
            <NavbarBrand>
                <Button variant="light" startContent={<PiGithubLogo/>}><a href="https://github.com/shahaba">Github</a></Button>
            </NavbarBrand>
        {/* <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#AboutMe">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#Experiences" aria-current="page">
              Experience
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#Projects">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} variant="light" startContent={<FaRegFilePdf/>} onPress={() => { console.log('click') }}>
              <a href="/resume.pdf">
                Resume
              </a>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    )
}


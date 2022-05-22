import {
  HStack,
  Stack,
  Divider,
  Link,
  Box,
  Text,
  Button,
  useColorMode,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { BsGlobe } from "react-icons/bs";
import { useRouter } from "next/router";

const HomeButton = () => {
  const router = useRouter();
  console.log(router.asPath);

  if (router.asPath == "/projects") {
    return (
      <Link href="/">
        <Button colorScheme="link">
          <Text>HomeButton</Text>
        </Button>
      </Link>
    );
  } else if (router.asPath == "/") {
    return (
      <Link href="/">
        <Button colorScheme="blue">
          <Text>HomeButton</Text>
        </Button>
      </Link>
    );
  }
};

const ProjectButton = () => {
  const router = useRouter();
  console.log(router.asPath);

  if (router.asPath == "/projects") {
    return (
      <Link href="/projects">
        <Button colorScheme="blue">
          <Text>Projects</Text>
        </Button>
      </Link>
    );
  } else if (router.asPath == "/") {
    return (
      <Link href="/projects">
        <Button variant="ghost" colorScheme="black">
          <Text>Projects</Text>
        </Button>
      </Link>
    );
  }
};

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <HStack mt="25px" direction={{ md: "row" }} justify="space-between">
        <Stack direction={{ md: "row" }} spacing="18px" alignItems="center">
          <Link href="/">
            <Box>
              <Text fontSize="18px" fontWeight="bold">
                Home
              </Text>
            </Box>
          </Link>
          <ProjectButton />
          {/* <Link href="/projects">
            <Box>
              <Text>Projects</Text>
            </Box>
          </Link> */}
          <Link href="https://github.com/hgseo16">
            <Button variant="link" colorScheme="black">
              Github
            </Button>
          </Link>
        </Stack>
        <Box right="20px">
          {/* <Button colorScheme="teal">
          <Icon as={BsGlobe} />
        </Button>
         */}
          <Menu>
            <MenuButton as={Button}>
              <Icon as={BsGlobe} />
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>Korean</MenuItem>
            </MenuList>
          </Menu>
          <Button colorScheme="blue" onClick={toggleColorMode}>
            <SunIcon />
          </Button>
        </Box>
      </HStack>
      <Divider mt="15px" />
    </>
  );
};

export default NavBar;

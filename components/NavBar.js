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

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <HStack mt="25px" direction={{ md: "row" }} justify="space-between">
        <Stack direction={{ md: "row" }} spacing="18px" alignItems="center">
          <Link href="/">
            {/* <HomeButton /> */}
            <Box>
              <Button fontSize="18px" fontWeight="bold" variant="ghost">
                Home
              </Button>
            </Box>
          </Link>
          {/* <ProjectButton /> */}
          <Link href="/projects">
            <Button variant="link" colorScheme="black">
              Projects
            </Button>
          </Link>
          <Link href="https://github.com/hgseo16">
            <Button variant="link" colorScheme="black">
              Github
            </Button>
          </Link>
        </Stack>
        <Box right="20px">
          <Menu>
            <MenuButton as={Button}>
              <Icon as={BsGlobe} />
            </MenuButton>
            <MenuList>
              <Link href="/">
                <MenuItem>English</MenuItem>
              </Link>
              <Link href="/kr">
                <MenuItem>Korean</MenuItem>
              </Link>
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

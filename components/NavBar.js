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
          <Link href="/projects">
            <Box>
              <Text>Projects</Text>
            </Box>
          </Link>
          <Link href="https://github.com/hgseo16">
            <Text>Github</Text>
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

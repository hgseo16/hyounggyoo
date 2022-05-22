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

// const HomeButton = () => {
//   const router = useRouter();
//   console.log(router.asPath);

//   if (router.asPath == "/") {
//     return (
//       <Link href="/">
//         <Button fontSize="18px" fontWeight="bold" colorScheme="blue">
//           <Text>Home</Text>
//         </Button>
//       </Link>
//     );
//   } else {
//     return (
//       <Link href="/">
//         <Button fontSize="18px" fontWeight="bold" variant="ghost">
//           <Text>Home</Text>
//         </Button>
//       </Link>
//     );
//   }
// };

// const ProjectButton = () => {
//   const router = useRouter();
//   console.log(router.asPath);

//   if (router.asPath == "/projects") {
//     return (
//       <Link href="/projects">
//         <Button colorScheme="blue">
//           <Text>Projects</Text>
//         </Button>
//       </Link>
//     );
//   } else {
//     return (
//       <Link href="/projects">
//         <Button variant="ghost" colorScheme="black">
//           <Text>Projects</Text>
//         </Button>
//       </Link>
//     );
//   }
// };

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <HStack mt="25px" direction={{ md: "row" }} justify="space-between">
        <Stack direction={{ md: "row" }} spacing="18px" alignItems="center">
          <Link href="/kr">
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
              포트폴리오
            </Button>
          </Link>
          <Link href="https://github.com/hgseo16">
            <Button variant="link" colorScheme="black">
              깃헙 (Github)
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
                <MenuItem>영어</MenuItem>
              </Link>
              <Link href="/kr">
                <MenuItem>한국어</MenuItem>
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

import {
  Container,
  Box,
  Divider,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";

const TwitchBros = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="80vh">
      <NavBar />
      <Container maxW="60vh">
        <Box direction="column" align="left" mt="70px" mb="10vh">
          <Heading as="h1" size="xl" mb="10px">
            Emory Marketplace
          </Heading>
          <Divider mb="50px" />
          <Box align="center">hi</Box>
        </Box>
      </Container>
    </Container>
  );
};

export default TwitchBros;

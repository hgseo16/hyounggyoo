import {
  Container,
  Box,
  Divider,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/cards/ProjectCard";
import EmoryMarketplaceCard from "../components/cards/EmoryMarketplaceCard";
import StockDataSeederCard from "../components/cards/StockDataSeederCard";
import PersonalWebsiteCard from "../components/cards/PersonalWebsiteCard";
import TwitchBrosCard from "../components/cards/TwitchBrosCard";

const Projects = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="80vh">
      <NavBar />
      <Container maxW="60vh">
        <Box direction="column" align="left" mt="70px" mb="10vh">
          <Heading as="h1" size="xl" mb="10px">
            Here are some of my most recent works!
          </Heading>
          <Divider mb="50px" />
          <Box align="center">
            <EmoryMarketplaceCard />
            <StockDataSeederCard />
            <PersonalWebsiteCard />
            <TwitchBrosCard />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Projects;

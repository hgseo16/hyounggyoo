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

const Projects = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const projectInfo3 = {
    imageUrl: "images/personal_website.jpg",
    imageAlt: "Personal Website",
    endpoint: "personal_website",
    projectTitle: "Personal Website",
    summary: "Hyoung Gyoo's personal website made using Next.js and Chakra UI.",
    p: "Content to be updated soon",
  };

  const projectInfo4 = {
    imageUrl: "images/twitch_bros.png",
    imageAlt: "Twitch Bros Homepage",
    endpoint: "twitch_bros",
    projectTitle: "Twitch Bros",
    summary:
      "Sentiment analysis of topics modeled from real-time Twitch chats.",
    p: "Content to be updated soon",
  };

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
            <ProjectCard projectInfo={projectInfo4} />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Projects;

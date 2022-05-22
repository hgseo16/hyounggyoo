import {
  Container,
  Box,
  Divider,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const projectInfo = {
    imageUrl: "images/emory_marketplace.png",
    imageAlt: "Emory Marketplace Homepage",
    endpoint: "emory_marketplace",
    projectTitle: "Emory Marketplace",
    summary:
      "Website created using the MERN stack where Emory students can exchange textbooks.",
    p: "Content to be updated soon",
  };

  const projectInfo2 = {
    imageUrl: "images/data_seeder.jpg",
    imageAlt: "xingAPI codebase",
    endpoint: "data_seeder",
    projectTitle: "Stock Data Seeder",
    summary:
      "Data seeder written in python which regularly updates a local mysql database with the price action of all the tickers from the KOSPI/KOSDAQ market.",
    p: "Content to be updated soon",
  };

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
            <ProjectCard projectInfo={projectInfo} />
            <ProjectCard projectInfo={projectInfo2} />
            <ProjectCard projectInfo={projectInfo3} />
            <ProjectCard projectInfo={projectInfo4} />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Projects;

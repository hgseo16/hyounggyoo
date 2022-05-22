import {
  Container,
  Box,
  Divider,
  Image,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const projectInfo = {
    imageUrl: "images/Kevin.jpg",
    projectTitle: "Emory Marketplace",
    projectExplanation:
      "Website created using the MERN stack where Emory students can exchange textbooks.",
  };

  const projectInfo2 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    projectTitle: "Stock Data Seeder",
    projectExplanation:
      "Data seeder written in python which regularly updates a local mysql database with the price action of all the tickers from the KOSPI/KOSDAQ market.",
  };

  const projectInfo3 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    projectTitle: "Twitch Bros",
    projectExplanation: "fun project",
  };

  return (
    <Container maxW="80vh">
      <NavBar />
      <Container maxW="60vh">
        {/* <Container maxW="60vh" bg="teal.400"> */}
        <Box direction="column" align="left" m="10vh auto">
          <Heading size="md" variant="section-title">
            Projects
          </Heading>
          <Divider mb="50px" />
          <Box align="center">
            <ProjectCard projectInfo={projectInfo} />
            <ProjectCard projectInfo={projectInfo2} />
            <ProjectCard projectInfo={projectInfo3} />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Projects;

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

const ProjectCard = (props) => {
  const { imageUrl, imageAlt, projectTitle, projectExplanation } =
    props.projectInfo;

  return (
    <Box
      maxW="45vh"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="50px"
    >
      <Image src={imageUrl} alt={imageAlt} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="bold"
          as="h3"
          lineHeight="tight"
          noOfLines={1}
          align="left"
        >
          {projectTitle}
        </Box>

        <Box align="left">{projectExplanation}</Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;

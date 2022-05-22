import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Link,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
// import Image from "next/image";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";

const ProjectCard = (props) => {
  const { imageUrl, imageAlt, endpoint, projectTitle, summary, p } =
    props.projectInfo;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      maxW="45vh"
      borderWidth="5px"
      borderRadius="lg"
      overflow="hidden"
      m="50px"
      onClick={onOpen}
      boxShadow="dark-lg"
    >
      <Image src={imageUrl} alt={imageAlt} border="3px" />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="bold"
          as="h3"
          lineHeight="tight"
          noOfLines={1}
          align="left"
          mb="15px"
        >
          {projectTitle}
        </Box>
        <Divider />
        <Box align="left" lineHeight="tight" noOfLines={3} mt="15px">
          {summary}
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          scrollBehavior="inside"
          size="xl"
        >
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropBlur="2px"
            backdropBrightness="80%"
          />
          <ModalContent>
            <ModalHeader>{projectTitle}</ModalHeader>
            <ModalCloseButton />
            <Divider />
            <ModalBody mt="15px">{p}</ModalBody>

            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default ProjectCard;

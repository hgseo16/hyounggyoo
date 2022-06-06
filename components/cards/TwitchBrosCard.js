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
import NavBar from "../NavBar";
import Paragraph from "../Paragraph";
import YouTube from "react-youtube";

const TwitchBrosCard = () => {
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
      <Image
        src="images/twitch_bros.png"
        alt="Twitch Bros Homepage"
        border="3px"
        maxW="45vh"
        maxH="45vh"
      />
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
          Twitch Bros
        </Box>
        <Divider />
        <Box align="left" lineHeight="tight" noOfLines={3} mt="15px">
          Sentiment analysis of topics modeled from real-time Twitch chats.
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
            <ModalHeader>Twitch Bros</ModalHeader>
            <ModalCloseButton />
            <Divider />
            <ModalBody mt="15px">Content to be updated soon</ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default TwitchBrosCard;

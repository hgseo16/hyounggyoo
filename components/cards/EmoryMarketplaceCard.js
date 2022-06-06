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

const EmoryMarketplaceCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      maxW="45vh"
      maxH="45vh"
      borderWidth="5px"
      borderRadius="lg"
      overflow="hidden"
      m="50px"
      onClick={onOpen}
      boxShadow="dark-lg"
    >
      <Image
        src="images/emory_marketplace.png"
        alt="Emory Marketplace Homepage"
        border="3px"
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
          Emory Marketplace
        </Box>
        <Divider />
        <Box align="left" lineHeight="tight" noOfLines={3} mt="15px">
          Website created using the MERN stack where Emory students can exchange
          textbooks.
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
            <ModalHeader>Emory Marketplace</ModalHeader>
            <ModalCloseButton />
            <Divider />
            <ModalBody mt="15px">
              <AspectRatio maxW="560px" ratio={1}>
                <YouTube videoId="k2TCLEPnoS0" />
              </AspectRatio>
              Content to be updated soon
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default EmoryMarketplaceCard;

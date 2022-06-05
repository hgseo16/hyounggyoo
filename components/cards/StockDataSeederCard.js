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

const StockDataSeederCard = () => {
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
      <Image src="images/data_seeder.jpg" alt="xingAPI codebase" border="3px" />
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
          Stock Data Seeder
        </Box>
        <Divider />
        <Box align="left" lineHeight="tight" noOfLines={3} mt="15px">
          Data seeder written in python which regularly updates a local mysql
          database with the price action of all the tickers from the
          KOSPI/KOSDAQ market.
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
            <ModalHeader>Stock Data Seeder</ModalHeader>
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

export default StockDataSeederCard;

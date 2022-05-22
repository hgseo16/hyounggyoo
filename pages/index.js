import {
  Avatar,
  Wrap,
  WrapItem,
  Container,
  Box,
  Divider,
  HStack,
  VStack,
  Stack,
  Heading,
  Button,
  UnorderedList,
  ListItem,
  Tag,
  TagLabel,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";

const Home = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="80vh">
      <NavBar />
      <Container maxW="60vh">
        {/* <Container maxW="60vh" bg="teal.400"> */}
        <Box direction="column" align="left" m="10vh auto">
          <HStack justify="space-between">
            <VStack mb={50} align="left">
              <Heading as="h1" size="xl" mb="10px">
                Hyoung Gyoo Seo
              </Heading>
              <Divider />
              <Box>B.S. in Computer Science</Box>
              <Box>& Minor in Economics</Box>
            </VStack>
            <Wrap>
              <WrapItem>
                <Avatar
                  size="2xl"
                  name="Hyoung Gyoo Seo"
                  src="/images/Kevin.jpg"
                  alt="Kevin's Photo"
                  showBorder="true"
                  borderColor="white"
                  borderWidth="3px"
                />
              </WrapItem>
            </Wrap>
          </HStack>
          <Heading size="md" variant="section-title">
            About Me
          </Heading>
          <Divider />
          <Paragraph>
            Hi! My name is Hyoung Gyoo Seo. I also go by Kevin for other
            people's convenience. I am currently studying towards my BS in
            Computer Science at Emory University. I genuinely enjoy the problem
            solving aspects of coding and especially love to code websites and
            anything related to the stock market. This website was made using
            Next.js and Chakra UI. I hope you enjoy!
          </Paragraph>
          <Heading size="md" variant="section-title">
            Education
          </Heading>
          <Divider />
          <UnorderedList mt="15px" mb="50px">
            <ListItem mb="15px">
              <strong>Expected Graduation 2023:</strong> B.S. in Computer
              Science & Minor in Economics at Emory University
            </ListItem>
            <ListItem mb="15px">
              <strong>2019:</strong> Codestates (coding bootcamp)
            </ListItem>
          </UnorderedList>
          <Heading size="md" variant="section-title">
            Work Experience
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>2020:</strong> Collaborated with Seller Note Inc. to
              refactor their SaaS codebase from <strong>Javascript</strong> to{" "}
              <strong>Typescript.</strong> Wrote basic unit tests using{" "}
              <strong>Jest, React-Testing-Library</strong>
            </ListItem>
            <ListItem mb="15px">
              <strong>2018~2019:</strong> Military service at Republic of Korea
              Army
            </ListItem>
            <ListItem mb="15px">
              <strong>2015~2016: </strong> Worked as a part-time waiter at
              Tolive, an Italian cuisine
            </ListItem>
          </UnorderedList>
          <Heading size="md" variant="section-title">
            Technical Skills
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>Frontend:</strong>{" "}
              <HStack spacing={4} mt="15px">
                {[
                  "React",
                  "React-Redux",
                  "Next.js",
                  "Material UI",
                  "Bootstrap",
                  "Chakra UI",
                ].map((skills) => (
                  <Tag
                    size="lg"
                    key="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                  >
                    <TagLabel>{skills}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </ListItem>
            <ListItem mb="15px">
              <strong>Backend:</strong>
              <HStack spacing={4} mt="15px">
                {[
                  "Node.js",
                  "Express.js",
                  "Socket.IO",
                  "MongoDB",
                  "mySQL",
                  "Bootstrap",
                ].map((skills) => (
                  <Tag
                    size="lg"
                    key="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                  >
                    <TagLabel>{skills}</TagLabel>
                  </Tag>
                ))}
              </HStack>
              <HStack spacing={4} mt="15px">
                {["Material UI", "Chakra UI", "S3", "EC2", "RDS", "GCP"].map(
                  (skills) => (
                    <Tag
                      size="lg"
                      key="lg"
                      borderRadius="full"
                      variant="solid"
                      colorScheme="blue"
                    >
                      <TagLabel>{skills}</TagLabel>
                    </Tag>
                  )
                )}
              </HStack>
            </ListItem>
            <ListItem mb="15px">
              <strong>Languages:</strong>{" "}
              <HStack spacing={4} mt="15px">
                {["Javascript", "Java", "Python", "Dart"].map((skills) => (
                  <Tag
                    size="lg"
                    key="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                  >
                    <TagLabel>{skills}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </ListItem>
          </UnorderedList>
          <Heading size="md" variant="section-title">
            Awards
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>2019.11:</strong> K-Startup Preliminary Startup League -
              Small and Medium Venture Business Minister Award
            </ListItem>{" "}
            <ListItem mb="15px">
              <strong>2019.10:</strong> Pocheon City Certifcate of Commendation
            </ListItem>
            <ListItem mb="15px">
              <strong>2019.09:</strong> Ministry of Defense Startup League -
              Army Chief of Staff Award (Excellence Award)
            </ListItem>
            <ListItem mb="15px">
              <strong>2019.07:</strong> Army Startup Contest - Army Chief of
              Staff Award Award (Excellence Award)
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;

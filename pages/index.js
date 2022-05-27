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
  Flex,
  Heading,
  Button,
  ButtonGroup,
  UnorderedList,
  ListItem,
  Tag,
  Text,
  Link,
  SimpleGrid,
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
        {/* <Containr maxW="60vh" bg="teal.400"> */}
        <Box direction="column" align="left" mt="70px">
          <HStack justify="space-between">
            <VStack mb={50} align="left">
              <Heading as="h1" size="xl" mb="10px">
                Kevin Seo
              </Heading>
              <Divider />
              <Box>
                <strong>B.S. </strong>in
                <strong> Computer Science</strong>
                <strong> & Minor </strong>in
                <strong> Economics </strong>
              </Box>
              <Box>
                <strong>@ Emory University</strong>
              </Box>
              <Box>
                <strong>
                  Email:{" "}
                  <Text color="blue.500" as="u">
                    seohyounggyoo@gmail.com
                  </Text>
                </strong>
              </Box>
            </VStack>
            {/* </WrapItem> */}
            {/* <WrapItem right="20px"> */}
            <Avatar
              size="2xl"
              name="Hyoung Gyoo Seo"
              src="/images/Kevin.jpg"
              alt="Kevin's Photo"
              showBorder="true"
              borderColor="white"
              borderWidth="4px"
            />
            {/* </WrapItem> */}
            {/* </Wrap> */}
          </HStack>
          <Heading size="md" variant="section-title">
            About Me
          </Heading>
          <Divider />
          <Paragraph>
            Hi! My name is <strong>Hyoung Gyoo Seo.</strong> I also go by{" "}
            <strong>Kevin.</strong> I am currently a junior at Emory University
            studying towards BS in Computer Science. I genuinely enjoy the
            <strong> problem solving</strong> aspects of coding and especially
            love to code <strong> React websites </strong> and anything related
            to the <strong>stock market.</strong> This website was made using{" "}
            <strong>Next.js</strong> and <strong>Chakra UI.</strong> I hope you
            enjoy!
          </Paragraph>
          <Link href="/projects">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              py={12}
              bgPosition="center"
              mb={2}
            >
              <Button colorScheme="blue">See my projects!</Button>
            </Box>
          </Link>
          <Heading size="md" variant="section-title">
            Education
          </Heading>
          <Divider />
          <UnorderedList mt="15px" mb="50px">
            <ListItem mb="15px">
              <strong>Expected graduation 2023:</strong> B.S. in Computer
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
              <strong>Frontend:</strong>
              <Box mt="15px">
                {/* <HStack spacing={4} mt="15px"> */}
                {[
                  "React",
                  "React-Redux",
                  "Next.js",
                  "Typescript",
                  "Material UI",
                  "Bootstrap",
                  "Chakra UI",
                  "Flutter",
                ].map((skills) => (
                  <Tag
                    size="lg"
                    key="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                    m="3px"
                  >
                    <TagLabel>{skills}</TagLabel>
                  </Tag>
                ))}
              </Box>
            </ListItem>
            <ListItem mb="15px">
              <strong>Backend:</strong>
              <Box mt="15px">
                {[
                  "Node.js",
                  "Express.js",
                  "Socket.IO",
                  "MongoDB",
                  "mySQL",
                  "PostgreSQL",
                  "S3",
                  "EC2",
                  "RDS",
                  "GCP",
                ].map((skills) => (
                  <Tag
                    size="lg"
                    key="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                    m="3px"
                  >
                    <TagLabel>{skills}</TagLabel>
                  </Tag>
                ))}
              </Box>
            </ListItem>
            <ListItem mb="15px">
              <strong>Languages:</strong>{" "}
              <Box mt="15px">
                {["Javascript", "Java", "Python", "Dart"].map((skills) => (
                  <Tag
                    size="lg"
                    key="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                    m="3px"
                  >
                    <TagLabel>{skills}</TagLabel>
                  </Tag>
                ))}
              </Box>
            </ListItem>
          </UnorderedList>
          <Heading size="md" variant="section-title">
            Awards
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>2019.11:</strong> K-Startup Preliminary Startup League -
              Small and Medium Venture Business Minister Award PUT ARTICLE LINKS
            </ListItem>
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
      <Divider />
    </Container>
  );
};

export default Home;

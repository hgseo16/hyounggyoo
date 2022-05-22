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
import NavBar from "../../kr_components/NavBar";
import Paragraph from "../../components/Paragraph";

const Home = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="80vh">
      <NavBar />
      <Container maxW="60vh">
        {/* <Container maxW="60vh" bg="teal.400"> */}
        <Box direction="column" align="left" mt="70px" mb="10vh">
          <HStack justify="space-between">
            <VStack mb={50} align="left">
              <Heading as="h1" size="xl" mb="10px">
                서형규
              </Heading>
              <Divider />
              <strong>
                <Box>에모리 대학교 컴퓨터공학 전공 & 경제학 부전공</Box>
              </strong>
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
            소개
          </Heading>
          <Divider />
          <Paragraph>
            안녕하세요, 제 개인 웹사이트에 오신걸 환영합니다. 저는 현재 에모리
            대학교에서 컴퓨터공학을 공부하고 있는 서형규라고 합니다. 저는
            코딩할때 필연적으로 마주치는 기술적 난관들에 도전하는 것을 즐기며
            <strong>리액트 (React) 웹사이트나, 주식 시장</strong> 관련된 코딩
            프로젝트를 특히나 좋아합니다. 이 웹사이트는 <strong>Next.js</strong>
            와 <strong>Chakra UI</strong>를 이용해 만들었습니다. 현재 사이트는
            꾸준히 업데이트 중이니 오류나 미흡한 부분이 있을시 양해
            부탁드겠습니다.
          </Paragraph>
          <Heading size="md" variant="section-title">
            학력 & 관련 교육
          </Heading>
          <Divider />
          <UnorderedList mt="15px" mb="50px">
            <ListItem mb="15px">
              <strong>2016~2022 (재학):</strong> Emory University 컴퓨터공학
              전공 & 경제학 부전공
            </ListItem>
            <ListItem mb="15px">
              <strong>2019:</strong> Codestates 코딩 부트캠프 17기 수료
            </ListItem>
          </UnorderedList>
          <Heading size="md" variant="section-title">
            경력
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>2020:</strong> (주)셀러노트와 협업해 Ship-da라는 SaaS
              코드베이스를 <strong>Javascript</strong> 에서
              <strong>Typescript</strong>로 변환.{" "}
              <strong>Jest, React-Testing-Library</strong>를 이용한 유닛테스트
              코드 작성.
            </ListItem>
            <ListItem mb="15px">
              <strong>2018~2019:</strong> 대한민국 육군 병장 전역
            </ListItem>
            <ListItem mb="15px">
              <strong>2015~2016: </strong> Tolive에서 웨이터로 아르바이트
            </ListItem>
          </UnorderedList>
          <Heading size="md" variant="section-title">
            기술
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>프런트엔드:</strong>
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
              <strong>백엔드:</strong>
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
              <strong>언어:</strong>{" "}
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
            수상
          </Heading>
          <Divider />
          <UnorderedList mt="20px" mb="50px">
            <ListItem mb="15px">
              <strong>2019.11:</strong> 도전! K-스타트업 예비창업리그
              중소벤처기업부장관상
            </ListItem>
            <ListItem mb="15px">
              <strong>2019.10:</strong> 포천시 표창장
            </ListItem>
            <ListItem mb="15px">
              <strong>2019.09:</strong> 국방창업리그 육군참모총장상 (우수상)
            </ListItem>
            <ListItem mb="15px">
              <strong>2019.07:</strong> 육군창업경진대회 육군참모총장상
              (최우수상)
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;

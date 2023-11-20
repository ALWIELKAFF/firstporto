import {
  Flex,
  Text,
  Box,
  Heading,
  Center,
  Card,
  CardHeader,
  CardBody,
  Image,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import foto from "./assets/titt.jpg";

function App() {
  return (
    <Flex
      backgroundImage={`url(${foto})`}
      minHeight="100vh"
      width="full"
      bgPosition="center"
      bgSize="cover"
      justify="start"
      direction="column"
      background
      bgAttachment="fixed"
    >
      <Box color="white" display="flex">
        <Link href="#about" paddingRight="40px">
          About Me
        </Link>

        <Link href="#myskill">My Skill</Link>
      </Box>
      <Flex
        align="center"
        justify="center"
        direction="column"
        height="100vh"
        scrollBehavior="smooth"
      >
        <Heading
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
          bgClip="text"
        >
          {" "}
          Hello Buddy!!! Welcome To My Site!!!
        </Heading>
        <Text bgGradient="linear(to-tr, teal.300, yellow.400)" bgClip="text">
          I'am a Fabulous And Attractive Web Developer
        </Text>
        <Flex
          align="center"
          justify="center"
          direction="row"
          padding="1rem"
          gap="3rem"
        >
          <Image
            boxSize="380px"
            objectFit="cover"
            src="/1700483744988.jpg"
            rounded="2xl"
          />

          <Card
            maxWidth="512px"
            bgGradient="linear(to-t, gray.300, yellow.400, pink.200)"
            id="about"
            scrollBehavior="smooth"
          >
            <CardHeader>
              <Heading
                size="md"
                textAlign="center"
                bgGradient="linear(to-r, green.200, pink.500)"
                padding="1rem"
                rounded="xl"
                fontSize="3xl"
              >
                {" "}
                😋😋😋 About Me 😋😋😋{" "}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                bgGradient="linear(to-b, pink.700, gray.700, purple.800)"
                bgClip="text"
                fontSize="xl"
              >
                Salam! Saya ALWI, seorang pengembang perangkat lunak dengan
                latar belakang pendidikan dalam Web Developer dari PURWADHIKA
                Batam. Sejak Belajar, saya telah mempelajari berbagai topik
                pengembangan perangkat lunak di PURWADHIKA, mengembangkan
                proyek-proyek secara mandiri dengan fokus utama pada teknologi
                seperti React dan Node.js.
              </Text>
            </CardBody>
          </Card>
          <Card
            maxWidth="512px"
            bgGradient="linear(to-t, gray.300, yellow.400, pink.200)"
            padding="1rem"
          >
            <CardHeader
              bgGradient="linear(to-r, green.200, pink.500)"
              padding="1rem"
              rounded="xl"
            >
              <Heading
                size="md"
                textAlign="center"
                color="red.700"
                fontStyle="italic"
              >
                Details
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontWeight="bold" as="u">
                Name :
              </Text>
              <Text>ALWI</Text>
              <Text fontWeight="bold">Date Birth :</Text>
              <Text>05/Dec/1996</Text>
              <Text fontWeight="bold">Address :</Text>
              <Text>Condet Jakarta Timur</Text>
              <Text fontWeight="bold">Contact me on :</Text>
              <Text>📷 @mynameiswe </Text>
              <Text>📧 mynamealwikaff@gmail.com </Text>
              <Text>📞 +62-812-8084-6792 </Text>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
      <Flex
        bgColor="blackAlpha.600"
        minHeight="100vh"
        justify="center"
        align="center"
        direction="column"
        padding="3rem"
        gap="5rem"
        id="myskill"
      >
        <Heading
          bgGradient="linear(to-b, gray.300, blue.400, pink.200)"
          size="3xl"
          bgClip="text"
        >
          My Skills
        </Heading>
        <SimpleGrid columns="4" spacing="150px">
          <Image boxSize="128px" objectFit="cover" src="/a.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/b.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/c.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/d.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/e.webp" rounded="xl" />

          <Image boxSize="128px" objectFit="cover" src="/g.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/h.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/i.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/j.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/k.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/l.png" rounded="xl" />
          <Image boxSize="128px" objectFit="cover" src="/m.png" rounded="xl" />
        </SimpleGrid>
      </Flex>
      <Flex
        height="20px"
        bgColor="blue.800"
        justifyContent="center"
        align="center"
        textColor="gray.200"
        padding="12px"
      >
        {" "}
        <Text> © ALWI 2023 </Text>
      </Flex>
    </Flex>
  );
}

export default App;

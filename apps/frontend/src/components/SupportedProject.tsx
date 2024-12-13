import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import CleanifyLogo from "../assets/cleanify.png";
import MugshotLogo from "../assets/mugshot.png";
import EVEarnLogo from "../assets/evearn.png";

export interface SupportedProjectProps {
  href: string;
  logo: string;
  name: string;
}

export const SupportedProject = () => {
  const projects = [
    { href: "https://cleanify.vet", logo: CleanifyLogo, name: "Cleanify" },
    { href: "https://mugshot.vet", logo: MugshotLogo, name: "Mugshot" },
    { href: "https://evearn.vet", logo: EVEarnLogo, name: "EVEarn" },
  ];

  return (
    <Card justifyContent={"center"} alignItems={"center"}>
      <CardHeader>
        <Heading size={"md"}>Supported by</Heading>
      </CardHeader>

      <CardBody>
        <HStack spacing={8}>
          {projects.map((project) => (
            <SupportedProjectItem key={project.name} {...project} />
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

const SupportedProjectItem = ({ href, logo, name }: SupportedProjectProps) => {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Link href={href} isExternal>
        <Image src={logo} alt={`${name} logo`} w={"80px"} rounded="full" />
      </Link>
      <Text>{name}</Text>
    </Box>
  );
};

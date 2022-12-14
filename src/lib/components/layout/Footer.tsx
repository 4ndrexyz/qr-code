import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" alignSelf="flex-end">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://codenime.xyz" isExternal fontWeight="semibold">
          codenime
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;

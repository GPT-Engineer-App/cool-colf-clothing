import React from "react";
import { Box, Flex, Text, Image, Button, Heading, Container, Stack, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" mb={4} textAlign="center">
        Golf Clothing Store
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} maxW={"320px"} w={"full"} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} rounded={"lg"} p={6} textAlign={"center"}>
            <Image h={"240px"} w={"full"} src={product.image} alt={"product image"} mb={4} rounded={"lg"} />
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {product.name}
            </Text>
            <Text fontWeight={800} fontSize={"xl"}>
              ${product.price}
            </Text>
            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              leftIcon={<FaShoppingCart />}
            >
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const products = [
  {
    id: 1,
    name: "Golf Polo Shirt",
    price: "39.99",
    image: 'https://images.unsplash.com/photo-1692195400719-81a66b4fde89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xmJTIwcG9sbyUyMHNoaXJ0fGVufDB8fHx8MTcwOTQ3ODgyNHww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Golf Trousers",
    price: "89.99",
    image: 'https://images.unsplash.com/photo-1600609293139-ea525a3edeec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xmJTIwdHJvdXNlcnN8ZW58MHx8fHwxNzA5NDc4ODI0fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Golf Cap",
    price: "24.99",
    image: 'https://images.unsplash.com/photo-1591491640784-3232eb748d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY2FwfGVufDB8fHx8MTcwOTQ3ODgyNXww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // Add more products as needed
];

export default Index;

import Main from "../../components/expenseTracker/main";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import { Box, Container, Flex } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Container bg={"#f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
        <Flex height={"full"}>
          <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
            <Main />
          </Box>
        </Flex>
      </Container>
      <br/><br/>
      <Footer />
    </>
  );
};

export default HomeScreen;

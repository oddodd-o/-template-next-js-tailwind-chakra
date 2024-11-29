import { extendTheme } from "@chakra-ui/react";
import { Container } from "./components/container";
import { Button } from "./components/button";
import { Input } from "./components/input";

const theme = extendTheme({
  components: {
    Container,
    Button,
    Input
  }
})

export default theme;
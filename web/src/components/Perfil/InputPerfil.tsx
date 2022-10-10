import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import perfil from "../../assets/img/perfil.png";
import candado from "../../assets/img/candado.svg";
import { wrap } from "popmotion";
import { Link } from "react-router-dom";

function InputPerfil() {
  return (
    <Box
      display={"flex"}
      paddingX={[4, 4, 10]}
      flexDirection="column"
      w={["full"]}
    >
      <Box marginTop={["15px", "20px"]}>
        <Text
          fontWeight="bold"
          fontSize={["x-large", "x-large", "xx-large"]}
          borderBottom="1px solid #B5B5B5"
        >
          Detalles del perfil
        </Text>
      </Box>

      <Box display={"flex"} flexDirection={"row"} flexWrap="wrap">
        <Input
          variant="filled"
          placeholder="Nombres"
          marginY={[3, 3, 5]}
          marginX={[4, 4, 5]}
          minW="300px"
          maxW="400px"
          focusBorderColor="#4DDA73"
          colorScheme={"#EBEEF1"}
          bg="#EBEEF1"
        />
        <Input
          variant="filled"
          placeholder="Apellidos"
          marginY={[1, 1, 5]}
          marginX={[4, 4, 5]}
          minW="300px"
          maxW="400px"
          focusBorderColor="#4DDA73"
          colorScheme={"#EBEEF1"}
          bg="#EBEEF1"
        />
      </Box>

      <Box>
        <Text
          fontWeight="bold"
          fontSize={["x-large", "x-large", "xx-large"]}
          borderBottom="1px solid #B5B5B5"
        >
          Información de contacto
        </Text>
      </Box>

      <Box display={"flex"} paddingBottom="25px" flexWrap="wrap">
        <Input
          variant="filled"
          placeholder="Email"
          marginY={[3, 3, 5]}
          marginX={[4, 4, 5]}
          minW="300px"
          maxW="400px"
          focusBorderColor="#4DDA73"
          colorScheme={"#EBEEF1"}
          bg="#EBEEF1"
        />
        <Input
          variant="filled"
          placeholder="Télefono móvil"
          marginY={[1, 1, 5]}
          marginX={[4, 4, 5]}
          minW="300px"
          maxW="400px"
          focusBorderColor="#4DDA73"
          colorScheme={"#EBEEF1"}
          bg="#EBEEF1"
        />
      </Box>

      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent={"center"}
        marginBottom={["20px"]}
      >
        <Button bg="#4DDA73" color="white" w={"120px"} borderRadius="15px">
          Guardar
        </Button>
      </Box>
    </Box>
  );
}

export default InputPerfil;

import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export default ({ navigation }) => (
  <>
    <Container>
      <Text>Movies</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Go to detail</Text>
      </TouchableOpacity>
    </Container>
  </>
);

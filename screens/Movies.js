import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAxios from "../useAxios";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ navigation }) => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });

  return (
    <>
      <Container>
        <Text>{data && data.status}</Text>
        <Text>{loading && "Loading"}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <Text>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={refetch}>
          <Text>Refetch</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

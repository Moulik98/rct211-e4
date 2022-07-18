import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  UpdatedAPI } from "../Redux/action";
import { useDispatch } from "react-redux";

export const Editpage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id} = useParams();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target[0].value;
    const population = e.target[1].value;
    if (city && population) {
      dispatch(UpdatedAPI({ city,id,population }));
        navigate("/");
    }
  };
   
  return (
   <form onSubmit={handleSubmit}>
     <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" type="text" />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" type="text" />
      </Box>
      <Button data-cy="update-button">Update</Button>
    </Box>
   </form>
  );
};

export default Editpage;
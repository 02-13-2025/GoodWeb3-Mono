import React, { FC } from "react";
import BasePressable, { BasePressableProps } from "./BasePressable";
import { Box, ArrowForwardIcon } from "native-base";

const ArrowButton: FC<BasePressableProps> = ({ text, onPress, ...props }: BasePressableProps) => {
  return (
    <BasePressable text={text} onPress={onPress} variant="arrowIcon" {...props}>
      <Box w="40px" h="40px" bg="gdPrimary" borderRadius="20px" justifyContent="center" alignItems="center">
        <ArrowForwardIcon color="white" />
      </Box>
    </BasePressable>
  );
};

export default ArrowButton;

import React, { useEffect, useState } from "react";
import { Box, Wrap, WrapItem, Flex, Spacer } from "@chakra-ui/react";
import TourCard from "../TourCard/TourCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTours,
  selectIsLoadingTours,
  selectHasErrorTours,
  loadTours,
} from "../../features/tours/toursSlice";

function Tours() {
  const dispatch = useDispatch();
  const toursData = useSelector(selectTours);

  useEffect(() => {
    dispatch(loadTours());
  }, []);

  return (
    <Box bg="" py={5}>
      <Box display="flex" flexWrap="wrap" justifyContent={"space-around"}>
        {toursData?.map(
          (tour: {
            _id: React.Key | null | undefined;
            country: string;
            title: string;
            personPriceUsd: number;
            mainImages: string[];
          }) => (
            <TourCard
              key={tour._id}
              id={tour._id}
              country={tour.country}
              title={tour.title}
              personPriceUsd={tour.personPriceUsd}
              mainImages={tour.mainImages}
            />
          )
        )}
      </Box>
    </Box>
  );
}

export default Tours;

import { SwiperSlide } from "swiper/react";
import AutoSwiper from "./AutoSwiper";
import MediaItem from "./MediaItem";
import { Box } from "@mui/material"

const RecommendSlide = ({ medias, mediaType }) => {
  return (
    <AutoSwiper>
      {medias.map((media, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              marginLeft: { xs: "4px", md: "6px" },
              marginRight: { xs: "4px", md: "6px" },
            }}
          >
            <MediaItem media={media} mediaType={mediaType} />
          </Box>
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default RecommendSlide;

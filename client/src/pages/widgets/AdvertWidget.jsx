import { Typography, useTheme } from "@mui/material";
import FlexBetween from "component/FlexBetween";
import WidgetWrapper from "component/WidgetWrapper";
import { BASE_URL } from "constant";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`https://maestrosat.co.za/wp-content/uploads/2020/11/laptop2.jpg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Hp Laptop</Typography>
        <Typography color={medium}>hp.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Unleash your potential with a powerful HP laptop – your pathway to productivity, creativity, and endless possibilities.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

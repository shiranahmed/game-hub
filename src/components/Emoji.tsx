import bullsEys from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommeneded", boxSize: "25px" },
    5: { src: bullsEys, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]}></Image>;
};

export default Emoji;
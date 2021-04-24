import img_background from "../../../resources/images/background.png";
import img_boat from "../../../resources/images/boat.png";
import img_bubble from "../../../resources/images/bubble.png";
import img_diver from "../../../resources/images/diver.png";
import img_diverLeft from "../../../resources/images/diver_left.png";
import img_diverRight from "../../../resources/images/diver_right.png";
import img_harpoon from "../../../resources/images/harpoon.png";
import img_jellyfish from "../../../resources/images/jellyfish.png";
import img_jellyfish1 from "../../../resources/images/jellyfish_1.png";
import img_jellyfish2 from "../../../resources/images/jellyfish_2.png";
import img_puffer0 from "../../../resources/images/puffer0.png";
import img_puffer1 from "../../../resources/images/puffer1.png";
import img_puffer2 from "../../../resources/images/puffer2.png";
import img_puffer3 from "../../../resources/images/puffer3.png";
import img_puffer4 from "../../../resources/images/puffer4.png";

// Returns the list of all
export function getImagesToPreload(): Set<string> {
  // use a set to make sure we don't include stuff multiple times
  const urls = new Set([
    img_background,
    img_boat,
    img_bubble,
    img_diver,
    img_diverLeft,
    img_diverRight,
    img_harpoon,
    img_jellyfish,
    img_jellyfish1,
    img_jellyfish2,
    img_puffer0,
    img_puffer1,
    img_puffer2,
    img_puffer3,
    img_puffer4,
  ]);

  // Just in case this sneaks in there somehow, make sure we don't load it
  urls.delete(undefined!);

  return urls;
}

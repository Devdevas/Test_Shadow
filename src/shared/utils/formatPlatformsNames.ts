import { PlatformDetail } from "../../redux/slices/platforms/platformsTypes";

const platformAbbreviations: any = {
   "PlayStation 5": "PS5",
   "PlayStation 4": "PS4",
   "PlayStation 3": "PS3",
   "Xbox Series S/X": "Xbox SX",
   "Nintendo Switch": "NS",
};

//Replace long platform names with abbreviations, then concatenate them
export const formatPlatformsNames = (platforms: PlatformDetail[]) => {
   return platforms?.map((p) => platformAbbreviations[p.platform.name] || p.platform.name).join(" / ");
};

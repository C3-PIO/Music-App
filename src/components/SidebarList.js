import { AiOutlineHome } from "react-icons/ai"
import { TbMicrophone2 } from "react-icons/tb"
import { BiAlbum, BiPodcast } from "react-icons/bi"
import { RiPlayListLine } from "react-icons/ri"
import { VscBook } from "react-icons/vsc"

// Information used for the sidebar
const SidebarList = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome />
  },
  {
    name: "Artists",
    path: "/artists",
    icon: <TbMicrophone2 />
  },
  {
    name: "Albums",
    path: "/albums",
    icon: <BiAlbum />
  },
  {
    name: "Playlists",
    path: "/playlists",
    icon: <RiPlayListLine />
  },
  {
    name: "Podcasts",
    path: "/podcasts",
    icon: <BiPodcast />
  },
  {
    name: "Audiobook",
    path: "/audiobooks",
    icon: <VscBook />
  },
];

export default SidebarList;

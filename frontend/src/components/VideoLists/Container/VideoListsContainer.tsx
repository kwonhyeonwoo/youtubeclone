import { useDispatch, useSelector } from "react-redux"
import { Video } from "../../../config/interface"
import VideoLists from "../VideoLists"
import { useEffect } from "react"
type Props = {

}
const VideoListsContainer = ({ }: Props) => {

    return (
        <VideoLists />
    )
}

export default VideoListsContainer
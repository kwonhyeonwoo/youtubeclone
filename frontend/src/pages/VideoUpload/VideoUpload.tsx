import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import "./css/index.css";

type Props = {

}
const VideoUpload = ({

}: Props) => {
    return (
        <main className="video-upload-page">
            <section className="video-upload-section">
                <div className="video-upload-wrapper">
                    <div className="video-detail-wrapper">
                        <h3 className="video-detail-title">세부정보</h3>
                        <input
                            className="video-title"
                            type="text"
                            name="title"
                            placeholder='제목 (필수항목)'
                            minLength={5}
                            max={15}
                            required />

                        <textarea
                            className="video-description"
                            name="description"
                            minLength={10}
                            maxLength={200}
                            placeholder="시청자에게 동영상에 대해 설명해주세요."
                            required
                        />
                        <input type="text" name="hashtags" placeholder="해쉬태그" className="video-hashtags" />
                    </div>
                    <div className="video-choice">
                        <div className="video">
                            <label htmlFor="video" className="upload-label">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                            </label>
                        </div>
                        <input type="file" id="video" name="videoUrl" />
                        <button className="upload-button">비디오 업로드</button>

                    </div>

                </div>
            </section>
        </main>
    )
}

export default VideoUpload;
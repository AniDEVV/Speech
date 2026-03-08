type Props = {
    text: string;

};

function CaptionBox({text} : Props){
    return (
        <div className="caption-box">
            <h2>{text || "Waiting for speech...."}</h2>
        </div>
    )
}
export default CaptionBox;
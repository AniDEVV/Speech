import { startSpeech } from "../services/speechService";


type Props = {
  onCaption:(text:string)=>void;
  inputLang:string;
  outputLang:string;
}

function Controls({onCaption,inputLang,outputLang}:Props){

  const handleStart = () => {

    startSpeech(onCaption,inputLang,outputLang);

  };

  return(

    <div>

      <button onClick={handleStart}>
        Start
      </button>

    </div>

  );
}

export default Controls;
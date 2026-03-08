import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import { translate } from "./translatorApi";

export function startSpeech(
  setText:(text:string)=>void,
  inputLang:string,
  outputLang:string
){

  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
  import.meta.env.VITE_SPEECH_KEY,
  import.meta.env.VITE_SPEECH_REGION
  );

  speechConfig.speechRecognitionLanguage = inputLang;

  const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

  const recognizer = new SpeechSDK.SpeechRecognizer(
    speechConfig,
    audioConfig
  );

  recognizer.recognized = async (_,e)=>{

    const original = e.result.text;

    if(!original){
      return;
    }

    const translated = await translate(original,outputLang);

    setText(translated);

  };

  recognizer.startContinuousRecognitionAsync();
}
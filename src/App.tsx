import { useState } from "react";
import CaptionBox from "./components/CaptionBox";
import Controls from "./components/Controls";
import History from "./components/History";

function App() {

  const [inputLang, setInputLang] = useState("en-US");
  const [outputLang, setOutputLang] = useState("sq");

  const [text, setText] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleCaption = (newText: string) => {

    setText(newText);

    setHistory(prev => {
      const updated = [newText, ...prev];
      return updated.slice(0, 10);
    });

  };

  return (

    <div className="container">

      <h1>Live Caption Accessibility</h1>

      <div className="language-select">

        <h3>Input Language</h3>
        <select
          value={inputLang}
          onChange={(e) => setInputLang(e.target.value)}
        >
          <option value="en-US">English</option>
          <option value="sq-AL">Albanian</option>
          <option value="mk-MK">Macedonian</option>
        </select>

        <h3>Output Language</h3>
        <select
          value={outputLang}
          onChange={(e) => setOutputLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="sq">Albanian</option>
          <option value="mk">Macedonian</option>
        </select>

      </div>

      <Controls
        onCaption={handleCaption}
        inputLang={inputLang}
        outputLang={outputLang}
      />

      <CaptionBox text={text} />

      <History history={history} />

    </div>
  );
}

export default App;
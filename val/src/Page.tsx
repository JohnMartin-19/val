import React,{ useState } from "react";
import './page.css'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure,Roselyn?",
      "Really sure?",
      "Surely not?",
      "I'm gonna cry...",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine">
      {yesPressed ? (
        <div>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="img" />
        <div className="text-4xl font-bold my-4">Okay Pretty Girl (: !!!</div>
        </div>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/thumbnail/dozen-roses-for-beautiful-woman-4dv55nx9ji7p3e86.webp" alt="img" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className='yes'
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" no"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
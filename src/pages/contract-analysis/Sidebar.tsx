import React,  { useState, useEffect }  from "react";
import type { Highlight } from "react-pdf-highlighter-extended";
import "./style/Sidebar.css";
import { CommentedHighlight } from "./types";
import { TypeAnimation } from 'react-type-animation';
import { set } from "lodash";

interface SidebarProps {
  highlights: Array<CommentedHighlight>;
  resetHighlights: () => void;
  toggleDocument: () => void;
}

const updateHash = (highlight: Highlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

interface WordStreamProps {
  text: string;
  speed?: number;
  onFinishFunction: () => void;
}

const WordStream = ({ text, speed = 150, onFinishFunction }: WordStreamProps) => {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordsArray = text.split(' ');
    const timer = setInterval(() => {
      if (index < wordsArray.length) {
        // @ts-ignore
        setWords(currentWords => [...currentWords, wordsArray[index]]);
        setIndex(index + 1);
      } else {
        clearInterval(timer);
        onFinishFunction()
      }
    }, speed);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [index, text, speed]);

  return (
    <div >
      {words.map((word, i) => (
        <span key={i} >{word} </span>
      ))}
    </div>
  );
};


interface chatProps {
  text: string;
  onFinishFunction: () => void;
}

const Sidebar = ({
  highlights,
  toggleDocument,
  resetHighlights,
}: SidebarProps) => {
  const [index, setIndex] = useState(0);

  
  const chat = (text: string, onFinishFunction: ()=>void) => {
    return (
      <div style={{"position":"relative",paddingRight:"20px", paddingLeft:"50px" }}>
      <div style={{position:"absolute", "top": "-25px", "left":"-20px"}}>
        <img src="output-onlinegiftools.gif" width="80"></img>
      </div>
      <div className="message_container">
      <WordStream text={text} onFinishFunction={onFinishFunction} />
      </div>
    </div>
    )
  }

  useEffect(() => {
    if (index==2 && highlights.length > 0) {
      updateHash(highlights[0]);
    }
  }, [highlights,index]);

  return (
    <div className="sidebar" style={{ width: "25vw", maxWidth: "500px" ,paddingBottom:"50px"}}>
      {/* Description section */}
      <div className="description" style={{ padding: "1rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>
          <img src="TaxRay logo.png" width="50px" /><span style={{marginLeft:"13px"}}>Contract Analysis</span>
        </h2>
      </div>
      {index==0 && chat("Indexing the content of the contract to classify Withholding case", () => setTimeout(() => setIndex(1), 4000))}
      {index>=1 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
        Indexing the content of the contract to classify Withholding case
        </div>
        </div>}
      {index==1 && chat("Conducting searches for relevant information related to the withholding case. This includes exploring if there any rights of copy for distribution, or preparing derivative programs which indicate a case of withholding tax.", () => setTimeout(() => setIndex(2), 1000))}
      {index>=2 && 
        <div className="container"style={{"padding": "15px"}}>
        <div className="message_container">

        Conducting searches for relevant information related to the withholding case. This includes exploring if there any rights of copy for distribution, or preparing derivative programs which indicate a case of withholding tax.</div>
        </div>}
      {index >= 2 && highlights && (
        <ul className="sidebar__highlights">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="sidebar__highlight"
              onClick={() => {
                updateHash(highlight);
              }}
            >
              <div>
                {/* Highlight comment and text */}
                <strong>{highlight.comment}</strong>
                {highlight.content.text && (
                  <blockquote style={{ marginTop: "0.5rem" }}>
                    {`${highlight.content.text.slice(0, 90).trim()}…`}
                  </blockquote>
                )}

                {/* Highlight image */}
                {highlight.content.image && (
                  <div
                    className="highlight__image__container"
                    style={{ marginTop: "0.5rem" }}
                  >
                    <img
                      src={highlight.content.image}
                      alt={"Screenshot"}
                      className="highlight__image"
                    />
                  </div>
                )}
              </div>

              {/* Highlight page number */}
              <div className="highlight__location">
                Page {highlight.position.boundingRect.pageNumber}
              </div>
            </li>
          ))}
        </ul>
      )}
      {index==2 && chat("Identifying if there isn't right to make copies for purpose of distribution to the public", () => setTimeout(() => setIndex(3), 2000))}
      {index>=3 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
        No mention of right to make copies for purpose of distribution to the public
        </div>
        </div>}
      {index==3 && chat("Identifying if there isn't right to prepare derivative computer programs from the program", () => setTimeout(() => setIndex(4), 2000))}
      {index>=4 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
        No mention of right to prepare derivative computer programs from the program
        </div>
        </div>}
      {index==4 && chat("Identifying if there isn't right to make public performance of the computer program", () => setTimeout(() => setIndex(5), 2000))}
      {index>=5 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
        No mention of right to make public performance of the computer program
        </div>
        </div>}
      {index==5 && chat("Identifying if there isn't right to publicly display the computer program", () => setTimeout(() => setIndex(6), 2000))}
      {index>=6 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
        No mention of right to publicly display the computer program
        </div>
        </div>}
        {index==6 && chat("Checking if there is a transfer of the benefits and burdens of ownership", () => setTimeout(() => setIndex(7), 2000))}
      {index>=7 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
        No mention of transfer of the benefits and burdens of ownership
        </div>
        </div>}
        {index==7 && chat("Mentioned, non exclusive, non transferable and during the Order Term", () => setTimeout(() => setIndex(8), 2000))}
      {index>=8 && 
        <div className="container"style={{"padding": "15px"}}>
        <div> <img src="tick.png" width="20px"></img></div>
        <div style={{"padding": "10px"}}>
       Mentioned, non exclusive, non transferable and during the Order Term
        </div>
        </div>}
      {index==8 && chat("Based on Sections 2.1 and 3.1 of the agreement and IRC, S.1.861-18(c)(2) I conclude that there is a lease of copyrighted article for a limited period with restrictions on sale to others. Therefore, it is a business income.", () => setTimeout(() => setIndex(9), 2000))}
      {index>=9 && 
        <div className="container"style={{"padding": "15px"}}>
        <div className="message_container">Based on Sections 2.1 and 3.1 of the agreement and IRC, S.1.861-18(c)(2) I conclude that there is a lease of copyrighted article for a limited period with restrictions on sale to others. Therefore, <b>it is a business income.</b></div>
        </div>}
{/* 
      <div style={{ padding: "0.5rem" }}>
        <button onClick={toggleDocument} className="sidebar__toggle">
          Toggle PDF document
        </button>
      </div>

      {highlights && highlights.length > 0 && (
        <div style={{ padding: "0.5rem" }}>
          <button onClick={resetHighlights} className="sidebar__reset">
            Reset highlights
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Sidebar;

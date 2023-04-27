import React from 'react';

function TextWithLineBreaks({ text }: { text: string }) {
  function convertNewlinesToBreaks(text: string) {
    return text.split('\n').map((line: string, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return <>{convertNewlinesToBreaks(text)}</>;
}

export default TextWithLineBreaks;
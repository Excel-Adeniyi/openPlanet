import { Splitteer } from '../../../../util/splitter/splitter';

interface PropTypes {
  splitKey: string;
  content: string;
}

export default function Splita({ splitKey, content }: PropTypes) {
  const props = {
    splitKey: splitKey,
    content: content,
  };
  const splittedArray: string[] = Splitteer(props);
  return (
    <div>
      {splittedArray &&
        splittedArray.map((content, index) => {
          return <div key={index}>{content}</div>;
        })}
    </div>
  );
}

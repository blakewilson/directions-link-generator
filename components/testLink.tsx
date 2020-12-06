import { FC } from "react";

const TestLink: FC = () => {
  return (
    <p className="helper-text">
      Test your link:{" "}
      <a target="_blank" href={gMapsUrl + encodeURI(address)}>
        Get Directions to {address}
      </a>
    </p>
  );
};

export default TestLink;

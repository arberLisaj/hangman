const HEAD = (
  <div
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "45px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: "-70px",
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: 0,
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangmanDrawingProps {
  numberOfGuesses: number;
}

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "180px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "330px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "310px", background: "black" }} />
    </div>
  );
}
export default HangmanDrawing;

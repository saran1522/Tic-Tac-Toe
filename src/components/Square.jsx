export default function Square(props) {
  return (
    <div className="square" onClick={props.handleValue}>
      {props.val === "" ? (
        ""
      ) : (
        <img
          src={
            props.val === "X"
              ? "https://img.icons8.com/?size=512&id=-ymAXN8gSjYa&format=png"
              : "https://img.icons8.com/?size=512&id=4Bi-XDTyecLZ&format=png"
          }
        />
      )}
    </div>
  );
}

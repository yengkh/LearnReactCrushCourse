const Pratice = () => {
  const name: string = "Chann Yeng";
  const x: number = 300;
  const y: number = 200;
  const arr: string[] = ["Dara", "Sok", "Pean", "Darong"];
  const isLogIn: boolean = false;

  // Style
  const sumStyel = {
    color: "red",
    fontSize: "34px",
  };

  // Return
  return (
    <div className="ml-10">
      <h1 className="text-center text-indigo-600 text-4xl">
        This is tsx practice
      </h1>
      <p>
        Hello <span className="text-blue-500 font-bold">{name}</span>
      </p>
      <p style={sumStyel}>
        Sum of {x} and {y} is {x + y}{" "}
      </p>
      <ol className="list-decimal ">
        {arr.map((value: string, index: number) => (
          <li key={index}>{value}</li>
        ))}
      </ol>

      <ul className="list-disc">
        {arr.map((value: string, index: number) => (
          <li key={index}> {value}</li>
        ))}
      </ul>

      {isLogIn ? <div>Hello user</div> : <div>Hello guest</div>}
      {isLogIn && <div>This is new login!</div>}
    </div>
  );
};

export default Pratice;

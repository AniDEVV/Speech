type Props = {
  history: string[];
};

function History({ history }: Props) {

  return (
    <div className="history">

      <h3>Recent Captions</h3>

      {history.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </div>
  );
}

export default History;
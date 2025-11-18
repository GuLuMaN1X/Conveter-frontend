export default function CurrencyExchange({ title }) {
  return (
    <div className="block_1">
      <div className="left_side_1">
        <p className="text_table">Avaible Currency</p>
        <table className="table_1">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Sign</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>US Dollar</td>
              <td>$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="right_side_1">
        <div className="top__side_1">
          <p className="text_table">Add New Currency</p>
        </div>
        <div className="center__side_1">
          <div className="code_input">
            <p>Code</p>
            <input type="text" placeholder="USD" />
          </div>
          <div className="code_input">
            <p>Name</p>
            <input type="text" placeholder="US Dollar" />
          </div>
          <div className="code_input">
            <p>Sign</p>
            <input type="text" placeholder="$" />
          </div>
        </div>
        <div className="bottom__side_1">
          <button>Add Currency</button>
        </div>
      </div>
    </div>
  );
}
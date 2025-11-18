import { useState } from 'react';

export default function CurrencyExchange() {
  const [currencies, setCurrencies] = useState([
    { id: 1, code: 'USD', name: 'US Dollar', sign: '$' }
  ]);
  const [newCurrency, setNewCurrency] = useState({
    code: '',
    name: '',
    sign: ''
  });

  const addCurrency = () => {
    const { code, name, sign } = newCurrency;

    if (!code.trim() || !name.trim() || !sign.trim()) {
      alert('Please fill all fields');
      return;
    }

    const newCurrencyItem = {
      id: currencies.length + 1,
      code: code.trim(),
      name: name.trim(),
      sign: sign.trim()
    };

    setCurrencies([...currencies, newCurrencyItem]);
    setNewCurrency({ code: '', name: '', sign: '' });
  };

  const editCurrency = (id) => {
    const currencyToEdit = currencies.find(currency => currency.id === id);
    if (currencyToEdit) {
      setNewCurrency({
        code: currencyToEdit.code,
        name: currencyToEdit.name,
        sign: currencyToEdit.sign
      });
      setCurrencies(currencies.filter(currency => currency.id !== id));
    }
  };

  const handleInputChange = (field, value) => {
    setNewCurrency(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addCurrency();
    }
  };

  return (
    <div className="container">
      <div className="block_1">
      <div className="left_side_1">
        <p className="text_table">Available Currency</p>
        <table className="table_1">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Sign</th>
              <th>Actions</th> {/* ← Важное изменение */}
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <tr key={currency.id}>
                <td>{currency.code}</td>
                <td>{currency.name}</td>
                <td>{currency.sign}</td>
                <td className="actionSide">
                  <button 
                    onClick={() => editCurrency(currency.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
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
            <input 
              type="text" 
              placeholder="USD" 
              value={newCurrency.code}
              onChange={(e) => handleInputChange('code', e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="code_input">
            <p>Name</p>
            <input 
              type="text" 
              placeholder="US Dollar" 
              value={newCurrency.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="code_input">
            <p>Sign</p>
            <input 
              type="text" 
              placeholder="$" 
              value={newCurrency.sign}
              onChange={(e) => handleInputChange('sign', e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <div className="bottom__side_1">
          <button onClick={addCurrency}>Add Currency</button>
        </div>
      </div>
    </div>
    </div>
  );
}
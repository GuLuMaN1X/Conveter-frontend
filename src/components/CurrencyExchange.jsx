export default function CurrencyExchange({ title }) {
  // Получаем элементы
const codeInput = document.querySelector('.code_input input[placeholder="USD"]');
const nameInput = document.querySelector('.code_input input[placeholder="US Dollar"]');
const signInput = document.querySelector('.code_input input[placeholder="$"]');
const addButton = document.querySelector('.bottom__side_1 button');
const tbody = document.querySelector('table tbody'); // или укажите конкретный селектор вашей таблицы

// Функция для добавления валюты в таблицу
function addCurrencyToTable() {
    const code = codeInput.value.trim();
    const name = nameInput.value.trim();
    const sign = signInput.value.trim();

    // Проверяем, что все поля заполнены
    if (!code || !name || !sign) {
        alert('Please fill all fields');
        return;
    }

    // Создаем новую строку таблицы
    const newRow = document.createElement('tr');
    
    // Создаем ячейки для кода, названия и символа
    const codeCell = document.createElement('td');
    codeCell.textContent = code;
    
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    
    const signCell = document.createElement('td');
    signCell.textContent = sign;

    // Добавляем ячейки в строку
    newRow.appendChild(codeCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(signCell);

    // Добавляем строку в tbody
    tbody.appendChild(newRow);

    // Очищаем поля ввода
    codeInput.value = '';
    nameInput.value = '';
    signInput.value = '';
}

// Добавляем обработчик события на кнопку
addButton.addEventListener('click', addCurrencyToTable);

// Также можно добавить обработчик на Enter в любом из input полей
[codeInput, nameInput, signInput].forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addCurrencyToTable();
        }
    });
});
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>USD</td>
              <td>US Dollar</td>
              <td>$</td>
            </tr> */}
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
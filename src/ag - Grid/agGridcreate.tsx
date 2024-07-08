import { createSignal, onCleanup } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './agGrid.css';

const App = () => {
  const [rowData, setRowData] = createSignal(
    JSON.parse(localStorage.getItem('userData')) || [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ]
  );

  const [newUser, setNewUser] = createSignal({ id: '', name: '', email: '' });

  const columnDefs = [
    { headerName: 'ID', field: 'id', editable: true },
    { headerName: 'Name', field: 'name', editable: true },
    { headerName: 'Email', field: 'email', editable: true },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRendererFramework: (params) => (
        <button onClick={() => deleteUser(params.data.id)}>Delete</button>
      )
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const addUser = () => {
    if (newUser().id && newUser().name && newUser().email) {
      const updatedData = [...rowData(), { id: Number(newUser().id), name: newUser().name, email: newUser().email }];
      setRowData(updatedData);
      localStorage.setItem('userData', JSON.stringify(updatedData));
      setNewUser({ id: '', name: '', email: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  const onCellValueChanged = (params) => {
    const updatedRowData = rowData().map(row =>
      row.id === params.data.id ? { ...row, ...params.data } : row
    );
    setRowData(updatedRowData);
    localStorage.setItem('userData', JSON.stringify(updatedRowData));
  };

  const deleteUser = (id) => {
    const updatedData = rowData().filter(user => user.id !== id);
    setRowData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  // Cleanup function to remove localStorage data when component unmounts
  onCleanup(() => {
    localStorage.removeItem('userData');
  });

  return (
    <div>
      <input name="id" placeholder="ID" value={newUser().id} onInput={handleChange} />
      <input name="name" placeholder="Name" value={newUser().name} onInput={handleChange} />
      <input name="email" placeholder="Email" value={newUser().email} onInput={handleChange} />
      <button onClick={addUser}>Add User</button>

      <div class="ag-theme-alpine" style={{ height: '400px', width: '600px' }}>
        <AgGridSolid
          rowData={rowData()}
          columnDefs={columnDefs}
          onCellValueChanged={onCellValueChanged}
        ></AgGridSolid>
      </div>
    </div>
  );
};

export default App;

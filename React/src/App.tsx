import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import GridOne from './GridOne.tsx';
import GridTwo from './GridTwo.tsx';

function App(): JSX.Element {
  return (
    <div className="main">
      <GridOne />
      <GridTwo />
    </div>
  );
}

export default App;

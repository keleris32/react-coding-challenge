import { Sidebar } from './components';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />

      {/* Main container */}
      <AppRoutes />
    </div>
  );
}

export default App;

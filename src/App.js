import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import MobileResponsiveDashboard from './components/MobileResponsiveDashboard';
import MainLayout from './components/MainLayout';

function App() {
  return (
<>

                <MobileResponsiveDashboard />
     
     <div className='res-hidden'>
<MainLayout />
</div>
</>

  );
}

export default App;

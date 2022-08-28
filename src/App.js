import './App.css';
import Header from './components/header.jsx';
import Hooder from './components/hooder.jsx';
import Top from './components/top.jsx';
import Activities from './components/activities.jsx';
import OrganizationChart from './components/organization_chart.jsx';
import Menbers from './components/menbers.jsx';
import Groups from './components/paticipatingGroups';

function App() {
  return (
    <div className="page">
    <Header/>
    <Top/>
    <Activities/>
    <OrganizationChart/>
    <Menbers/>
    <Groups/>
    <Hooder/>
    </div>
  );
}

export default App;

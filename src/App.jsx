import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Groups from './pages/Groups';
import { GroupProvider } from './pages/GroupProvider';
import ListGroups from './pages/ListGroups';
import GenerateIdentity from './pages/GenerateIdentity';

function App() {
  

  return (
    <>
      <GroupProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/identity" element={<GenerateIdentity />} />
            <Route path="/all-groups" element={<ListGroups />} />
          </Routes>
        </Router>
      </GroupProvider>
    </>
  );
}

export default App

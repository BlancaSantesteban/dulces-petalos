import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Views/Home';
import { Detail } from './Views/Detail';
import { Container } from './Components/Container';
import { Header } from './Components/Header';

export const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Header />
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

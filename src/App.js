import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';

import Notes from './Components/Notes';
import Tasks from './Components/Tasks';

import { NotesProvider } from './Context/Notecontext';
import {TaskProvider} from './Context/Taskcontext'
import { SelectedTaskProvider } from "./Context/SelectedTaskContext";

const AppRouter = () => {
  return (
    <Router>
       <NotesProvider>
       <SelectedTaskProvider>
        <TaskProvider>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/archive" element={<Home />} />
            <Route path="/bin" element={<Home />} />
          </Routes>
        </div>
      </div>
      </TaskProvider>
      </SelectedTaskProvider>
      </NotesProvider>
    </Router>
  );
};

export default AppRouter;

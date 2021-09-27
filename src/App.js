import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreeProduit from "./pages/CreeProduit";
import { useState } from "react";
import Modal from "./components/Modal";

function Btn() {
  return (
    <div>
      <Link to="/page2">
        <button>click me!</button>
      </Link>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/page1">
          <Btn />
        </Route>
        <Route path="/page2"></Route>
        <Route path="/">
          <div className="bg-gray-600 fixed inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Nouveau produit ?
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <CreeProduit sup={() => setIsOpen(false)} />
            </Modal>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

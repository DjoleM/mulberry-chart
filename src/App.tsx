import React from 'react';
import './App.css';
import { MulberryTree, MulberryTreeType } from "./components/mulberryTree"

function App() {
  const elem = <div className="sampleElement"></div>;

  const tree : MulberryTreeType = {
    node: elem,
    children: [
      { node: elem, children: [ { node: elem, children: [
        { node: elem }, 
      ] }, { node: elem }, { node: elem, children: [
        { node: elem }, {node: elem}
      ] }, { node: elem }]},
      { node: elem, children: [ { node: elem } ] }
    ]
  }

  return (
    <MulberryTree tree={tree} root={true} />
  );
}

export default App;

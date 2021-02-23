import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What are the differences between functional and class components?',
        content: 'Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.'+
        'Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ'
    },
    {
        title: 'What is the virtual DOM?',
        content: ' virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.'
    },
    {
        title: 'Why was virtual DOM introduced? ',
        content: 'DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.'+
        'The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.'
    },
    {
        title: 'How to pass data between react components?',
        content: 'With the help of props, we can send data from a parent to a child component.'+
        'Simply put, Higher Order Component(HOC) is a function that takes in a component and returns a new component.'
    }
];
const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
    {
        label: 'A Shade of Yellow',
        value: 'yellow',
      }
  ];
export default () => {

    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
        <div className="ui container">
        <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
        </div>
    </div>
    );
}
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import Header from './components/Header'
import SearchTodo from './components/SearchTodo'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import TodoAdd from './components/TodoAdd'


class App extends Component {

  maxId = 100;

  state = {
    items: [ 
      { id: 1, label: 'Купить машину за дорого', important: false, done: false },
  ],
    filter: 'all',
    search: ''
  };

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return { items: [...state.items, item] };
    })
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return { items };
    });
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'important');
      return { items };
    });
  };

  onDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSearchChange = (search) => {
    this.setState({ search });
  };

  createItem(label) {
    return {
      id: ++this.maxId,
      label,
      important: false,
      done: false
    };
  }

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => (!item.done));
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { items, filter, search } = this.state;
    const in_done = items.filter((item) => item.done).length;
    const in_proccess = items.length - in_done;
    const visibleItems = this.searchItems(this.filterItems(items, filter), search);

    return (
      <div className="todos">
        <Header in_proccess={in_proccess} in_done={in_done}/>
        <TodoAdd onItemAdded={this.onItemAdded} />

        <div className="search-panel d-flex">
          <SearchTodo onSearchChange={this.onSearchChange}/>

          <TodoFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>

        <TodoList
          todos={ visibleItems }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onDelete={this.onDelete} />

       
      </div>
    );
  };
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


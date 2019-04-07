import * as React from 'react';
import SelectMenu from 'fannypack/SelectMenu';

export class AsyncExample extends React.Component {
  select = React.createRef();

  loadOptions = async ({ page }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
    const items = await response.json();
    const options = items.map(item => ({ key: item.id, label: item.title, value: item }));
    return { options };
  };

  render = () => {
    return <SelectMenu isDropdown loadOptions={this.loadOptions} />;
  };
}

export default AsyncExample;

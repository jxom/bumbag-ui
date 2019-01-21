import * as React from 'react';

import SelectMenu from '../SelectMenu';

export class AsyncExample extends React.Component<{}> {
  select = React.createRef();

  loadOptions = async ({ page }: { page: number }) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
    const items = await response.json();
    const options = items.map((item: any) => ({ key: item.id, label: item.title, value: item }));
    return { options };
  };

  render = () => {
    return <SelectMenu isDropdown loadOptions={this.loadOptions} />;
  };
}

export default AsyncExample;

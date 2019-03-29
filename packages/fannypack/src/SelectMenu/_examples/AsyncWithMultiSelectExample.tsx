import * as React from 'react';

import SelectMenu from '../SelectMenu';

export class AsyncExample extends React.Component<{}> {
  select = React.createRef();

  loadOptions = async ({ page, searchText }: { page: number; searchText: string }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10${searchText ? `&q=${searchText}` : ''}`
    );
    const items = await response.json();
    const options = items.map((item: any) => ({ key: item.id, label: item.title, value: item }));
    return { options };
  };

  render = () => {
    return <SelectMenu isDropdown isMultiSelect isSearchable loadOptions={this.loadOptions} useTags />;
  };
}

export default AsyncExample;

import React from 'react';
import PageLimit from './PageLimit';
import SeachText from './SeachText';
import SearchStatus from './SearchStatus';
import Sort from './Sort';

function TodoContainer() {
  return (
    <>
      <div className="my-2 d-flex gap-3">
        <SeachText />
        <SearchStatus />
      </div>

      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort />
      </div>
    </>
  );
}

export default TodoContainer;

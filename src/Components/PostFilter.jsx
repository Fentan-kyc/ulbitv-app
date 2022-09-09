import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput type='text' placeholder = 'Поиск...' value = {filter.query}
         onChange = {e => setFilter({...filter, query: e.target.value })}/>

        <MySelect
             defaultOpt="Sort by"
             value={filter.sort}
             onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                opts={[
                    { value: 'title', name: 'title' },
                    { value: 'body', name: 'body' }
                ]}
        />
    </div>
  )
}

export default PostFilter
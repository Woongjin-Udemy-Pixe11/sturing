'use client';
import SearchInput from '@/components/common/SearchInput';
import CurrentSearch from '@/components/search/CurrentSearch';
import useLocalStorage from '@/utils/useLocalStorage';
import { useState } from 'react';

export default function SearchPart() {
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, addSearchToLocalStorage, removeFromLocal] =
    useLocalStorage('recent', []);

  const onSearch = () => {
    if (recentSearches.includes(inputValue)) {
      setInputValue('');
      return;
    }
    if (inputValue.trim() != '') {
      addSearchToLocalStorage(inputValue);
      setInputValue('');
    }
  };

  const onRemove = (search: string) => {
    removeFromLocal(search);
  };
  return (
    <section>
      <SearchInput
        placeholderText="관심 스터디 분야나 강의명을 검색해 보세요"
        value={inputValue}
        changeHandler={(e: any) => {
          setInputValue(e.target.value);
        }}
        localsave={onSearch}
      />
      <CurrentSearch data={recentSearches} remove={onRemove} />
    </section>
  );
}

'use client';

import SearchInput from '@/components/common/SearchInput';
import CurrentSearch from '@/components/search/CurrentSearch';
import useLocalStorage from '@/utils/useLocalStorage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SearchPartProps {
  isList: boolean;
  initialKeyword?: string;
}

export default function SearchPart(props: SearchPartProps) {
  const { isList, initialKeyword = '' } = props;
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>('');
  const [recentSearches, addSearchToLocalStorage, removeFromLocal, clearLocal] =
    useLocalStorage('recent', []);

  useEffect(() => {
    setInputValue(initialKeyword);
  }, [initialKeyword]);

  const onSearch = () => {
    const trimmedInput = inputValue.trim();

    if (trimmedInput === '') {
      return;
    }

    if (!recentSearches.includes(trimmedInput)) {
      addSearchToLocalStorage(trimmedInput);
    }

    setInputValue('');
    router.push(`/search/result?keyword=${trimmedInput}`);
  };

  const onRemove = (search: string) => {
    removeFromLocal(search);
  };

  const onClear = () => {
    clearLocal();
  };

  const onInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="pt-[1.2rem]">
      <SearchInput
        placeholderText="관심 스터디 분야나 강의명을 검색해 보세요"
        value={inputValue}
        changeHandler={onInputKeyword}
        localsave={onSearch}
      />
      {isList && (
        <CurrentSearch
          data={recentSearches}
          remove={onRemove}
          clear={onClear}
        />
      )}
    </section>
  );
}

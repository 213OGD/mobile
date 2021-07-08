/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useTagSelection = (
  dataTags: any,
  loadingTags: boolean,
): any => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  const [displayTags, setDisplayTags] = useState<string[]>(['All']);

  // Selecting tags in Front
  function tagSelection(item: any, isChecked: boolean) {
    if (item === 'All') {
        setSelectedTags(['All']);
      } else {
        setSelectedTags([]);
    }
    if (item !== 'All') {
      if (isChecked) {
        const removeTagAll = selectedTags.filter(
          (tagName) => tagName !== 'All'
        );
        setSelectedTags([...removeTagAll, item]);
      }
      if (!isChecked) {
        const removeTag = selectedTags.filter(
          (tagName) => tagName !== item
        );
        setSelectedTags(removeTag);
      }
    }
  }

  useEffect(() => {
    function getTags() {
      const tagList: string[] = ['All'];

      if (!loadingTags) {
        // eslint-disable-next-line array-callback-return
        dataTags.tags.map((tag: { name: string }) => {
          tagList.push(tag.name);
        });
        setDisplayTags(tagList);
      }
    }
    getTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTags, loadingTags]);

  // Return True if file has tag checked
  function isFileSelected(
    fileTags: string[],
    selectedTagsArray: string[]
  ): boolean {
    if (selectedTagsArray.includes('All')) return true;
    return fileTags.some((fileTag) =>
      selectedTagsArray.includes(fileTag)
    );
  }

  return [displayTags, selectedTags, tagSelection, isFileSelected];
};

export default useTagSelection;

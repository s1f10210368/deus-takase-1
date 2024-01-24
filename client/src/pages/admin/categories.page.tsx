import { useEffect, useState } from 'react';
import { useLoading } from 'src/pages/@hooks/useLoading';
import { apiClient } from 'src/utils/apiClient';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const { loadingElm, addLoading, removeLoading } = useLoading();

  useEffect(() => {
    const fetchCategories = async () => {
      addLoading();
      const res = await apiClient.private.categories.$get();
      setCategories(res.map((category) => category.name));
      removeLoading();
    };

    fetchCategories();
  }, [addLoading, removeLoading]);

  const handleNewCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewCategory(e.target.value);

  const handleAddCategory = async () => {
    addLoading();
    try {
      await apiClient.private.categories.$post({
        body: { name: newCategory },
      });
      setCategories([...categories, newCategory]);
      setNewCategory('');
      alert('Category added successfully!');
    } catch (error) {
      alert('Failed to add category.');
    } finally {
      removeLoading();
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <input
          type="text"
          value={newCategory}
          onChange={handleNewCategoryChange}
          placeholder="New Category"
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      {loadingElm}
    </div>
  );
};

export default CategoriesPage;

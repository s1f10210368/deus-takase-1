import { useState } from 'react';
import { useLoading } from 'src/pages/@hooks/useLoading';
import { apiClient } from 'src/utils/apiClient';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const { loadingElm, addLoading, removeLoading } = useLoading();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    if (e.target.checked) {
      setCategories([...categories, category]);
    } else {
      setCategories(categories.filter((c) => c !== category));
    }
  };

  const handleSubmit = async () => {
    addLoading();
    try {
      await apiClient.private.posts.$post({
        body: { title, content, categories },
      });
      setTitle('');
      setContent('');
      setCategories([]);
      alert('Post created successfully!');
    } catch (error) {
      alert('Failed to create post.');
    } finally {
      removeLoading();
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
        <textarea value={content} onChange={handleContentChange} placeholder="Content" />
        <div>
          {categories.map((category, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={(e) => handleCategoryChange(e, category)}
              />
              {category}
            </label>
          ))}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {loadingElm}
    </div>
  );
};

export default AdminPage;

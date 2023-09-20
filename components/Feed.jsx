'use client';
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard';


const PromptCardList = ({data , handleTagClick}) => {
  return(
    <div className='mt-16 prompt_layout'> 
     {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
        ))}

    </div>
  )
}

const Feed = () => {

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPost = async () => {
      const respone = await fetch('/api/prompt');
      const data = await respone.json();

      setPost(data);
    }

    fetchPost();


  }, [])


  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
      <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
      data={post}
      handelTagClick={() => {}}
      />

    </section>
  )
}

export default Feed
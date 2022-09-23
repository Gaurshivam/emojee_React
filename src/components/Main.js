import emojiList from '../emojiList';
import {useState,useEffect} from 'react';
import EmojiContainer from './EmojiContainer';

const Main = () =>{
  //console.log(emojiList);
const [list, setList] = useState(emojiList);
const [keyword, setKeyword] = useState("");

const typed = (e) => {
     const value = e.target.value.toLowerCase();
     setKeyword(value);
}
  useEffect( _ => {
//Filter based on description, category, alasses
 const filterList = emojiList.filter(singleEmoji =>{

  if(singleEmoji.description.startsWith(keyword)) {
    return true;
  }
  if(singleEmoji.description.startsWith(keyword)){
    return true;
  }
  if(singleEmoji.aliases.some(e => e.startsWith(keyword))){
    return true;
  }

  return false;
})
setList(filterList);
  }, [keyword]);
  return (
    <main>
    <div className='search'>
    <input type="text" placeholder='filter 🔎'  onKeyUp={typed}/>
    {keyword === "" ? false : (<h3>Result for - {keyword}</h3>)}
    </div>
    <hr />
      {list.length === 0 ? (
          <h3 className='no-result'>No Emoji found😳</h3>
      ) : (
            <EmojiContainer list={list} />
      )
      }
    </main>
  )
}
export default Main;
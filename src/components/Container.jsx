import { useState } from 'react';
import '../components/Container.scss'
import Divider from '../components/Divider';
import Text from '../components/Text';
import Button from './Button';


function Container() {

  const [posts, setPosts] = useState({});

  return (
    <>
    <div className="container">
      <Text posts={posts}/>
      <Divider/>
      <Button setPosts={setPosts}/>
    </div>
  </>
  )
}

export default Container

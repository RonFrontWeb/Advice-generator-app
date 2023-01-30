import '../components/Text.scss'

function Text({posts}) {
  return (
    <>
    <div className="text"> 
      <h1 className='text__heading'>
        Advice #{posts.slip?.id}</h1>
      <p className='text__paragraph'>{posts.slip?.advice}</p>
    </div>
    <div>
  </div>
  </>
  )
}

export default Text

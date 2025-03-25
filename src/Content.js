import{FaBookmark} from 'react-icons/fa';

const Content = () => {


  return (
    <main>
      <FaBookmark
        onClick={() => console.log('clicked')}
        role = "button"
      />
    </main>
  );
}

export default Content;
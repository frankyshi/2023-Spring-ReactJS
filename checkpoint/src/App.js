import {Post, Comment, Avatar} from "./components.js";
import img from "./smiling_man.jpg";

function App() {
  return (
    <>
      <Avatar image={img} />
      <Post post="New post!"/>
      <Comment comment="Hello!" name="Frank Shi"/>
    </>
  );
}
export default App;

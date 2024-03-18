import './App.css'

function App() {

  return (
    <>
      <form>
      <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <input type="text" id="comments" name="comments" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App

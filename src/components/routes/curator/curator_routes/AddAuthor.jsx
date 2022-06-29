import './GlobalStyles.css'

export default function AddAuthor() {
  return (
    <div className="curator-container">
      <h1 className="heading">Add Author</h1>
      <div className="form-container">
        <form className="form" action="">
          <label>Name</label>
          <input
            type="text"
            name="author_name"
            className="form-item"
            // value={}
            // onChange={}
          ></input>
          <label>Bio</label>
          <textarea className="form-item" rows="8" name="bio"></textarea>

          <label>Image Link</label>
          <input
            type="text"
            name="image_link"
            className="form-item"
            // value={}
            // onChange={}
          ></input>
        </form>
      </div>
    </div>
  )
}

import './GlobalStyles.css'

export default function AddPrize() {
  return (
    <div className="curator-container">
      <h1 className="heading">Add Prize</h1>
      <div className="form-container">
        <form className="form" action="">
          <label>Prize Name</label>
          <input
            type="text"
            name="prize_name"
            className="form-item"
            // value={}
            // onChange={}
          ></input>
          <label>Prize Country</label>
          <input
            type="text"
            name="country"
            className="form-item"
            // value={}
            // onChange={}>
          ></input>
          <label>Prize Description</label>
          <textarea className="form-item" rows="8" name="about"></textarea>
          <label>Prize Website</label>
          <input
            type="text"
            name="link"
            className="form-item"
            // value={}
            // onChange={}
          ></input>
          <label>Prize Genre</label>
          <input
            type="text"
            name="genre"
            className="form-item"
            // value={}
            // onChange={}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

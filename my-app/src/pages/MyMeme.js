import { loadMemes } from "../LocalStorage";

const MyMeme = () => {

  let memes = loadMemes()

  return (
    <div className="container">
      <div class="row no-gutters">
        
          {(memes.length > 0) ? memes.map((meme) =>
          <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
            <div className="card h-100">
              <img src={meme.url} className="card-img-top" alt="Meme"></img>
              <div className="card-body">
                <p>{meme.text}</p>
              </div>
            </div>
            </div>
          ) : <p className="mt-4">You have no memes saved</p>}
        </div>
      
    </div >


  );
};

export default MyMeme;
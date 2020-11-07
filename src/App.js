import './App.css';

function App() {
  var Filter = require('bad-words')
  var custom_filter = new Filter({placeHolder: '*'})
  custom_filter.addWords('duck','pass')

  function postBtnClk(){
    
      var content = document.getElementById("area").value
      content = custom_filter.clean(content)
  
      document.getElementById("post").innerText = content
    }

  function clearBtnClk(){
    
    document.getElementById("post").innerText = ""
    document.getElementById("area").value = ""
  }

  return (

    <div className="App">
         
          <div className="textArea_div">
            <textarea id="area" className="textarea" rows="20" cols="50">

            </textarea>
          </div>

          <div className="components_div">
            <button id="post_button" className="Button" onClick={postBtnClk}>POST</button>
            <button id="clear_button" className="Button" onClick={clearBtnClk}>CLEAR</button>
            
          </div>

          <div className="post">
              <p className = "post" id="post"></p>
          </div>

    </div>
    
  );
}

export default App;

function doSomething(event) {

   event.preventDefault();
    console.log("Button was clicked");
  }

// To handle events we use attributes like onClick , onHover , onSubmit , etc.


export default function Form() {
    return (
    <form onSubmit={doSomething}>   
     <input type="text" />
  
     <button type="Submit">Submit</button>

    </form>
    );
}
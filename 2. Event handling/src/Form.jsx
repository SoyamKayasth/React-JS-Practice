function doSomething(event) {

   event.preventDefault();
    console.log("Button was clicked");
  }




export default function Form() {
    return (
    <form onSubmit={doSomething}>   // To handle events we use attributes like onClick , onHover , onSubmit , etc.
     <input type="text" />
  
     <button type="Submit">Submit</button>

    </form>
    );
}
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


function Page1Content() {
    const users = [
      {
        img: "/src/assets/professional-women.jpg",
        intro: "",
        tag: "Satisfied",
      },
      {
        img: "/src/assets/working-girl.avif",
        intro: "",
        tag: "deserved",
      },
      {
        img: "/src/assets/working.jpg",
        intro: "",
        tag: "Underserved",
      },
      {
        img: "/src/assets/walking women.jpg",
        intro: "",
        tag: "Underbanked",
      },
      {
        img: "/src/assets/the man.jpg",
        intro: "",
        tag: "Underserved",
      },
    ];     
     
  return (
    <div className='flex items-center justify-between flex-1 py-6 px-12 gap-4'>
       <LeftContent />
       <RightContent users = {users} />
    </div>
  )
}

export default Page1Content
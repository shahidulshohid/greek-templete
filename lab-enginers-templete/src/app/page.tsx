import ProjectDescriptionEight from "./(alTemplete)/file-one/project-description-eight/page"
import ProjectDescriptionNine from "./(alTemplete)/file-one/project-description-nine/page"
import ProjectDescriptionOne from "./(alTemplete)/file-one/project-description-one/page"



function Home() {
  return (
    <div className='p-8'>
      {/* <ProjectDescriptionOne/> */}
      {/* <ProjectDescriptionEight/> */}
      <ProjectDescriptionNine/>
    </div>
  )
}

export default Home
import ProjectDescriptionEight from "./(alTemplete)/file-one/project-description-eight/page"
import ProjectDescriptionEleven from "./(alTemplete)/file-one/project-description-eleven/page"
import ProjectDescriptionNine from "./(alTemplete)/file-one/project-description-nine/page"
import ProjectDescriptionOne from "./(alTemplete)/file-one/project-description-one/page"
import ProjectDescriptionTen from "./(alTemplete)/file-one/project-description-ten/page"
import ProjectDescriptionTwo from "./(alTemplete)/file-one/project-description-two/page"



function Home() {
  return (
    <div className='p-8'>
      {/* <ProjectDescriptionOne/> */}
      {/* <ProjectDescriptionEight/> */}
      {/* <ProjectDescriptionNine/> */}
      {/* <ProjectDescriptionTwo/> */}
      {/* <ProjectDescriptionTen/> */}
      <ProjectDescriptionEleven/>
    </div>
  )
}

export default Home
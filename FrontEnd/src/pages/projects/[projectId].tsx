import { useRouter } from 'next/router'
import React from 'react'

const ProjectDetails = () => {
    const router=useRouter();
    const id=router.query.projectId;
  return (
    <div>ProjectDetails</div>
  )
}

export default ProjectDetails
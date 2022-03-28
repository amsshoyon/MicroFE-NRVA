import React from 'react'
import { Button } from './ButtonComponents'
import { Box } from './LayoutComponents'

const AboutCard = () => {
  return (
    <Box>
        <h3 className='text-2xl font-bold mb-4'>About us</h3>
        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa.</p>
        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore quisquam laboriosam est quo voluptatum soluta, deleniti nobis debitis nihil.</p>
        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum, repudiandae nobis porro similique tempore, rerum beatae natus libero voluptas perferendis qui accusantium tempora eligendi iste dolorem, culpa odio nemo. Delectus tenetur labore dicta eum magnam harum quaerat fugit quisquam? Ad voluptatibus illum fugiat mollitia qui neque perspiciatis a est debitis beatae. Suscipit autem non aperiam fuga magni incidunt aspernatur.</p>
        <Button>Learn More</Button>
    </Box>
  )
}

export default AboutCard
"use client" 
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import { CircleArrowDown, RocketIcon } from 'lucide-react'


function FileUploader() {
     const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
  
  return (
    
     <div {...getRootProps()}
     className='p-2 border-2 border-dashed w-[90%]'
     >
      <input {...getInputProps()} />
      {
        isDragActive ?
        (<>
        <RocketIcon     className='h-20 w-20 animate-ping'/>
         <p>Drop the files here ...</p>
        </>)
          :
         ( 
         <>
         <CircleArrowDown className='animate-bounce h-20 w-20'/>
         <p>Drag n drop some files here, or click to select files</p>
            </>
         )
      }
    </div>
  )
}

export default FileUploader
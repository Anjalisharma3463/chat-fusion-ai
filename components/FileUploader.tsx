"use client" 
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react'
import { Upload, FileText, CheckCircle2, X, RocketIcon } from 'lucide-react'
import { Button } from './ui/button'

function FileUploader() {
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    // Simulate upload
    setIsUploading(true)
    setTimeout(() => setIsUploading(false), 2000)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt']
    },
    maxSize: 10485760, // 10MB
    multiple: false
  })

  const removeFile = () => {
    setFiles([])
    setIsUploading(false)
  }

  return (
    <div className="min-h-screen bg-black pt-8 pb-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Page Header */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-4xl font-bold text-white">
            Upload Your Chat
          </h1>
          <p className="text-lg text-gray-400">
            Get AI-powered insights from your WhatsApp conversations
          </p>
        </div>

        {/* Upload Area */}
        <div
          {...getRootProps()}
          className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer
            ${isDragActive 
              ? 'border-emerald-500 bg-emerald-500/10 scale-[1.02]' 
              : 'border-gray-700 bg-gray-900/50 hover:border-gray-600 hover:bg-gray-900/80'
            }
            ${files.length > 0 ? 'border-solid border-emerald-500/50' : ''}
          `}
        >
          <input {...getInputProps()} />
          
          {/* Upload States */}
          <div className="p-16">
            {isDragActive ? (
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <RocketIcon className="h-20 w-20 text-emerald-400 animate-bounce" />
                  <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white mb-2">Drop it like it's hot! 🔥</p>
                  <p className="text-gray-400">Release to upload your file</p>
                </div>
              </div>
            ) : files.length > 0 ? (
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <CheckCircle2 className="h-20 w-20 text-emerald-400" />
                  <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white mb-2">File Ready!</p>
                  <p className="text-gray-400">Click to change or drag another file</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full" />
                  <Upload className="h-20 w-20 text-gray-400 relative z-10" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white mb-3">
                    Upload your WhatsApp chat export
                  </p>
                  <p className="text-gray-400 mb-2 text-lg">
                    Drag and drop your .txt file here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Maximum file size: 10MB
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        {/* File Preview */}
        {files.length > 0 && (
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="bg-emerald-500/10 p-3 rounded-xl">
                  <FileText className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-lg truncate">
                    {files[0].name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {(files[0].size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile()
                }}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 ml-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="mb-4">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 animate-pulse" style={{ width: '100%' }} />
                </div>
                <p className="text-sm text-gray-400 mt-3">Processing file...</p>
              </div>
            )}

            {/* Action Buttons */}
            {!isUploading && (
              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-6 text-base"
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log('Analyzing:', files[0])
                  }}
                >
                  Analyze Chat
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-700 hover:bg-gray-800 py-6 px-6"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile()
                  }}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            How to export your WhatsApp chat
          </h3>
          <ol className="space-y-2 text-gray-400">
            <li className="flex gap-2">
              <span className="text-emerald-400 font-semibold">1.</span>
              <span>Open WhatsApp and go to the chat you want to analyze</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-semibold">2.</span>
              <span>Tap the three dots (⋮) → More → Export Chat</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-semibold">3.</span>
              <span>Select "Without Media" and save the .txt file</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-semibold">4.</span>
              <span>Upload the file here to get instant insights!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default FileUploader
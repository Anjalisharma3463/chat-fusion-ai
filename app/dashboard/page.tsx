"use client"
import { useState } from 'react'
import { FileText, Trash2, Eye, Upload, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'


// Mock data - replace with real data later
const mockChats = [
  {
    id: '1',
    name: 'Family Group Chat',
    date: '2024-01-15',
    status: 'done',
    messageCount: 1250
  },
  {
    id: '2',
    name: 'Work Team Discussion',
    date: '2024-01-14',
    status: 'processing',
    messageCount: 890
  },
  {
    id: '3',
    name: 'Friends Weekend Plans',
    date: '2024-01-12',
    status: 'done',
    messageCount: 456
  },
  {
    id: '4',
    name: 'College Study Group',
    date: '2024-01-10',
    status: 'done',
    messageCount: 2340
  },
]

function Dashboard() {
  const [chats, setChats] = useState(mockChats)

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'done':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Done
          </span>
        )
      case 'processing':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Processing
          </span>
        )
      case 'uploaded':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-500/10 text-gray-400 text-sm font-medium">
            <Clock className="h-3.5 w-3.5" />
            Uploaded
          </span>
        )
      default:
        return null
    }
  }

  const handleDelete = (id: string) => {
    setChats(chats.filter(chat => chat.id !== id))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-black pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Uploaded Chats
            </h1>
            <p className="text-gray-400">
              Manage and analyze your WhatsApp conversations
            </p>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold"
            onClick={() => window.location.href = '/dashboard/upload'}
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload New Chat
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Total Chats</div>
            <div className="text-3xl font-bold text-white">{chats.length}</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Processed</div>
            <div className="text-3xl font-bold text-emerald-400">
              {chats.filter(c => c.status === 'done').length}
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Processing</div>
            <div className="text-3xl font-bold text-blue-400">
              {chats.filter(c => c.status === 'processing').length}
            </div>
          </div>
        </div>

        {/* Chats List */}
        {chats.length === 0 ? (
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-16 text-center">
            <FileText className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No chats uploaded yet</h3>
            <p className="text-gray-400 mb-6">Upload your first WhatsApp chat to get started</p>
            <Button 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white"
              onClick={() => window.location.href = '/dashboard/upload'}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Chat
            </Button>
          </div>
        ) : (
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-800">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Chat Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Date Uploaded</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Messages</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Status</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {chats.map((chat) => (
                    <tr key={chat.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-500/10 p-2 rounded-lg">
                            <FileText className="h-5 w-5 text-emerald-400" />
                          </div>
                          <span className="text-white font-medium">{chat.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-400">
                        {formatDate(chat.date)}
                      </td>
                      <td className="py-4 px-6 text-gray-400">
                        {chat.messageCount.toLocaleString()}
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(chat.status)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white hover:bg-gray-800"
                            disabled={chat.status !== 'done'}
                             onClick={() => window.location.href = '/analysis/' + chat.id}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Analyze
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                            onClick={() => handleDelete(chat.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-800">
              {chats.map((chat) => (
                <div key={chat.id} className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-emerald-500/10 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium mb-1">{chat.name}</h3>
                      <p className="text-sm text-gray-400">{formatDate(chat.date)}</p>
                    </div>
                    {getStatusBadge(chat.status)}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>{chat.messageCount.toLocaleString()} messages</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-700 hover:bg-gray-800"
                      disabled={chat.status !== 'done'}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Analyze
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50"
                      onClick={() => handleDelete(chat.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
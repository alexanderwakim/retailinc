import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Trash2, RefreshCw } from 'lucide-react';

interface ContactMessage {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  message: string | null;
  created_at: string;
}

export default function Admin() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setMessages(data || []);
      }
    } catch (err) {
      setError('Failed to fetch messages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error: deleteError } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (deleteError) {
        alert('Failed to delete message: ' + deleteError.message);
      } else {
        setMessages(messages.filter(msg => msg.id !== id));
      }
    } catch (err) {
      alert('Failed to delete message');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Messages</h1>
          <button
            onClick={fetchMessages}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 mb-6 rounded">
            {error}
          </div>
        )}

        {messages.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-600 text-lg">No messages yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{msg.full_name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(msg.created_at).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="text-red-600 hover:text-red-800 transition-colors p-2"
                    title="Delete message"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-gray-900 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Phone</p>
                    <a
                      href={`tel:${msg.phone_number}`}
                      className="text-gray-900 hover:underline"
                    >
                      {msg.phone_number}
                    </a>
                  </div>
                </div>

                {msg.message && (
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Message</p>
                    <p className="text-gray-900 whitespace-pre-wrap bg-gray-50 p-4 rounded">
                      {msg.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center text-gray-500 text-sm">
          Total messages: {messages.length}
        </div>
      </div>
    </div>
  );
}

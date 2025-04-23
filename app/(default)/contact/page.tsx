'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    userEmail: '',
    channel: 'X',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'name' ? 'fullName' : id === 'email' ? 'userEmail' : id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'New Contact Request from Website',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully! We will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        fullName: '',
        userEmail: '',
        channel: 'X',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-linear-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Let's Connect</h1>
              <p className="text-lg text-zinc-500">Talk to an expert about your requirements, needs, and timeline. Complete the form and we'll make sure to reach out.</p>
            </div>

            {/* Form */}
            <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-linear-to-b from-zinc-100 to-zinc-50/.7 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">

              {submitStatus.type && (
                <div className={`mb-6 p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="name">Full Name</label>
                    <input 
                      id="name" 
                      className="form-input text-sm w-full" 
                      type="text" 
                      placeholder="First Name & Last Name" 
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                      id="email" 
                      className="form-input text-sm w-full" 
                      type="email" 
                      placeholder="user@email.com" 
                      value={formData.userEmail}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="channel">How did you hear about us?</label>
                    <select 
                      id="channel" 
                      className="form-select w-full" 
                      value={formData.channel}
                      onChange={handleChange}
                      required
                    >
                      <option>X</option>
                      <option>Reddit</option>
                      <option>Email</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      className="form-textarea text-sm w-full" 
                      rows={4} 
                      placeholder="How can I help you?" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-5">
                  <button 
                    type="submit"
                    className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>

              <div className="text-center mt-6">
                <div className="text-xs text-zinc-500">
                By reaching out, you agree to our <a className="underline hover:no-underline" href="#0">Terms</a> and understand your data is handled with care.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const sanitizeInput = (input) => input.replace(/[<>]/g, '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent spam clicks

    if (!formData.name.trim() || formData.name.length < 3) {
      alert('Name must be at least 3 characters long.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      alert('Message must be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: sanitizeInput(formData.name),
      from_email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
      reply_to: sanitizeInput(formData.email),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      alert('Message Sent!');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitting(false), 5000);
    } catch (error) {
      alert('Oops! Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
      <div className='p-20 w-200 bg-gray-800 rounded-2xl'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
          Get In Touch
        </h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              type='text'
              name='name'
              required
              value={formData.name}
              className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
              placeholder='Name...'
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className='relative'>
            <input
              type='email'
              name='email'
              required
              value={formData.email}
              className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
              placeholder='example@gmail.com'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className='relative'>
            <textarea
              name='message'
              required
              rows={5}
              value={formData.message}
              className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
              placeholder='Your Message...'
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <button
            type='submit'
            className={`w-full py-3 px-6 rounded font-medium transition relative overflow-hidden ${
              isSubmitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-white'
            }`}
            disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

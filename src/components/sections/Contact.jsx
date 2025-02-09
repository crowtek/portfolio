import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const sanitizeInput = (input) => input.replace(/[<>]/g, '').trim();

  const validateForm = () => {
    if (formData.name.length < 3) return 'Name muss mindestens 3 Zeichen lang sein.';
    if (!isValidEmail(formData.email)) return 'Bitte eine gültige E-Mail-Adresse eingeben.';
    if (formData.message.length < 10) return 'Nachricht muss mindestens 10 Zeichen lang sein.';
    return null;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Reset error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
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

      setFormData({ name: '', email: '', message: '' });
      setError('');
    } catch {
      setError('Fehler beim Senden der Nachricht. Bitte versuche es erneut.');
    } finally {
      setTimeout(() => setIsSubmitting(false), 5000); // Cooldown before next submission
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center py-20 bg-black">
      <div className="p-20 w-200  rounded-2xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Schreib mir
        </h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {['name', 'email', 'message'].map((field) => (
            <div key={field} className="relative">
              {field === 'message' ? (
                <textarea
                  name={field}
                  rows={5}
                  value={formData[field]}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder={field === 'name' ? 'Name...' : field === 'email' ? 'example@gmail.com' : 'Deine Nachricht...'}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder={field === 'name' ? 'Name...' : 'example@gmail.com'}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className={`w-full py-3 px-6 rounded font-medium transition relative overflow-hidden ${
              isSubmitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-white'
            }`}
            disabled={isSubmitting}>
            {isSubmitting ? 'Senden...' : 'Senden'}
          </button>
        </form>
      </div>
    </section>
  );
};

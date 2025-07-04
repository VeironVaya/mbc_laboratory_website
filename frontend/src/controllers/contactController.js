import { sendContact } from '../services/api';

export async function handleContactSubmit(formData, setStatus, resetForm) {
  setStatus('sending');
  try {
    const res = await sendContact({
      name: formData.nama,
      email: formData.email,
      subject: formData.subjek,
      message: formData.pesan
    });

    if (res.success) {
      setStatus('sent');
      resetForm();
    } else {
      setStatus('error');
    }
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
}
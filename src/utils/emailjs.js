import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
// You'll need to replace this with your actual EmailJS user ID
// emailjs.init("YOUR_USER_ID");

export const sendEmail = async (templateParams) => {
  try {
    // You'll need to replace these with your actual EmailJS service ID and template ID
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};
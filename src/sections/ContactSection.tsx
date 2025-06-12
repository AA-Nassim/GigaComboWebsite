import { useRef, useState } from "react";
import Button from "../components/Button"
import { contactText } from "../static/TextContentFR"
import emailjs from '@emailjs/browser';

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactSection = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) {
            console.error("Form reference is null.");
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }

        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTouched({});
    };

    const inputStyle = `block w-full rounded-sm bg-white px-3.5 py-2 
    text-base text-gray-900  
    placeholder:text-gray-400 
    focus:outline-3  
    transition ease-in-out duration-200`;

    // Helper to add red outline if touched and empty
    const getInputClass = (field: string) => {
        let isInvalid = false;
        if (field === "email") {
            isInvalid = touched[field] && (!formData[field] || !isValidEmail(formData[field]));
        } else {
            isInvalid = touched[field] && !formData[field as keyof typeof formData];
        }
        return `${inputStyle} ${isInvalid ? 'outline outline-3 outline-red-600' : ''}`;
    };

    return (
        <section id="contact" className="section-container bg-amber-400">
            <div className=" w-full h-full flex flex-col lg:flex-row gap-15">
                <div className="flex-1/3 flex flex-col gap-15 items-center ">
                    <h1 className="section-title">
                        {contactText.title}
                    </h1>

                    <p className="section-description">
                        {contactText.description}
                    </p>
                </div>

                <div className="flex-2/3 flex justify-center ">

                    <form ref={formRef} action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" aria-required className="block text-sm/6 font-semibold text-gray-900">
                                    First name
                                </label>

                                <div className="mt-2.5">
                                    <input
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        placeholder="Binted"
                                        className={getInputClass('firstName')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                    Last name
                                </label>

                                <div className="mt-2.5">
                                    <input
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        autoComplete="family-name"
                                        placeholder="Bogos"
                                        className={getInputClass('lastName')}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                    Email
                                </label>

                                <div className="mt-2.5">
                                    <input
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="YourEmail@example.com"
                                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                        className={getInputClass('email')}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                    Message
                                </label>

                                <div className="mt-2.5">
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Your message here"
                                        className={getInputClass('message')}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 w-full flex justify-center">
                            <Button disabled={loading} buttonText={loading ? "Loading ..." : "Submit"} buttonType="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
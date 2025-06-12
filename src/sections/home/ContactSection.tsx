import Button from "../../components/Button"
import { contactText } from "../../static/TextContentFR"

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const inputStyle = `block w-full rounded-sm bg-white px-3.5 py-2 
    text-base text-gray-900  
    placeholder:text-gray-400 
    focus:outline-3  focus:outline-amber-950 
    invalid:outline-3 invalid:outline-red-600 invalid:text-red-600 
    focus:invalid:outline-4 focus:invalid:outline-red-600 
    transition ease-in-out duration-200`;

    return (
        <section className="section-container bg-amber-400">
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
                    
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" aria-required className="block text-sm/6 font-semibold text-gray-900">
                                    First name
                                </label>

                                

                                <div className="mt-2.5">
                                    
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Binted"
                                    className={inputStyle} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                Last name
                                </label>
                                
                                <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" placeholder="Bogos"
                                    className={inputStyle}/>
                                </div>
                            </div>


                            
                            <div className="sm:col-span-2">
                                
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                    Email
                                </label>
                                
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" placeholder="YourEmail@example.com"
                                    className={inputStyle}/>
                                </div>
                            </div>

                            
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                    Message
                                </label>

                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} placeholder="Your message here"
                                    className={inputStyle}></textarea>
                                </div>
                            </div>
                            
                        </div>

                        <div className="mt-10 w-full flex justify-center">
                            <Button buttonText="test" buttonType="submit" />
                        </div>
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default ContactSection
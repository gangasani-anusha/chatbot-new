import React from 'react';

function Contact() {
    return (
        <div className="container1 my-5 px-10 mx-auto">
            <section className="mb-40 text-grey-800">
                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <h2 className="text-3xl font-bold mb-6">Contact us</h2>
                        <p className="text-grey-500 mb-6">
                            Got questions or feedback about our chatbot? Contact us anytime:
                        </p>
                        <p className="text-grey-500 mb-2">San Jose, 95192, United States</p>
                        <p className="text-grey-500 mb-2">ashika.anandbabu@sjsu.edu</p>
                        <p className="text-grey-500 mb-2">ramya.mahesh@sjsu.edu</p>
                        <p className="text-grey-500 mb-2">anusha.gangasani@sjsu.edu</p>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <form>
                            <div className="form-group mb-6">
                                <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                       placeholder="Name" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                       placeholder="Email address"/>
                            </div>
                            <div className="form-group mb-6">
            <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;

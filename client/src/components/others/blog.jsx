import Crowdfire from "../images/crowdfire.png";

const Blog = () => {

    return (
<div className=" bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
                <img
              src={Crowdfire}
              alt="Crowdfire"
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            />

                <div>
                    <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>

                    <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                        What do you want to know about UI
                    </h1>

                    <div className="flex items-center mt-6">
                       <img
              src={Crowdfire}
              alt="Crowdfire"
              className="object-cover object-center w-10 h-10 rounded-full"
            />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 className="text-blue-500 capitalize">Design instument</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        How to raise $100k+ by using blox ui kit on your design
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 className="text-blue-500 capitalize">UI Resource</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Should you creat UI Product by using Blox?
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 className="text-blue-500 capitalize">Premium Collection</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Blocks you can get on Blox's collection.
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 className="text-blue-500 capitalize">Premium kits</h3>

                    <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Ui kit you can get on Blox's collection.
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700"></hr>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        What do you want to know about UI
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                John snow
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        All the features you want to know</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Arthur Melo
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""></img>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Which services you get from Meraki UI
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Tom Hank
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  };
  
  export default Blog;
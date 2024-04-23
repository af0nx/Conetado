import Crowdfire from "../images/crowdfire.png";

const Blog = () => {

    return (
<div class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:-mx-6">
            <div class="lg:w-3/4 lg:px-6">
                <img
              src={Crowdfire}
              alt="Crowdfire"
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            />

                <div>
                    <p class="mt-6 text-sm text-blue-500 uppercase">Want to know</p>

                    <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                        What do you want to know about UI
                    </h1>

                    <div class="flex items-center mt-6">
                       <img
              src={Crowdfire}
              alt="Crowdfire"
              className="object-cover object-center w-10 h-10 rounded-full"
            />

                        <div class="mx-4">
                            <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 class="text-blue-500 capitalize">Design instument</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        How to raise $100k+ by using blox ui kit on your design
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 class="text-blue-500 capitalize">UI Resource</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Should you creat UI Product by using Blox?
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 class="text-blue-500 capitalize">Premium Collection</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Blocks you can get on Blox's collection.
                    </a>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                    <h3 class="text-blue-500 capitalize">Premium kits</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Ui kit you can get on Blox's collection.
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  };
  
  export default Blog;
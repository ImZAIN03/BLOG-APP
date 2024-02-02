import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div  className="flex flex-col sm:flex-row p-3 border border-teal-800 justify-center items-center rounded-lg text-center">
        <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl font-medium">
                Want to learn more about Web Development?
            </h2>
            <p className="text-gray-400 my-2">
                Check out these free sources.
            </p>
            <Button gradientDuoTone='greenToBlue' className="rounded-lg">
                <a href="https://www.linkedin.com/in/muhammed-zain2003/" target="_blank" rel='noopener noreferrer'>
                    Web Development Projects 
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XlURXRsnoqHaFZKzwVbXTGOUMnybhHz9eg&usqp=CAU" alt="Image"/>
        </div>
    </div>
  )
}

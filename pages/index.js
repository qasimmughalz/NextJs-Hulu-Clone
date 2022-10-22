import Header from "../components/header";

export default function Home() {
  return (

    <>
      <Header/>
    
    <div className=''>
      <div className='container mx-auto md:h-screen '>
        <div className='flex md:h-screen justify-around items-center flex-wrap'>
          <div className='flex-none md:w-1/3'>
              <p>Hi,</p>
              <h3 className='text-2xl font-sans font-bold'>I'm Muhammad Qasim</h3>
              <p>This is my frst tailwind project with Next Js to have a better practise of both tailwind and next js projects </p>
              <button className='mt-3 bg-slate-300 rounded px-4 py-2 border-gray-900 hover:bg-slate-600'>Say Hi !</button>
          </div>
          <div className='flex-none md:w-1/3'>
            <div className='rounded'>
             <img className='rounded' src='https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='This is alt image/'/>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
 
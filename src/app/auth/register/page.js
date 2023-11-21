import PageContainer from "@/components/ui/PageContainer"
export default function RegisterPage() {
  return (
    <PageContainer>
      <div className="flex flex-col justify-center h-[70dvh] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 border rounded-xl p-10 gap-8">
          <form className="">
            <div className="py-2">
              <input className="w-full border rounded p-2" id='name' name='name' type='text' placeholder="Your Name" />
            </div>
            <div className="py-2">
              <input className="w-full border rounded p-2" id='email' name='email' type='email' placeholder="Enter Your Email" />
            </div>
            <div className="py-2">
              <input className="w-full border rounded p-2" id='password' name='password' type='password' placeholder="Create A Password" />
            </div>
            <div className="py-2">
              <input className="w-full border rounded p-2" id='passwordConfirm' name='passwordConfirm' type='password' placeholder="Retype Your Password" />
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
              <button type='submit' className="px-8 bg-gray-900 text-white py-2 text-sm">Register</button>
              <p className="text-xs">Already Have An Account? </p>
            </div>
          </form>
          <div className="my-auto p-6">
            <h1 className="text-3xl fomt-semibold">Register For Dev Social</h1>
            <p className="py-6 text-sm">This application is a simple social website that allows web developers to create a profile and list their Jobs, Experiance and Skills. This is not for production use and is only here for me to have a working project to add new features to.</p>
            <p>Find Out More About Me Here</p>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

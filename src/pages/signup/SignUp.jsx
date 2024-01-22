const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#04152e]">
      <div className="bg-line p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl text-white font-bold mb-8">Üye Formu</h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Kullanıcı adı
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Kullanıcı adını giriniz..."
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Email adresini giriniz..."
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Şifrenizi giriniz..."
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-amber-500 text-white p-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

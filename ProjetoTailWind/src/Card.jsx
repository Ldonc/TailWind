const Card = () => {
    return (
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          className="w-full h-60 object-cover"
          src="https://tse4.mm.bing.net/th/id/OIP.ADM7W-VjdKP1q_BTALpa5AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Imagem Ilustrativa"
        />
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Título do Card</h2>
          <p className="text-gray-600 mt-3">
            Esta é uma descrição de exemplo para mostrar como o Tailwind facilita a estilização.
          </p>
          <button className="mt-5 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Saiba Mais
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
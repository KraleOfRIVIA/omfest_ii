import ModalWindow from "../ui/modal-window.jsx";


function HomePage() {
    return (
        <>
            <h1 className="text-2xl text-left font-semibold mt-8 ml-[65px] mb-8">
                Бесплатные шаблоны
                презентаций с готовым оформлением
            </h1>
            <div className="flex justify-between items-center">
                <img className="w-1/2 ml-[150px]" src={'public/image.png'} alt="Image description"/>
                <h2 className="text-2xl font-semibold text-right w-1/2 mt-[350px] mr-5 ">
                    Удобный и простой редактор, который позволит сделать и оформить презентацию
                </h2>
            </div>

            <div className="text-center mt-9">
                <ModalWindow />
            </div>
        </>
    )
}

export default HomePage;
function ModalWindow() {
    return(
        <>
            <button className="btn bg-[#DBFF00] rounded-[33px] font-weight: 600 text-2xl" onClick={()=>document.getElementById('my_modal_1').showModal()}>сгенерировать</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Создай свою презентацию</h3>
                    <input type="text" placeholder="введите тему для создания слайдов..."
                           className="input input-bordered w-full max-w-xs"/>
                    <div>
                        <h3 className="font-bold text-lg">Количество слайдов</h3>
                        <input type="number" min={1} className="input input-bordered w-full max-w-xs"/>
                        <h3 className="font-bold text-lg">Опишите контекст презентации</h3>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                                  placeholder="например, тематику, цель презентации,важные факты или то что нам поможет сделать презентацию лучше "/>
                        <h3 className="font-bold text-lg">Выбери язык</h3>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Auto</option>
                            <option>Русский</option>
                            <option>Английский</option>
                        </select>
                        <h3 className="font-bold text-lg">Стиль</h3>
                       

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button
                                className="btn bg-[#DBFF00] rounded-[33px] font-weight: 600 text-2xl">сгенерировать
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ModalWindow;
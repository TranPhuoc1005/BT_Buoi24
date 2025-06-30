import React from 'react'

export default function Item(props) {
    const {glassesDetail} = props;
    return (
        <div>
            <div className="flex flex-1/2 justify-center gap-8 mb-8">
                <div className="relative w-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className='img-glasses relative'>
                        <img className="rounded-t-lg" src="./glassesImage/model.jpg" alt="" />
                        <div className='glasses absolute top-29 left-0.5 right-0 mx-auto w-max'><img className='opacity-80' src={glassesDetail.url} width={220} alt="" /></div>
                    </div>
                    <div className="p-5 absolute bottom-0 bg-[rgba(255,163,77,0.5)]">
                        <div>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{glassesDetail.name}</h5>
                        </div>
                        <p className="font-normal limit-3 text-gray-700 dark:text-gray-400">{glassesDetail.desc}</p>
                    </div>
                </div>
                <div className="w-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className='img-glasses'>
                        <img className="rounded-t-lg" src="./glassesImage/model.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

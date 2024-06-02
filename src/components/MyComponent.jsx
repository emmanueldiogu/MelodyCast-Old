
function MyComponent() {
    return (
        <div className="flex flex-col justify-between px-2 py-12 text-sm font-semibold text-center text-white uppercase whitespace-nowrap shadow-2xl backdrop-blur-md bg-white bg-opacity-20 rounded-[80px]">
            <div className="flex flex-col">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a78de2a4ed10c2b19cd5bf4241f38685eb02cdbe2f2501e0c10b7e3ee811f3?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                    className="self-center aspect-square w-[50px]"
                />
                <div className="mt-1">weather</div>
            </div>
            <div className="flex flex-col mt-8">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46fb241fa7d0b85978d008712485ce7b2df6d8ecb4f506103827d055c814eee?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                    className="self-center aspect-[0.9] w-[45px]"
                />
                <div className="mt-1">MUSIC</div>
            </div>
            <div className="flex flex-col mt-8">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/062994176da434c59b69863966f0f1b14026abd853c75fc9ab186af499b12d56?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                    className="self-center aspect-square w-[50px]"
                />
                <div className="mt-1">LOCATIONS</div>
            </div>
            <div className="flex flex-col mt-8">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90bab764061a675c2b28cce8bf05d21edae13e55c4ace251dc285ec3fc80aef2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                    className="self-center aspect-square w-[50px]"
                />
                <div className="mt-1">settings</div>
            </div>
        </div>
    );
}


export default MyComponent;
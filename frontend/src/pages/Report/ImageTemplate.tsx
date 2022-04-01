
type Props = {
    isPhoto: boolean,
    photo: any
}

export const ImageTemplate = (props: Props) => {
  return (
    <div
          className={`my-2.5 w-[500px] h-[600px] font-serif m-auto bg-white rounded-sm p-10 flex flex-col text-[10px] relative ${
            !props.isPhoto && "hidden"
          }`}
        >
          <h1 className="font-bold">GAMBAR GAMBAR SEPANJANG AKTIVITI</h1>
          <section className="grid grid-cols-3 gap-5 mt-10">
            {props.photo?.map((img: any, index: number) => {
              return(
                <img src={`${img.url}`} alt="pho" key={index} className="w-[100px] h-[100px] object-cover m-auto"/>
              )
            })}
          </section>
    </div>
  )
}
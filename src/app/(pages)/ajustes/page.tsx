import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col justify-center m-auto bg-white rounded-md p-3">
      <div className="flex flex-wrap w-full p-3">
      <h3><strong>Em breve:</strong> Ajustes e personalizações white label</h3>
        
      </div>
      <Image src="/static/images/coming-soon.webp" 
      width={720} height={480} alt="Em breve. Sessão em construção" 

      />
    </div>
  )
}

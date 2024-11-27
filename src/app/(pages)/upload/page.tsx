import { auth } from "@/auth";
import { FileList } from "@/components/file-card-list";
import FileUploader from "@/components/file-uploader";
import { redirect } from "next/navigation";

export default async function UploadPage() {
  const session = await auth()

  if (!session) {
    redirect("/sign-in")
  }
  return (
    <div className="container flex flex-col mx-auto py-10 gap-12 h-full">
      <div className="flex flex-col text-center justify-center ">
        <h1 className="text-3xl font-bold mb-4">
          Faça Upload dos seus arquivos com segurança
        </h1>
        <span className="text-base font-medium mb-4">
          Armanezamento <strong>Grátis</strong>. Gerencie seus dados de forma
          rápida e prática
        </span>
      </div>
      <FileUploader />
      <div className="flex flex-col items-center p-8 rounded-lg justify-center flex-wrap bg-zinc-200 ">
        <div className="flex text-right w-full h-auto py-4 px-8 border-t">
          <p className="text-xl font-bold my-2">Dados recém armazenados: </p>
        </div>
        <FileList />
      </div>
    </div>
  );
}

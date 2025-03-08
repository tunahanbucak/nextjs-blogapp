import { handleSubmission } from "@/app/action";
import { SubmitButton } from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogroute() {
  return (
    <div className="min-h-screen pt-4 bg-gray-100">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Gönderi Oluştur</CardTitle>
          <CardDescription>
            Dünyayla paylaşmak için yeni bir gönderi oluşturun
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4 " action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Başlık</Label>
              <Input name="title" required type="text" placeholder="Başlık" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>İçerik</Label>
              <Textarea name="content" required placeholder="İçerik" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Resim URL</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="Resim URL'si"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

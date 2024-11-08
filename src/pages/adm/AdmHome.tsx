import AdmLayout from "@/components/AdmLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmHome() {
    return (
        <AdmLayout>
            <div className="w-full p-6 tam-2:p-10 pt-20 tam-2:pt-20">
                <div className="max-w-[1024px] flex flex-col gap-6 m-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, neques sint. Quibusdam cupiditate cum repellat doloribus minima asperiores vitae culpa sint, esse voluptatibus consequuntur nulla labore cumque aperiam possimus impedit?</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nisi ipsam, voluptate dolor soluta numquam sequi voluptatibus minus, quisquam deserunt laboriosam dolores aliquam illo aliquid modi culpa? Perspiciatis, odio minima.</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aspernatur laudantium officiis ad facere voluptate libero illum optio, repudiandae necessitatibus consequatur illo expedita eveniet quos natus dolorum facilis, enim similique.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus labore inventore laboriosam magni eligendi? Doloribus eos nemo recusandae reprehenderit voluptatem ex voluptates corporis. Magnam expedita vero amet eos tenetur!</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, maiores facere dolorum quos quae velit asperiores eius soluta est doloremque neque cupiditate dolorem veritatis vero, laborum consequuntur delectus id enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, neques sint. Quibusdam cupiditate cum repellat doloribus minima asperiores vitae culpa sint, esse voluptatibus consequuntur nulla labore cumque aperiam possimus impedit?</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nisi ipsam, voluptate dolor soluta numquam sequi voluptatibus minus, quisquam deserunt laboriosam dolores aliquam illo aliquid modi culpa? Perspiciatis, odio minima.</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aspernatur laudantium officiis ad facere voluptate libero illum optio, repudiandae necessitatibus consequatur illo expedita eveniet quos natus dolorum facilis, enim similique.</p>
                </div>
            </div>
        </AdmLayout>
    )
}
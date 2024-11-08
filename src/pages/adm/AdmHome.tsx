import AdmLayout from "@/components/AdmLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Warning, WarningOctagon } from "phosphor-react";

export default function AdmHome() {
    return (
        <AdmLayout>
            <div className="w-full p-6 tam-2:p-10 pt-20 tam-2:pt-20">
                <div className="max-w-[1024px] flex flex-col gap-6 m-auto">
                    <Card>
                        <CardHeader className="py-2 px-3">
                            <CardTitle className="uppercase flex items-center gap-3">
                                <WarningOctagon color="red" weight="bold" size={30} />
                                Clientes em atraso
                            </CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <p>lista de clientes</p>
                        </CardContent>
                        {/* <CardFooter><p>Card Footer</p></CardFooter> */}
                    </Card>

                    <Card>
                        <CardHeader className="py-2 px-3">
                            <CardTitle className="uppercase flex items-center gap-3">
                                <Warning color="orange" weight="bold" size={30} />
                                Clientes vencendo
                            </CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <p>lista de clientes</p>
                        </CardContent>
                        {/* <CardFooter><p>Card Footer</p></CardFooter> */}
                    </Card>

                </div>
            </div>
        </AdmLayout>
    )
}
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

import {
    Select as ShadcnSelect,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { ReuseableLoading } from "@/components/custom/ReuseableLoading"
import { Link } from "react-router-dom"

const RoleCreate = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <div className="flex gap-5 items-center ">
                <Link to='/user-management/role'>
                    <ArrowLeft className="cursor-pointer hover:opacity-70" />
                </Link>
                <h3 className="font-bold text-xl">Create Role</h3>
            </div>
            <div className="mt-10 flex justify-center">
                <div className="w-6/12">
                    <div className="flex flex-col mb-5">
                        <Label htmlFor="name" className="mb-3">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <Label htmlFor="name" className="mb-3">Permission</Label>
                        <ShadcnSelect>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent aria-multiselectable>
                                <SelectGroup aria-multiselectable>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </ShadcnSelect>
                    </div>
                    <div className="mx-auto pt-2 max-w-fit">
                        <ReuseableLoading loading={loading} onClick={() => setLoading(true)} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoleCreate
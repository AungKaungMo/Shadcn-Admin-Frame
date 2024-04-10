import { DataTable } from "@/components/data-table"
import { columns } from "./components/columns"
import { data } from "./data"
import { CirclePlusIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Role = () => {
    return (
        <div>
            <div className="flex justify-between">
                <h3 className=" font-bold text-xl">Role Management</h3>
                <div className="p-1 px-4 cursor-pointer hover:opacity-70 rounded-md bg-muted me-1 ">
                    <Link to='create'>
                        <CirclePlusIcon width={18} className="text-foreground" />
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Role;
import { forwardRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

interface TagType {
    id: string;
    name: string;
}

const MultiSelect = forwardRef<HTMLInputElement, InputProps>(
    () => {

        const [query, setQuery] = useState("");
        const [menuOpen, setMenuOpen] = useState(false);
        const [selected, setSelected] = useState<string[]>([]);
        const tags: TagType[] = [
            {
                id: '1',
                name: 'Tutorial',
            },
            {
                id: '2',
                name: 'HowTo',
            },
            {
                id: '3',
                name: 'DIY',
            },
            {
                id: '4',
                name: 'Review',
            },
            {
                id: '5',
                name: 'Tech',
            },
            {
                id: '6',
                name: 'Gaming',
            },
        ]

        const filteredTags = tags.filter((tag) => tag?.name?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) && !selected.includes(tag.name))

        return (
            <div>
                <div className="relative">
                    <input className="cursor-pointer flex items-center justify-between h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Search tags"
                        type="text" value={query}
                        onChange={(e) => setQuery(e.target.value.trimStart())}
                        onFocus={() => setMenuOpen(true)}
                        onBlur={() => setMenuOpen(false)}
                    />
                    <ChevronDown className="absolute top-1.5 right-3 text-muted-foreground" width={16} />
                </div>

                {menuOpen && (
                    <div className="  w-full max-h-52 overflow-auto mt-2 rounded-md border border-input bg-background  py-1 text-sm">
                        <ul className="flex flex-col py-2">
                            {filteredTags?.length ? filteredTags.map((tag) => (
                                <li key={tag.id}
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => {
                                        setMenuOpen(true);
                                        setSelected((prev) => [...prev, tag?.name])
                                    }}
                                    className=" select-none cursor-pointer hover:bg-muted p-2.5 px-4 rounded-md mx-1.5">{tag.name}</li>
                            )) : (
                                <li className="text-center opacity-70"> No options avaiable </li>
                            )}
                        </ul>
                    </div>
                )}

            </div>
        )
    }
)
MultiSelect.displayName = "MultiSelect"

export { MultiSelect }

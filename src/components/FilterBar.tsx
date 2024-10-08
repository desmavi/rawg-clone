import { ChangeEvent} from 'react'
import usePlatforms from '../hooks/usePlatforms'

interface FilterBar {
    onSelectPlatform: (id: number | null) => void
}

function FilterBar({ onSelectPlatform } : FilterBar) {

    const {data: platforms, error } = usePlatforms() 

    if((platforms.length === 0 || error)) return

    return (
        <div className='mb-8'>
            <select 
                className="select select-ghost w-full max-w-xs border-[1px] border-slate-300 dark:border-0"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    const value = e.target.value === "all" ? null : parseInt(e.target.value);
                    onSelectPlatform(value);
                }}
            >
            
                <option disabled>Filter by platform</option>
                <option value="all">All</option>
                {
                    platforms.map(el => {
                        return <option key={el.id} value={el.id}>{el.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FilterBar
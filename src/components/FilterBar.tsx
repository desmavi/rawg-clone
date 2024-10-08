import { ChangeEvent} from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { capitalizeWords } from '../utils/misc'
import { sortBy } from '../utils/const'

export interface QueryProps {
    onChangeQuery: (value:number | null | string, name:string) => void
}

function FilterBar({ onChangeQuery } : QueryProps) {
    const {data: platforms, error } = usePlatforms() 
    if((platforms.length === 0 || error)) return

    return (
        <div className='mb-8 flex-col md:flex-row'>
            <select 
                aria-label="Filter by platform"
                className="select select-ghost w-full md:w-1/4  border-[1px] border-slate-300 dark:border-slate-500 me-4 mb-4"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    const value = e.target.value === "all" ? null : parseInt(e.target.value);
                    onChangeQuery(value, "platform");
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); 
                        const selectElement = e.target as HTMLSelectElement;
                        selectElement.click();
                        }
                }}
                tabIndex={0}
            >
                <option disabled>Filter by platform</option>
                <option value="all">All</option>
                {
                    platforms.map(el => {
                        return <option key={el.id} value={el.id}>{el.name}</option>
                    })
                }
            </select>

            <select 
                aria-label="Order by"
                className="select select-ghost w-full md:w-1/4 border-[1px] border-slate-300 dark:border-slate-500 "
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    const value =  e.target.value;
                    onChangeQuery(value, "ordering");
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); 
                        const selectElement = e.target as HTMLSelectElement;
                        selectElement.click();
                        }
                }}
                tabIndex={0}
            >
            
                <option disabled>Order by</option>
                {
                    sortBy.map(el => {
                        return <option key={el.label} value={el.value} className='capitalize'>{capitalizeWords(el.label)}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FilterBar
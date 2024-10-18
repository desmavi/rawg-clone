import { ChangeEvent} from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { capitalizeWords } from '../utils/misc'
import { sortBy } from '../utils/const'
import { Platform } from '../services/platform-service'
import useGameStore from '../store/gameStore'


function FilterBar() { 

    const onChangeQuery = useGameStore(s => s.handleQueryObject)
    const {data: platforms, error } = usePlatforms()
    
    if((platforms?.results?.length === 0 || error?.message)) return

    return (
        <div className='mb-8 flex-col md:flex-row px-2'>
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
                    platforms?.results.map((el : Platform) => {
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
import MyInput from "../UI/MyInput";
import MySelect from "../UI/MySelect";

const PostFilter = ({ filter, setFilter, options }) => {
  return <>
    <MyInput placeholder='Поиск...' value={filter.query} onChange={e => setFilter({ ...filter, query: e.target.value })} />
    <MySelect defaultValue='Сортировка' options={options} value={filter.sort} onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })} />
  </>
}

export default PostFilter;
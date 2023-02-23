export const Button = ({onRandom}) => {
    
    const onSubmit = (e) => {
        e.preventDefault();
        onRandom();
    }
  
  return (
    <form onSubmit={onSubmit}>
      <button type="submit" className="h-10 w-44 text-white rounded-lg bg-red-500 hover:bg-red-600">Random Tweet</button>
    </form>
  )
}

const LoadingIndicator = () => (<div className="loader ease-linear rounded-full border-8 border-t-8 h-32 w-32 border-background"></div>)


export default function EmptyListPlaceholder({ isLoading = false, query = "" }) {
  return (
    <div className="flex mt-10 justify-center">
      {isLoading ? <LoadingIndicator />: query.length > 0 ? (
        <h3 className="text-white text-2xl text-center">No search results :(</h3>
      ) : (
        <h3 className="text-white text-2xl text-center">Enter search phrase</h3>
      )}
    </div>
  );
}

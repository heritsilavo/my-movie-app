import { getMovieByPath } from "@/utils/movieCilent";

export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const query = searchParams.get("query");
  console.log("QUERRY:", query);

  const response = await getMovieByPath("/search/movie", [
    {
      key: "query",
      value: query,
    },
  ]);
  
  return new Response(JSON.stringify(response), { status: 200 });
}

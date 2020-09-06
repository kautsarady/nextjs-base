import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data } = useSWR('/api/hello', fetcher);

  return (
    <div>
      <h1>
        Hello
        {JSON.stringify(data, null, 2)}
      </h1>
    </div>
  );
}

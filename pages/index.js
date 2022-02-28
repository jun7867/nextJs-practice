import Navbar from '../components/Navbar';

export default function Home({ results }) {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}

// server에서만 작동 (client x)
// SSR
// object를 Return 하면 사용하려는 곳에서 props로 받는다.
export async function getServerSideProps() {
  // const { results } = await (await fetch .. )
  return {
    props: {
      results,
    },
  };
}

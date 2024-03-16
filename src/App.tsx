import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Layout";
import { Posts } from "./pages";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 3000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Posts />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

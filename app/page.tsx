import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";
import AppWrapper from "@/components/app-wrapper";
import { BackgroundWrapper } from "@/components/background-wrapper";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TodosBody } from "@/components/todos-body";
import { getTodos } from "@/lib/api-client";

export default async function Home() {
  const queryClient = new QueryClient();

  // Prefetch the data on the server
  await queryClient.prefetchQuery({
    queryKey: ["todos", "list"], // Use the same key as in your hook
    queryFn: getTodos,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <BackgroundWrapper />
      <HydrationBoundary state={dehydratedState}>
        <main className="h-full w-full z-10 flex flex-col items-center">
          <AppWrapper>
            <Header />
            <TodosBody />
            <Footer />
          </AppWrapper>
        </main>
        =
      </HydrationBoundary>
    </div>
  );
}

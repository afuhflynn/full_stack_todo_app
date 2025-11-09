import AppWrapper from "@/components/app-wrapper";
import { BackgroundWrapper } from "@/components/background-wrapper";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TodosBody } from "@/components/todos-body";

export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <BackgroundWrapper />
      <main className="h-full w-full z-10 flex flex-col items-center">
        <AppWrapper>
          <Header />
          <TodosBody />
          <Footer />
        </AppWrapper>
      </main>
    </div>
  );
}
